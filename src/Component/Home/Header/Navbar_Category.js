import classes from "./Navbar_Category.module.css";
import { Link } from "react-router-dom";
const navbarCategory = () => {
    return (
        <div className={classes.category}>
            <details >
                <summary>Sports</summary>
                <div className={classes.links}>
                    <Link to="/cricket">Cricket</Link>
                    <Link to="Leagues_HomePage">Cricket_leagues</Link>
                </div>
            </details>
            <details >
                <summary>Health</summary>
                <div className={classes.links}>
                    <Link to=" ">ChildHealth</Link>
                    <Link to=" ">Man_Health</Link>
                    <Link to=" ">Woman_Health</Link>
                </div>
            </details>

        </div>
    )
}
export default navbarCategory;