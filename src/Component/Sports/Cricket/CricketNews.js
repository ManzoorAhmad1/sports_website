import CricketNew from "../../../Backened_Folder/Sports/CricketNews"
import classes from "./Cricket.module.css"
const CricketNews = (props) => {
    let cricketNews = CricketNew.map((data) => {
        return (

            <div className={classes.cricketNews} key={data.id}>
                <div className={classes.cricketNewsImage}>
                    <img src={data.imgToUrl} alt="error" />
                </div>
                <div className={classes.CricketNewData}>
                    <ul>
                        <li><h1>{data.title}</h1></li>
                        <li>{data.description}</li>
                    </ul>
                </div>
            </div>
        )
    })
    return (
        <div>
            {cricketNews}
        </div>
    )
}
export default CricketNews;