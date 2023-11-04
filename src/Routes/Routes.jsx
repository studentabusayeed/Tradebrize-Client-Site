import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../components/Home/Home/Home";
import MainProfile from "../components/Profile/MainProfile/MainProfile";
import ProfileHome from "../components/Profile/ProfileHome/ProfileHome";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Message from "../components/Message/Message";
import NewProfile from "../components/Profile/MainProfile/NewProfile";
import Notification from "../components/Notification/Notification";
import Position from "../components/Position/Position";
import Wallet from "../components/Wallet/Wallet";
import Markets from "../components/Markets/Markets";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";
import Secutiry from "../components/Secutiry/Secutiry";
import Support from "../components/Support/Support";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Trade from "../components/Trade/Trade";
import LogReg from "../components/LogReg/LogReg";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
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
        path: "/tradebrige",
        element: <LogReg />
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
            },
            {
                path: "/position",
                element: <Position />
            },
            {
                path: "/wallet",
                element: <Wallet />
            },
            {
                path: "/markets",
                element: <Markets />
            },
            {
                path: "/profileDetails",
                element: <ProfileDetails />
            },
            {
                path: "/secutiry",
                element: <Secutiry />
            },
            {
                path: "/about",
                element: <Support />
            },
            {
                path: "/trade",
                element: <Trade />
            }
        ]
    }
]);