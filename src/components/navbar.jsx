import React, { useState } from 'react';
import img1 from "../img/img1.png";
import img2 from "../img/img2.webp";
import { FiBell, FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='navbar'>
            <div className="navleft">
                <Link to="/">
                    <img src={img1} alt='' className='logo' />
                </Link>
                <div>
                    <input type='text' placeholder='Search or jump to' />
                </div>
            </div>

            <div className="navcenter">
                <h2>Pulls</h2>
                <h2>Issues</h2>
                <h2>Marketplace</h2>
                <h2>Explore</h2>
            </div>

            <div className="navright">
                <FiBell />
                <div className="navRightIcons">
                    <FiPlus />
                    <IoIosArrowDown />
                </div>
                <div className="navRightIcons" onClick={() => setShowMenu(!showMenu)}>
                    <img src={img2} alt='' />
                    <IoIosArrowDown />
                </div>
            </div>
            {showMenu && <Menu />}
        </nav>
    );
}

export default Navbar;
