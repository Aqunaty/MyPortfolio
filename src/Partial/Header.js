import '../css/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <div className="home">
               <a href='/#/'> Home </a>
            </div>
            <ul>
                <li>
                <a href='/#/About'> About </a>
                </li>
            </ul>              
        </div>
    );
}
