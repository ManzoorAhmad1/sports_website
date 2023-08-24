import classes from "./Cricket.module.css"

const CricketNavbar = (props) => {
    return (
        <div className={classes.cricketNavbar}>
            <div className={classes.cricketHome}>
                <a href="/">Home</a>
            </div>
            <div className={classes.cricketLinks}>
                <a href="/Sporsts">Cricket_Sports</a>
                <a href="/News">Cricket_News</a>
            </div>
        </div>
    )
}
export default CricketNavbar;