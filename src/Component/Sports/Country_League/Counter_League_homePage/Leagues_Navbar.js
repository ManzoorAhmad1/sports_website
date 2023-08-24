import classes from "./Leagues.module.css"
const LeaguesNavbar = (props) => {
    return (
        <div className={classes.soccerNavbar}>
            <div className={classes.soccerHead}>
                <h1>world Leagues</h1>
            </div>
            <div className={classes.soccerLinks}>
                <ul>
                    <li><a href="/">Leagues_Team</a></li>
                    <li><a href="/">Leagues_Team_Details</a></li>
                    <li><a href="/">About_Us</a></li>
                    <li><a href="/">Contact_Us</a></li>
                </ul>
            </div>
        </div>
    )
}
export default LeaguesNavbar;