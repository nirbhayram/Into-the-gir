import React, { useContext, useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap"

import { Link } from "react-router-dom"

import UserContext from "../context/UserContext"

export default function Header() {

    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand tag={Link} to="/" className="text-white">
                    Git app
            </NavbarBrand>
            <NavbarText className="text-white">
                {context.user?.email ? context.user.email : ""}
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        !context.user ? (
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to="/signin" className="p-1 text-white">
                                            Sign-in
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/signup" className="p-1 text-white">
                                            Sign-up
                                    </NavLink>
                                </NavItem>
                            </>
                        ) : (
                                <NavItem>
                                    <NavLink tag={Link} onClick={()=>context.setUser(null)} className="p-1 text-white">
                                            Log-out
                                    </NavLink>
                                </NavItem>
                            )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    );
}
