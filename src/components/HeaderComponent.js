import React, { Component } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-2 self-align-center">
                                <a href="home.html">
                                    <img
                                        src="https://media.istockphoto.com/illustrations/hot-rodder-illustration-id165609180?b=1&k=6&m=165609180&s=612x612&h=D_JcHWrAHRq4Z9DOxbb2xb66ZGhjcd5h0d1akDY4nQg="
                                        class="img-fluid"
                                    />
                                </a>
                            </div>
                            <div className="col">
                                <h1>Hott Cars</h1>
                                <h2>a better buying experience</h2>
                            </div>
                            <div className="col-md-4 col-xl-2 mt-4">
                                <a
                                    role="button"
                                    class="btn1 btn-lg btn-warning"
                                    id="sellButton"
                                >
                                    Sell Car
                                </a>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <img
                                src="/assets/images/logo.png"
                                height="30"
                                width="30"
                                alt="NuCamp Logo"
                            />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/directory"
                                    >
                                        <i className="fa fa-list fa-lg" />{" "}
                                        Directory
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/contactus"
                                    >
                                        <i className="fa fa-address-card fa-lg" />{" "}
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;