import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Category from "../../Pages/Home/Categories/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/*',
                element: <ErrorPage></ErrorPage>
            },
        ]
    }
])

export default router;