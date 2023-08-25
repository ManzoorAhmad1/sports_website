import HomePageText from "./HomePageText"
import SoccerNavbar from "./Leagues_Navbar"
import classes from "./Leagues.module.css"
const LeaguesHomePage = (props) => {
    return (
        <div className={classes.SoccerHomePage}>
            <SoccerNavbar />
            <HomePageText />
        </div>
    )
}
export default LeaguesHomePage;