import { createBrowserRouter } from "react-router";
import RouteLayout from "../layouts/RouteLayout";
import PublicLayout from "../layouts/PublicLayout";
import Landing from "../pages/Landing";
import AppLayout from "../layouts/AppLayout";
import { getData } from "../utils/storage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RouteLayout/>,
        children: [
            {
                path: '/',
                element: <PublicLayout/>,
                children : [
                    {
                        index: true,
                        element: <Landing/>
                    }
                ]
            },
            {
                path: '/boards',
                element: <AppLayout/>,
                loader: ()=> {
                    const data = getData()
                    return data.boards
                },
                children: [

                ]
            }
        ]
    }
])

export default router;