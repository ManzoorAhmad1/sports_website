import classes from "./Leagues.module.css"

const HomePageText = (props) => {
    return (
        <div className={classes.homeText}>
            <h1>World Leagues</h1>
            <p>The ICC World Cricket League (WCL) was a series of international one-day cricket tournaments for national teams without Test status (i.e., teams of Associate status) administered by the International Cricket Council. All Associate Members of the ICC were eligible to compete in the league system, which featured a promotion and relegation structure between divisions.</p>
            <div className={classes.button}>
                <button><a href="https://en.wikipedia.org/" target="__blank" >Read More</a></button>
            </div>
        </div>
    )
}
export default HomePageText;