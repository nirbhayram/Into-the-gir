import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.png'
import { FaCartArrowDown } from 'react-icons/fa'


export default class Navbar extends Component {
    state = {
        navbarState: false,
        navbarClass: "collapse navbar-collapse"
    }
    myToggler = () => {
        this.state.navbarState ?
            this.setState({
                navbarState: false,
                navbarClass: "collapse navbar-collapse"
            }) : this.setState({
                navbarState: true,
                navbarClass: "collapse navbar-collapse show"
            })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <Link to="/" className="navbar-brand ml-5">
                    <img src={logo} alt="logo goes here" width="40px" />
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.myToggler}>
                    <span className="text-white">menu</span>
                </button>
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-3">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">
                                <FaCartArrowDown className="cart-class" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
