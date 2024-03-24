import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { QuizPage } from "../pages/QuizPage";
import { ResultPage } from "../pages/ResultPage";

const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <LoginPage />,
        },
        {
            path: "/quiz",
            element: <QuizPage />,
        },
        {
            path: "/result",
            element: <ResultPage />,
        },
    ]
);

export default routes;