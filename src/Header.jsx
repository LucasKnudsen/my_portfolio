import React from 'react'
import { Menu, Segment } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item
                    id="home"
                    name="my portfolio"
                    as={Link}
                    to={{ pathname: "/" }}
                />
                <Menu.Item
                    id="about-tab"
                    name="about me"
                    as={Link}
                    to={{ pathname: "/about" }}
                />
                <Menu.Item
                    id="projects-tab"
                    name="my projects"
                    as={Link}
                    to={{ pathname: "/projects" }}
                />
            </Menu>
        </Segment>
    )
}

export default Header