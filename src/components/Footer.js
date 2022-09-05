import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer className='Footer'>
            <div className='main-footer'>
                <div className='container1'>
                    <Link to="/" className="footer-title">
                        <img src='../logo1.png' alt='logo1' />
                        Bean and Brew
                    </Link>
                    <p>
                        [This is a paragraph describing the Bean and Brew Company. Maybe like its origins or smth idk. Literally no one reads this I can put absolutely anything.]
                    </p>
                    <address>
                        <img className='us' src='../locationmarker.svg' alt='location marker' />
                        Harrogate and Leeds
                    </address>
                </div>
                <div className='container2'>
                    <ul>
                        <h2>Explore our site...</h2>
                        <li>
                            <Link to="/">Homepage</Link>
                        </li>
                        <li>
                            <Link to="/Menu">Our Menu</Link>
                        </li>
                        <li>
                            <Link to="/Services">Our Services</Link>
                        </li>
                        <li>
                            <Link to="/Coffee">The Coffee</Link>
                        </li>
                    </ul>
                </div>
                <div className='container3'>
                    <h3>B+B Socials:</h3>
                    <a href='https://www.instagram.com/beanandbrewlondon/'>
                        <img className='ig' src='../instalogo.png' alt='instalogo' />
                        @beanandbrewlondon
                    </a>
                    <a href='https://www.facebook.com/beanandbrewlondon'>
                        <img className='fb' src='../fblogo.png' alt='fblogo'></img>
                        Bean + Brew
                    </a>
                </div>
            </div>

            <div className='irrelevant-bits'>
                <small>This website and its content is copyright of Nate Stevenson - © Summer Project 2022. All rights reserved.</small>
            </div>
        </footer>
    )
}