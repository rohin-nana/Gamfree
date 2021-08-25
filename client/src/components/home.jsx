import './home.css'
import ghost from './img/ghost.png'


const Home = () => {
    return (
        <div className='home'>
            <div className='home-header'>
                <div className='main-header'>
                    Gamfree
                </div>
                <div className='sub-header'>
                    Find What Limited Time Games Are Free Today
                </div>
            </div>
            <div className='front-image'>
                <img src={ghost} alt="Logo" />
            </div>
        </div>
    );
}
 
export default Home;