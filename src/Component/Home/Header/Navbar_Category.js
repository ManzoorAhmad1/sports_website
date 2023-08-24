import classes from "./Navbar_Category.module.css";

const navbarCategory = () => {
    return (
        <div className={classes.category}>
            <details >
                <summary>Sports</summary>
                <div className={classes.links}>
                    <a href=" ">Cricket</a>
                    <a href=" ">Soocer</a>
                    <a href=" ">Hookey</a>
                </div>
            </details>
            <details >
                <summary>Health</summary>
                <div className={classes.links}>
                    <a href=" ">ChildHealth</a>
                    <a href=" ">Man_Health</a>
                    <a href=" ">Woman_Health</a>
                </div>
            </details>
            <details >
                <summary>Media</summary>
                <div className={classes.links}>
                    <a href=" ">National_Media</a>
                    <a href=" ">InterNational <br />Media</a>
                </div>
            </details>
            <details >
                <summary>Fitness</summary>
                <div className={classes.links}>
                    <a href=" ">GYM_Fitness</a>
                    <a href=" ">Sports_Fitness</a>
                    <a href=" ">Regular_Fitness</a>
                </div>
            </details>


        </div>
    )
}
export default navbarCategory;