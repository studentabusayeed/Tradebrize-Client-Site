import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../components/Home/Home/Home";
import MainProfile from "../components/Profile/MainProfile/MainProfile";
import ProfileHome from "../components/Profile/ProfileHome/ProfileHome";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Message from "../components/Message/Message";
import NewProfile from "../components/Profile/MainProfile/NewProfile";
import Notification from "../components/Notification/Notification";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/profile",
        element: <MainProfile />,
        children: [
            {
                path: "/profile",
                element: <ProfileHome />
            }
        ]
    },
    {
        path: "/",
        element: <NewProfile />,
        children: [
            {
                path: "Message",
                element: <Message />
            },
            {
                path: "/notification",
                element: <Notification />
            }
        ]
    }
]);