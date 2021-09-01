import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd';
import '../../../.././assets/styles/layout/HeaderTemplate.scss'
export default function Header(props) {
    return (
        <header className= "border-b-white header p-4 bg-coolGray-100  fixed w-full z-10 border-b-1 text-lg text-light ">
            <div className="container flex justify-between h-16 mx-auto">
                <a href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img style={{height:'130%'}} src="./img/logo.svg" />
                </a>
                <ul className="items-stretch hidden m-0 space-x-3 lg:flex text-white ">
                    <li className="flex">
                        <NavLink to="/"   activeClassName="text-light" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="text-light"  activeClassName="text-white" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" activeClassName="text-white" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">News</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/register"  activeClassName="text-white"  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">Register</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/login"  activeClassName="text-white"  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">Login</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {/* <Button type="primary" danger>
                        Sign in
                    </Button> */}
                    <button className="btn btn-danger" >Đăng nhập</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}
