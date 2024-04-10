import movieAppImage from '../images/movie-app-full-width.png';
import jsAppImage from '../images/jsFinal-full-width.png';
import calculatorImage from '../images/calculator-full-width.png';
import deckMasterImage from '../images/Screenshot_1642.png';
import { Link } from 'react-router-dom';

import '../css/home.css';

export default function Home() {     
    function toggleDisplay(className, displayValue) {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => {
            element.style.display = displayValue;
        });
    }
    function handleShowJs() {
        toggleDisplay("js", "flex");
        toggleDisplay("cs", "none");
    }
    
    function handleShowCs() {
        toggleDisplay("js", "none");
        toggleDisplay("cs", "flex");
    }
    
    function handleShowAll() {
        toggleDisplay("js", "flex");
        toggleDisplay("cs", "flex");
    }
    

    return (
        <>
            <div className='cs-js-choise'>
                <button id="showJsButton" onClick={handleShowJs}>Show JS</button>
                <button id="showCsButton" onClick={handleShowCs}>Show CS</button>
                <button id="showAllButton" onClick={handleShowAll}>Show All</button>
            </div>
            <div className="homepage-fullwidth">
                <div className="MovieApp project js" id='js'>
                    <h1>Movie App</h1>
                    <div className='img'>
                        <img src={movieAppImage}/>
                        <img src={movieAppImage} className='bigger'/>
                    </div>
                    <p className='description'>Movie App is a Movie Database listing the movies based on popularity, rating, and release date. Browse for your favourite film, add it to the Favourite List, and save it for the Watch Later list!</p>
                    <Link to={`/movieApp`} className="movie-link">
                        <button>More</button> 
                    </Link>         
                    <a href="https://aqunaty.github.io/movie/#/">
                        <button>Try it by yourself</button>
                    </a>
                </div>
                <div className="jsGame project js" id='js'>
                    <h1>HiLo Game</h1>
                    <div className='img'>
                        <img src={jsAppImage}/>
                        <img src={jsAppImage} className='bigger'/>
                    </div>
                    <p className='description'>Hilo Game is a thrilling card game where players predict whether the next card drawn will be higher or lower than the previous one. Test your luck and intuition as you make quick decisions to climb the ranks and beat the odds!</p>
                    <Link to={`/HiLoApp`} className="movie-link">
                        <button>More</button> 
                    </Link>         
                    <a href="https://aqunaty.github.io/JsFinal/">
                        <button>Try it by yourself</button>
                    </a>
                </div>
                <div className="jsGame project js" id='js'>
                    <h1>calculator</h1>
                    <div className='img'>
                        <img src={calculatorImage}/>
                        <img src={calculatorImage} className='bigger'/>
                    </div>
                    <p className='description'>React Calculator is a user-friendly application designed to perform basic arithmetic operations. Add, subtract, multiply, and divide numbers with ease using this intuitive interface. Perfect for quick calculations on the go.</p>
                    <Link to={`/CalculatorApp`} className="movie-link">
                        <button>More</button> 
                    </Link>
                </div>
                <div className="DeckMaster project cs" id='cs'>
                    <h1>DeckMaster</h1>
                    <div className='img'>
                        <img src={deckMasterImage}/>
                        <img src={deckMasterImage} className='bigger'/>
                    </div>
                    <p className='description'>DeckMaster: Elevating your card game experience with a diverse selection of premium decks. Explore our extensive catalog featuring top-tier card collections, designed to cater to collectors and players alike. Dive into the world of trading cards and find your perfect deck with DeckMaster.</p>
                    <Link to={`/DeckMasterApp`} className="movie-link">
                        <button>More</button> 
                    </Link>
                </div>
            </div>
        </>
    );
}