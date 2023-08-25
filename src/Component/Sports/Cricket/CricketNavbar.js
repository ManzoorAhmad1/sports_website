import classes from "./Cricket.module.css"
import { Link, useNavigate } from "react-router-dom";
const CricketNavbar = (props) => {
    const navigate = useNavigate();
    const loginHandler = () => {
        navigate("/")
    }
    return (
        <div className={classes.cricketNavbar}>
            <div className={classes.cricketHome}>
                <Link to="/">Home</Link>
            </div>
            <div className={classes.cricketLinks}>
                <Link to="/Sports">world_Teams</Link>
                <Link to="/News">Teams_News</Link>
                <Link to="/Leagues_HomePage">Cricket_leagues</Link>
                <button onClick={loginHandler}>Login</button>
            </div>
        </div>
    )
}
export default CricketNavbar;