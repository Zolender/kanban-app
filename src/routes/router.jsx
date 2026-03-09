import { createBrowserRouter } from "react-router";
import RouteLayout from "../layouts/RouteLayout";
import PublicLayout from "../layouts/PublicLayout";
import Landing from "../pages/Landing";

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
            }
        ]
    }
])

export default router;