class ServiceUtilities {

    getActiveLeagues(object) {
        let activeLeagues = 0;
        object.leagues.forEach(ObjectLeague => {
            let leagueDate = new Date(parseInt(ObjectLeague.league.endDate.substring(0, 4)), parseInt(ObjectLeague.league.endDate.substring(5, 7)) - 1, parseInt(ObjectLeague.league.endDate.substring(8, 10)), 0, 0, 0, 0)
            if (leagueDate >= new Date()) {
                activeLeagues++
            }
        })
        return activeLeagues;
    }

    getFirstPlaceTrophies(object) {
        //todo first place trophy math
        return 0;
    }

    getPlacementSuffix(number) {
        let suffix = "th";
        if (number + 1 % 100 !== 11 && number + 1 % 100 !== 12 && number + 1 % 100 !== 13) {
            switch (number + 1 % 10) {
                case 1:
                    suffix = "st";
                    break;
                case 2:
                    suffix = "nd";
                    break;
                case 3:
                    suffix = "rd";
                    break;
                default:
                    break;
            }
        }
        return suffix;
    }
}

export default new ServiceUtilities();