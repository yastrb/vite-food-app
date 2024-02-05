import React from 'react'
import data from '../../data/Data.js'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    console.log(data);
    return (
        <div className='menu'>
            <ul className='menu-list flex gap-5'>
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