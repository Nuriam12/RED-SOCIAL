import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MainLayout } from "../Layouts/MainLayout";

export function Myroutes (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element = {<Home/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )

}