/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Detail from "../pages/detail/Detail";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={< Home />}/>
                <Route path="/detail" element={<Detail/>} />
                <Route path="*" element={<div><h2>Error 404 - Page is not found</h2></div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;