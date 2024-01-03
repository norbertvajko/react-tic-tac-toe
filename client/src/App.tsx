import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage.tsx";
import {HomePage} from "./pages/HomePage/HomePage.tsx";

export const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}