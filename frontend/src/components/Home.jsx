import LogoPage from "./LogoPage";
import Services from "./Services";
import CardComponents from "./CardComponent";
import Footer from "./Footer";

function Home(){
    return(
        <>
            <LogoPage/>
            <CardComponents/>
            <Services/>
            <Footer/>
        </>
    )
}

export default Home;