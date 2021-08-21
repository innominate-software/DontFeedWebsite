import http from "../http-common";

class MatchDataService {

    get(id) {
        return http.get(`matches/${id}`)
            .then(response => {
                return response.data;
            }).then(match => {
                return this.convertApiMatchToFrontEndMatch(match)
            })
    }

    getMatchesByUserId(userId) {
        return http.get(`matches/byUser/${userId}`)
            .then(response => {
                return response.data;
            }).then(matches => {
               return this.convertMatchesToTableMatches(matches, userId)
            })
    }

    getMatchesByTeamId(teamId) {
        return http.get(`matches/byTeam/${teamId}`)
            .then(response => {
                return response.data;
            }).then(matches => {
                return this.convertMatchesToTableMatches(matches, teamId);
            })
    }

    getMatchesByLeagueId(leagueId) {
        return http.get(`matches/byLeague/${leagueId}`)
            .then(response => {
                return response.data;
            }).then(matches => {
                return matches;
            })
    }

    convertApiMatchToFrontEndMatch(match) {
        let eventName = match.league ? match.league.name : match.tournament.name;
        let matchDateTime = match.matchDateTime.split("T");
        let matchDate = matchDateTime[0];
        let matchFullTime = matchDateTime[1].substring(0, 5);
        let matchTimes = matchFullTime.split(":")
        let matchTime;
        if (matchTimes[0] < 12) {
            matchTime = matchTimes.join(":") + " AM"
        } else {
            matchTimes[0] = (parseInt(matchTimes[0]) - 12).toString();
            matchTime = matchTimes.join(":") + " PM"
        }
        let teamAPlayers = [];
        let teamBPlayers = [];
        match.players.forEach(matchPlayer => {
            if (matchPlayer.team === "A") {
                teamAPlayers.push(matchPlayer.player)
            } else {
                teamBPlayers.push(matchPlayer.player)
            }
        })

        let teamA = {
            name: match?.teamA?.name,
            players: teamAPlayers
        }
        let teamB = {
            name: match?.teamB?.name,
            players: teamBPlayers
        }
        let victor = match.victor === "A" ? match?.teamA?.name : match?.teamB?.name
        match = {
            ...match,
            eventName,
            victor,
            matchDate,
            matchTime,
            teamA,
            teamB
        }
        return match
    }

    convertMatchesToTableMatches(matches, objectId) {
        let tableMatches = [];
        matches.forEach(match => {
            let game, winOrLose = "";
            switch (match.game.name) {
                case "DOTA2":
                    game = "Dota 2"
                    break;
                default:
                    game = "error"
                    break;
            }
            match.players.forEach(matchPlayer => {
                if (matchPlayer.player.id === objectId ?? matchPlayer.team.id) {
                    winOrLose = matchPlayer.team;
                }
            })
            if (match.victor === winOrLose) {
                winOrLose = "Win"
            } else {
                winOrLose = "Lose"
            }
            let event = match?.league?.name ?? match?.tournament?.name;
            let teamA = match?.teamA?.name;
            let teamB = match?.teamB?.name;
            let map = match?.map;
            let score = match?.score;
            let matchDate = match.matchDateTime.substring(0, 10);
            tableMatches.push([
                {className: "", text: game}, {className: "", text: event},
                {className: "", text: teamA}, {className: "", text: teamB},
                {className: "", text: map}, {
                    className: winOrLose === "Win" ? "green-text" : "red-text",
                    text: winOrLose
                },
                {className: "", text: score}, {className: "", text: matchDate}
            ])
        })
        return tableMatches
    }

}

export default new MatchDataService();