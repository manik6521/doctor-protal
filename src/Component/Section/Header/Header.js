import React from 'react';

const Header = () => {
    return (
        <div className='w-9/12 mx-44'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
                </div>
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href='/'>Home</a></li>
                        <li tabIndex="0">
                            <a href='/about'>
                                About

                            </a>

                        </li>
                        <li><a href='/appointment'>Appointment</a></li>
                        <li><a href='/reviews'>Reviews</a></li>
                        <li><a href='/contact'>Contact Us</a></li>
                        <li><a href='/login'>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;