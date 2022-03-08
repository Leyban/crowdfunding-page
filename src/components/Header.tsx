import { useState } from 'react';
import { image } from '../images/image';

export const Header: React.FC = () => {
    const [dropDown, setDropDown] = useState(false);

    const handleMenu = () => {
        setDropDown(!dropDown)
    }

    return (
        <div className="header">
            <div className="background-image">
                    <img src={image.imageHeroDesktop} alt="Desktop Hero" className='desktop-image' />
                    <img src={image.imageHeroMobile} alt="Mobile Hero" className='mobile-image' />
            </div>
            <div className="navbar">
                
                <img src={image.logo} alt="product name" className='product-logo'/>
                <div className="nav-buttons desktop">
                    <ul>
                        <li><a href='#About'>About</a></li>
                        <li><a href='#Discover'>Discover</a></li>
                        <li><a href='#GetStarted'>Get Started</a></li>
                    </ul>
                </div>
                <div className="nav-buttons mobile">
                    {dropDown ? <img src={image.iconCloseMenu} onClick={handleMenu} className='mobile-menu-button'/> : <img src={image.iconHamburger}  onClick={handleMenu} className='mobile-menu-button'/>}
                    {dropDown && <div className='overlay-menu'> 
                        <div className='mobile-menu'>
                            <ul>
                                <li><a href='#About'><h4>About</h4></a></li>
                                <li className='discover'><a href='#Discover'><h4>Discover</h4></a></li>
                                <li><a href='#GetStarted'><h4>Get Started</h4></a></li>
                            </ul>
                        </div>
                    </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}