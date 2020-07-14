import React from 'react'
import { Link } from 'react-router-dom'
import { FaGooglePlus, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
export default function Footer(){
    return (
        <footer>
        <div className="row">
            <div className="col span-1-of-2">
                <ul className="footer-nav">
                    <li><Link to='/'>About us</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    <li><Link to='/'>Press</Link></li>
                    <li><Link to='/'>iOS App</Link></li>
                    <li><Link to='/'>Android App</Link></li>
                </ul>
            </div>
            <div className="col span-1-of-2">
                <ul className="social-links">
                    <li><Link to='/'><FaFacebook/></Link></li>
                    <li><Link to='/'><FaTwitter/></Link></li>
                    <li><Link to='/'><FaGooglePlus/></Link></li>
                    <li><Link to='/'><FaInstagram/></Link></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <p>
                Copyright &copy; 2020 by Adekola. All right reserved.
            </p>
        </div>
    </footer>
    )
}