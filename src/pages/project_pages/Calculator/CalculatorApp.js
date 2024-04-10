import calculatorImage from '../../../images/calculator-full-width.png';

export default function CalculatorApp() {

    return (
        <>
            <div className="jsGame project">
                    <h1>calculator</h1>
                    <div className='img'>
                        <img src={calculatorImage}/>
                        <img src={calculatorImage} className='bigger'/>
                    </div>
                    <p className='description'>
"React Calculator" is a group project delivering a user-friendly tool for basic arithmetic operations. Built using React.js, it offers an intuitive interface for adding, subtracting, multiplying, and dividing numbers seamlessly.

Collaborating as a team, we designed a responsive layout and implemented features like input validation and error handling. Through effective teamwork, we achieved a polished and efficient calculator application, fostering communication and shared success throughout the development process.</p>
                    <a href="https://aqunaty.github.io/CalculatorApp/">
                        <button>Try it by yourself</button>
                    </a>
            </div>
        </>
    );
}