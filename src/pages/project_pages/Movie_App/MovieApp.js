import movieAppImage from '../../../images/Screenshot_1640.png';

export default function MovieApp() {

    return (
        <>
            <div className="MovieApp">
                <div className="MovieApp project">
                        <h1>Movie App</h1>
                        <div className='img'>
                        <img src={movieAppImage}/>
                        <img src={movieAppImage} className='bigger'/>
                    </div>
                        <p className='description'>In developing the "Movie App" solo, I immersed myself in web development and API integration. Leveraging HTML, CSS, and JavaScript, I crafted an intuitive user interface and utilized APIs to populate the app with a diverse range of movies.

Implementing dynamic features, I enabled users to browse movies based on popularity, rating, and release date. The project's highlight was personalization, allowing users to create Favourite Lists and mark movies to Watch Later, enhancing their movie-watching experience.

Overall, building the "Movie App" was a rewarding journey that deepened my coding skills and provided insights into API utilization. The result is a sleek and versatile app offering users a seamless way to explore and enjoy their favorite films.</p>    
                        
                        <div className="MovieApp project">
                        <p></p>
                        </div> 
                        <a href="https://aqunaty.github.io/movie/#/">
                            <button>Try it by yourself</button>
                        </a>
                    </div> 
                
                
            </div>
        </>
    );
}