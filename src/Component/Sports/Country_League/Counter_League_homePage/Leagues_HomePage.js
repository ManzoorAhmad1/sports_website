import HomePageText from "./HomePageText"
import SoccerNavbar from "./Leagues_Navbar"
// import SoccerTeam from "./Leagues_Team";
import classes from "./Leagues.module.css"
const LeaguesHomePage = (props) => {
    return (
        <div className={classes.SoccerHomePage}>
            <SoccerNavbar />
            <HomePageText />
            {/* <SoccerTeam /> */}
        </div>
    )
}
export default LeaguesHomePage;