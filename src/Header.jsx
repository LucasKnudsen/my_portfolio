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
                    as={NavLink}
                    to={{ pathname: "/about" }}
                />
                <Menu.Item
                    id="projects-tab"
                    name="my projects"
                    as={NavLink}
                    to={{ pathname: "/projects" }}
                />
                <Menu.Item
                    id="cv-tab"
                    name="my cv"
                    as={NavLink}
                    to={{ pathname: "/cv" }}
                />
            </Menu>
        </Segment>
    )
}

export default Header