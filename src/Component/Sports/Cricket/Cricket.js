import CricketHome from "./CricketHome";
import CricketNavbar from "./CricketNavbar";
import CricketNews from "./CricketNews";
const Cricket = (props) => {
    return (
        <div>
            <CricketNavbar />
            <CricketHome />
            <CricketNews />
        </div>
    )
}
export default Cricket;