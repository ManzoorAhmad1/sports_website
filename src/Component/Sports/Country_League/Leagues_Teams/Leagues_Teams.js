
import WorldLeagues from "../../../../Backened_Folder/World_Leagues/World_Leagues"
import LeaguesNavbar from "../Counter_League_homePage/Leagues_Navbar"
import classes from "./Leagues_teams.module.css"
const LeaguesTeams = (props) => {
    const worldLeagues = WorldLeagues.map((teams) => {
        return (
            <div key={teams.id} className={classes.teamsName}>
                <div>
                    <img src={teams.imageToUrl} alt="error" />
                </div>
                <div className={classes.leaguesData}>
                    <h1>{teams.teamName}</h1>
                    <p>{teams.description}</p>
                    <button>Details...</button>
                </div>
            </div>
        )
    })
    return (
        <div>
            <LeaguesNavbar />
            <div className={classes.worldLeagues}>
                {worldLeagues}
            </div>
        </div>

    )
}
export default LeaguesTeams;