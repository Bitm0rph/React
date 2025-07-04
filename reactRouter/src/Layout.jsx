import { Outlet } from "react-router-dom";
// We can change the outlet and use it wherever we want
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function Layout() {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout