import jsAppImage from '../../../images/Screenshot_1638.png';

export default function HiLoApp() {

    return (
        <>
            <div className="jsGame project">
                    <h1>HiLo Game</h1>
                    <div className='img'>
                        <img src={jsAppImage}/>
                        <img src={jsAppImage} className='bigger'/>
                    </div>
                    <p className='description'>
                        In "Hilo Game," I embarked on a solo coding journey, diving into 
                        JavaScript to craft a captivating card game experience. I meticulously 
                        managed every aspect of the project, from designing the game logic to 
                        implementing user interaction features. Through this endeavor, I honed 
                        my coding skills, tackled challenges head-on, and brought my creative 
                        vision to life. "Hilo Game" stands as a testament to my dedication and 
                        passion for coding, showcasing both my technical prowess and my ability 
                        to create engaging user experiences.
                    </p> 
                    <a href="https://aqunaty.github.io/JsFinal/">
                        <button>Try it by yourself</button>
                    </a>
                </div>
        </>
    );
}