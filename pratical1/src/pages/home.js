import '../styles/home.css'
import homeImg from '../asset/home.png'
import aboutImg from '../asset/about.png'
import portfolioImg from '../asset/portfolio.png'
import contactImg from '../asset/contact.png'
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';

function Home(params) {
    
    //   var  images=[homeImg];
    return (
        <>
            <div >
                <img src={homeImg} alt="My Image" />
            </div>
            <About about={aboutImg} />
            <Portfolio portfolio={portfolioImg} />
            <Contact contact={contactImg}/>

        </>


    )
}
export default Home;