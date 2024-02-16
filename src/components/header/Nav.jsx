import React from 'react'
import data from '../../data/Data.jsx'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    console.log(data);
    return (
        <div className='menu '>
            <ul className='menu-list flex flex-col lg:flex-row gap-5 uppercase '>
                {data.map((nav, index) => (
                    <li key={index} className='text-lg'>
                        <NavLink to={nav.path}>{nav.text}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Nav;