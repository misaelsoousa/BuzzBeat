// import styles from './Navbar.module.css'

import './Navbar.scss';

import { Logo, NewRating, Search } from '../assets/assets'
function Navbar() {

    return (
        <div>

            <nav className="navbar">
                <div className="logo">
                    <Logo/>
                    <p><span>BUZZ</span>BEAT</p>
                </div>
                <div className="search">
                    <Search/>
                    <input type='text'></input>
                </div>
                    <button className="btn">
                        
                        <NewRating className="rating"/>
                        
                        Nova avaliação
                    </button>

            </nav>
        </div>
    )
}

export default Navbar