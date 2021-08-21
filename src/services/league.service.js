import http from "../http-common";
import matchService from "./match.service"
import teamService from "./team.service"
import utilService from "./util.service"

class LeagueDataService {

    get(id) {
        return http.get(`leagues/${id}`)
            .then(response => {
                return response.data;
            }).then(league => {
                return matchService.getMatchesByLeagueId(league.id)
                    .then(matches => {
                        league = {
                            ...league,
                            matches
                        }
                        return league;
                    }).then(league => {
                        return this.convertApiLeagueToLeaguePageLeague(league)
                    })
            })
    }
    
    existsByName(name) {
        return http.get(`/leagues/existsByName/${name}`);
    }

    create(data) {
        return http.post("/leagues/createLeague", data);
    }

    convertApiLeagueToLeaguePageLeague(league) {
        return this.addTeams(league)
            .then(league => {
                return this.generateWinLoss(league);
            }).then(league => {
                return this.createStandings(league)
            }).then(league => {
                return this.generateMatchObjects(league)
            })
    }

    addTeams(league) {
        return teamService.getTeamsByLeagueId(league.id)
            .then(teams => {
                league.teams = teams;
                return league
            })
    }

    generateWinLoss(league) {
        let winLoss;
        league.teams.forEach(team => {
            team.leagues.forEach(teamLeague => {
                if (teamLeague.league.id === league.id) {
                    winLoss = teamLeague.winLoss.split("/");
                    team.wins = parseInt(winLoss[0]);
                    team.losses = parseInt(winLoss[1]);
                    team.draws = parseInt(winLoss[2]);
                }
            })
        })
        return league
    }

    createStandings(league) {
        league.standings = [];
        league.teams.forEach(team => {
            team.winRatio = ((team.wins) / (team.wins + team.losses + team.draws)).toFixed(3)
        })
        league.teams.sort(function (a, b) {
            return b.winRatio - a.winRatio;
        })
        league.matches.forEach(match => {
            if (match.victor === 'A') {
                league.teams.forEach(team => {
                    this.streakAdjust(team, match.teamA, match.teamB);
                })
            }
            if (match.victor === 'B') {
                league.teams.forEach(team => {
                    this.streakAdjust(team, match.teamB, match.teamA);
                })
            }
            if (match.victor === 'D') {
                //todo write draw logic
            }
        })
        for (let i = 0; i < league.teams.length; i++) {
            let suffix = utilService.getPlacementSuffix(i)
            league.standings.push([
                {className: "", text: i + 1 + suffix}, {className: "", text: league.teams[i].name},
                {className: "", text: league.teams[i].wins}, {className: "", text: league.teams[i].losses},
                {className: "", text: league.teams[i].draws}, {className: "", text: league.teams[i].winRatio},
                {className: league.teams[i].streak > 0 ? "green-text" : league.teams[i].streak < 0 ? "red-text" : "yellow-text", text: league.teams[i].streak > 0 ? league.teams[i].streak + "W" : league.teams[i].streak < 0 ? Math.abs(league.teams[i].streak) + "L" : "not calculating yet"},
            ])
        }
        return league;
    }

    streakAdjust(team, victor, loser) {
        if (team.id === victor.id) {
            if (team.streak >= 0) {
                team.streak++;
            }
            if (team.streak < 0 || team.streak === undefined) {
                team.streak = 1;
            }
        }
        if (team.id === loser.id) {
            if (team.streak >= 0 || team.streak === undefined) {
                team.streak = -1;
            }
            if (team.streak < 0) {
                team.streak--;
            }
        }
    }

    generateMatchObjects(league) {
        let todaysDate = new Date();
        let todaysMatches = []
        let futureMatches = []
        let previousMatches = []
        league.matches.forEach(match => {
            let matchDate = new Date(match.matchDateTime);
            if (matchDate.getFullYear() === todaysDate.getFullYear()
                && matchDate.getMonth() === todaysDate.getMonth()
                && matchDate.getDate() === todaysDate.getDate()) {
                todaysMatches.push([
                    {className: "", text: match.teamA.name}, {className: "", text: match.teamB.name},
                    {className: "", text: match.map}, {className: "", text: "00-00-00"}
                ]);
            }
            if (matchDate < todaysDate) {
                previousMatches.push([
                    {className: "", text: match.game.name}, {className: "", text: match.league.name},
                    {className: "", text: match.teamA.name}, {className: "", text: match.teamB.name},
                    {className: "", text: match.map}, {
                        className: "green-text",
                        text: match.victor === 'A' ? match.teamA.name : match.teamB.name
                    },
                    {className: "", text: match.score}, {className: "", text: match.matchDateTime.substring(0, 10)}
                ]);
            }
            if (matchDate > todaysDate) {
                futureMatches.push([
                    {className: "", text: match.teamA.name}, {className: "", text: match.teamB.name},
                    {className: "", text: match.map}, {className: "", text: "00-00-00"}
                ]);
            }
        })
        let matches = {
            todaysMatches,
            futureMatches,
            previousMatches,
        }
        league = {
            ...league,
            matches,
        }
        return league;
    }
}

export default new LeagueDataService();