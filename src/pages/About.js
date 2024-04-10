import Face from '../images/lico.jpg';
import '../css/about.css';
export default function CalculatorApp() {

    return (
        <>
            <div className="MovieApp project">
                <h1>Yurii Nadiezhdin</h1>
                <div className='portfolios'>
                    <div className='img'>
                        <img src={Face}/>
                    </div>
                </div>
                <p className='description'>                     
                    As a current student in BCIT's SSD program, expected to 
                    graduate in 2024, I'm deeply passionate about programming 
                    and excel in collaborative team settings. My portfolio 
                    highlights a range of projects, showcasing my skills across 
                    different technologies. I eagerly anticipate leveraging my 
                    knowledge and expertise to overcome future challenges and drive 
                    meaningful innovation in software development.
                </p>

            </div>
        </>
    );
}