import Cricket from "../../../Backened_Folder/Sports/Cricket";
import classes from "./Cricket.module.css"
import Card from "../../UI/Card";
import CricketNavbar from "./CricketNavbar";
const CricketHome = (props) => {
    const cricket = Cricket.map((item) => {
        return (
            <Card key={item.id} >
                <ul>
                    <li><img src={item.img} alt="Error" /></li>
                    <li><h1>{item.title}</h1></li>
                    <li>{item.discription}</li>
                    <li><h2>Capton: {item.Capton}</h2></li>
                    <li>PublishedAt: {item.PublishedAt}</li>
                </ul>
                <div className={classes.button}>
                    <button ><a href="https://www.icc-cricket.com/" target="_blank" rel="noreferrer">Read More</a></button>
                </div>
            </Card>
        )
    })
    return (
        <main >
            <CricketNavbar />
            {cricket}
        </main>
    )
}
export default CricketHome;