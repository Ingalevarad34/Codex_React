import './Home.css';
import navlogo from '../../Assets/navlogo.png';
function Home(params) {
    return (
        <>
            <section id='Home'>
                <nav>
                    <ul >
                        <li><img className='logo' src={`${navlogo}`} /></li>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Features</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>testimonial</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </nav>
                <main>
                    <div className='home_text'>
                        <h1>Cake Shop</h1>
                        <p>Baking with heart.</p>
                    </div>
                    <div className='buttons'>
                        <button>Find Out</button>
                        <button>Read</button>
                    </div>
                </main>
            </section>
        </>
    );
}

export default Home;