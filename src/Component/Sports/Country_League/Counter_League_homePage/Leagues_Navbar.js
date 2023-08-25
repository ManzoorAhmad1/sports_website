import classes from "./Leagues.module.css"
import { Link, useNavigate } from "react-router-dom";
const LeaguesNavbar = (props) => {
    const Navigate = useNavigate()
    const loginHandler = () => {
        Navigate("/")
    }
    return (
        <div className={classes.soccerNavbar}>
            <div className={classes.soccerHead}>
                <Link to="/"><h1>Home</h1></Link>
            </div>
            <div className={classes.soccerLinks}>
                <ul>
                    <li><Link to="/Leagues_Team">Leagues_Team</Link></li>
                    <li><Link to="/Team_Details">Leagues_Team_Details</Link></li>
                    <li><Link to="/">About_Us</Link></li>
                </ul>
            </div>
            <div className={classes.button}>
                <button onClick={loginHandler}>Log In</button>
            </div>
        </div>
    )
}
export default LeaguesNavbar;