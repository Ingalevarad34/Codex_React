import Features from "./features/Features";
import Home from "./home/Home";
import Service from "./service/Service";
import Testimonial from "./testimonial/Testimonial";
import Contact from "./contact/Contact";

function Layout(params) {
    return (
        <>
            <Home />
            <Features />
            <Service />
            <Testimonial />
            <Contact/>
        </>
    );
}

export default Layout;