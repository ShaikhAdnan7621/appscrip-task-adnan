import { LOGOSVG, SVGGridIcon, SVGHamburgerIcon, SVGLikeIcon, SVGSearchIcon, SVGShoppingBagIcon, SVGUserIcon } from '@/assets/icons'
import React from 'react'
import './HeaderStyle.css'

export default function Header() {
    return (
        <div>
            <div className='greystrip row'>
                <div className='row r1'><span><SVGGridIcon /></span><span>Lorem ipsum dolor</span></div>
                <div className='row r2 hideinsmall'><span><SVGGridIcon /></span><span>Lorem ipsum dolor</span></div>
                <div className='row r3 hideinsmall'><span><SVGGridIcon /></span><span>Lorem ipsum dolor</span></div>
            </div>

            <header className='header'>
                <nav className='row'>
                    <div className='logo-manu'>
                        <SVGHamburgerIcon className='hamburger' />
                        <LOGOSVG className='logo' />
                    </div>
                    <div className='textlogo'>LOGO</div>
                    <div className='actionbar'>
                        <SVGSearchIcon className='action-icons' />
                        <SVGLikeIcon className='action-icons' />
                        <SVGShoppingBagIcon className='action-icons' />
                        <SVGUserIcon className='hideinsmall action-icons' />
                        <select className='language-dropdown hideinsmall'>
                            <option value="en">ENG</option>
                            <option value="es">SPA</option>
                            <option value="fr">FRE</option>
                            <option value="de">GER</option>
                        </select>
                    </div>
                </nav>
                <div className='tabscontainer'>
                    <div className='tabs row'>
                        <div className='tab home'>HOME</div>
                        <div className='tab-saprator'>|</div>
                        <div className='tab active'>SHOP</div>
                        <div className='tab'>SKILLS</div>
                        <div className='tab'>STORIES</div>
                        <div className='tab'>ABOUT</div>
                        <div className='tab'>CONTACT US</div>
                    </div>
                </div>
            </header>
        </div>
    )
}
