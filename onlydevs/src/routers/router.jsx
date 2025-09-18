import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MainLayout } from "../Layouts/MainLayout";
import { LoginPage } from "../Pages/LoginPage";

export function Myroutes (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="login" element ={<LoginPage/>}/>
            <Route path="/" element={<MainLayout/>}>
                <Route index element = {<Home/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )

}