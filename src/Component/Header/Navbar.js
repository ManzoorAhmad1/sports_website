import classes from "./Navbar.module.css";
import NavbarCategory from "./Navbar_Category";
const Navbar = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.Logo}>
                <h1>Demo_Websites</h1>
            </div>
            <div className={classes.category}>
                <NavbarCategory />
            </div>
            <div className={classes.loginButton}>
                <button onClick={props.signUp}>Sign Up</button>
            </div>
        </div>
    )
}
export default Navbar;