"use client";
import { Navbar, Button } from "keep-react";
import { ShoppingCart } from "phosphor-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const { cart, totalPrice, totalQuantity } = useSelector((state) => state.action);

    return (
        <Navbar className="bg-gray-200" fluid={true}>
            <Navbar.Container className="flex items-center justify-between">
                <Navbar.Container className="flex items-center">
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                src={logo}
                                alt="keep"
                                width="100"
                                height="40"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Divider></Navbar.Divider>
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-8"
                    >
                        <Link to="/"><Navbar.Link linkName="Home" /></Link>
                        <Link to="/"><Navbar.Link linkName="Products" /></Link>
                        <Link to="/"><Navbar.Link linkName="About" /></Link>
                        <Link to="/"><Navbar.Link linkName="Contact" /></Link>
                    </Navbar.Container>
                    <Navbar.Collapse collapseType="sidebar">
                        <Navbar.Container tag="ul" className="flex flex-col gap-5">
                            <Navbar.Link linkName="Home" />
                            <Navbar.Link linkName="Products" />
                            <Navbar.Link linkName="About" />
                            <Navbar.Link linkName="Contact" />
                        </Navbar.Container>
                    </Navbar.Collapse>
                </Navbar.Container>

                <Navbar.Container className="flex gap-2">
                    <Link to="/cart">
                        <Button size="xs" type="outlineGray">
                            <span>
                                <ShoppingCart size={20} color="#444" />
                            </span>
                            <span className="ml-1 text-metal-600"> ({totalQuantity})</span>
                        </Button>
                    </Link>
                    <Navbar.Toggle />
                </Navbar.Container>
            </Navbar.Container>
        </Navbar>
    );
}

export default Header
