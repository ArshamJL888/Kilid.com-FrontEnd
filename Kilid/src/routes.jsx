import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx"
import EditProfile from "./pages/EditProfile/EditProfile.jsx";
import Error404Page from "./pages/404Page/Error404Page.jsx";
import PropertyPage from "./pages/PropertyPage/PropertyPage.jsx";
import CreateAd from "./pages/CreateAd/CreateAd.jsx";
import AgencyAds from "./pages/AgencyAds/AgencyAds.jsx";
import RegisterAgency from "./pages/RegisterAgency/RegisterAgency.jsx";
import SearchProperties from "./pages/SearchProperties/SearchProperties.jsx";
import FilterProperties from "./pages/FilterProperties/FilterProperties.jsx";

const routes = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/authentication",
                element: <SignIn />,
            },
            {
                path: "/edit-profile",
                element: <EditProfile />
            },
            {
                path: "/property/:propertyId",
                element: <PropertyPage />
            },
            {
                path: "/create-new-ad",
                element: <CreateAd />
            },
            {
                path: "/my-ads-agency",
                element: <AgencyAds />
            },
            {
                path: "/add-new-agency",
                element: <RegisterAgency />
            },
            {
                path: "search-properties/:searchParam",
                element: <SearchProperties />
            },
            {
                path: "/filter-properties",
                element: <FilterProperties />
            },
            {
                path: "/*",
                element: <Error404Page />
            }
        ]
    }
]);


export default routes;