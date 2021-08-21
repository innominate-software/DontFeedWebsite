import http from "../http-common";
import utilityService from "./util.service"
import userService from "./user.service"
import matchService from "./match.service"

class TeamDataService {

    get(id) {
        return http.get(`teams/${id}`)
            .then(response => {
                return response.data;
            }).then(team => {
                team.leagues.forEach(teamLeague => {
                    teamLeague.league.matches = matchService.getMatchesByLeagueId(teamLeague.league.id)
                })
                return team
            }).then(team => {
                return this.convertApiTeamToTeamPageTeam(team)

            })
    }

    create(data) {
        return http.post("/teams/createTeam", data);
    }

    getTeamsByLeagueId(leagueId) {
        return http.get(`teams/byLeague/${leagueId}`)
            .then(response => {
                return response.data;
            }).then(teams => {
                return teams
            })
    }

    convertApiTeamToTeamPageTeam(team) {
        let activeLeagues, firstPlaceTrophies;
        let activeRoster = []
        let playerHistory = []
        let leagues = [];
        return matchService.getMatchesByTeamId(team.id)
            .then(matches => {
                return userService.getUsersByTeamId(team.id)
                    .then(users => {
                        activeLeagues = utilityService.getActiveLeagues(team)
                        firstPlaceTrophies = utilityService.getFirstPlaceTrophies(team)
                        users.forEach(user => {
                            user.teams.forEach(userTeam => {
                                if (userTeam.team.id === team.id) {
                                    if (userTeam.dateLeft === null) {
                                        activeRoster.push(user)
                                    }
                                    playerHistory.push([
                                        {className: "", text: user.username}, {className: "", text: user.dateJoined},
                                        {className: "", text: user.dateLeft ?? "Active"}
                                    ])
                                }
                            })
                        })
                        team.leagues.forEach(teamLeague => {
                            let game;
                            switch (teamLeague.league?.game?.name) {
                                case "DOTA2":
                                    game = "Dota 2"
                                    break;
                                default:
                                    game = "ERROR"
                            }
                            leagues.push([
                                {className: "", text: game}, {className: "", text: teamLeague.league.name},
                                {className: "", text: teamLeague.league.season}, {className: "", text: `${teamLeague.league.startDate} - ${teamLeague.league.endDate}`},
                                {className: "", text: teamLeague.league.stage}, {className: "", text: teamLeague.originalName},
                                {className: "", text: teamLeague.placement + utilityService.getPlacementSuffix(teamLeague.placement)}, {className: "", text: teamLeague.winLoss}
                            ])
                        })
                        team = {
                            ...team,
                            activeLeagues,
                            activeRoster,
                            firstPlaceTrophies,
                            leagues,
                            matches,
                            playerHistory,
                        }
                        return team;
                    })
            })
    }
}

export default new TeamDataService();