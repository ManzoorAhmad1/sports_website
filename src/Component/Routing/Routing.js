import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Home/Header/Home";
import CricketHome from "../Sports/Cricket/CricketHome";
import CricketNews from "../Sports/Cricket/CricketNews"
import Cricket from "../Sports/Cricket/Cricket";
import LeaguesHomePage from "../Sports/Country_League/Counter_League_homePage/Leagues_HomePage";
import LeaguesTeams from "../Sports/Country_League/Leagues_Teams/Leagues_Teams";
import LeaguesTeamDetails from "../Sports/Country_League/Leagues_Teams/Leagues_TeamsDetail"
const Routing = (props) => {

    const router = createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "cricket", element: <Cricket /> },
        { path: "Sports", element: <CricketHome /> },
        { path: "News", element: <CricketNews /> },
        { path: "Leagues_HomePage", element: <LeaguesHomePage /> },
        { path: "Leagues_Team", element: <LeaguesTeams /> },
        { path: "Team_Details", element: <LeaguesTeamDetails /> },
    ])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
export default Routing;