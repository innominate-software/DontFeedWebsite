import http from "../http-common";
import matchService from "./match.service"
import utilityService from "./util.service"

class UserDataService {
    getAll() {
        return http.get("/users");
    }

    get(id) {
        return http.get(`/users/${id}`)
            .then(response => {
                return response.data;
            }).then(user => {
                return this.convertApiUserToUserPageUser(user);
            })
    }

    findByEmail(email) {
        return http.get(`/users?email=${email}`);
    }
    
    existsByEmail(email) {
        return http.get(`/users/existsByEmail/${email}`);
    }

    findByUsername(username) {
        return http.get(`/users/existsByUsername/${username}`);
    }
    
    existsByUsername(username) {
        return http.get(`/users/existsByUsername/${username}`);
    }

    getUsersByTeamId(teamId) {
        return http.get(`users/byTeam/${teamId}`)
            .then(response => {
                return response.data;
            }).then(users => {
                return users;
            })
    }

    create(data) {
        return http.post("/auth/signup", data);
    }

    update(id, data) {
        return http.put(`/users/${id}`, data);
    }

    convertApiUserToUserPageUser(user) {
        return matchService.getMatchesByUserId(user.id)
            .then(matches => {
                let games = [];
                let teams = {};
                let activeTeams = [];
                let previousTeams = [];
                let leagues = [];
                let numberOfActiveLeagues = utilityService.getActiveLeagues(user);
                let numberOfFirstPlaceTrophies = utilityService.getFirstPlaceTrophies(user);
                user.games.forEach(game => {
                    games.push(game.name)
                })
                user.teams.forEach(userTeam => {
                    if (userTeam.dateLeft === null) {
                        if (!(activeTeams in teams)) {
                            teams.activeTeams = []
                        }
                        teams.activeTeams.push(userTeam.team)
                    } else {
                        if (!(previousTeams in teams)) {
                            teams.previousTeams = []
                        }
                        teams.previousTeams.push(userTeam.team)
                    }
                })
                user.leagues.forEach(userLeague => {
                    leagues.push([
                        {className: "", text: userLeague.league?.game?.name}, {className: "", text: userLeague.league?.name},
                        {className: "", text: userLeague.league?.season}, {className: "", text: `${userLeague.league?.startDate} - ${userLeague.league?.endDate}`},
                        {className: "", text: userLeague.league?.stage}, {className: "", text: userLeague?.team},
                        {className: "", text: userLeague?.placement}, {className: "", text: userLeague?.winLoss}
                    ])
                })
                user = {
                    ...user,
                    numberOfActiveLeagues,
                    numberOfFirstPlaceTrophies,
                    games,
                    leagues,
                    matches,
                    teams,
                };
                return user
            })
    }
}

export default new UserDataService();