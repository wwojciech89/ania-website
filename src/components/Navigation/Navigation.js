import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
display: flex;
align-items: center;
justify-content: flex-start;
font-family: 'Lato'
`;

const Logo = styled.span`
font-weight: 900;
font-size: 20px;
margin-right: 10px;
`;

const NavigationList = styled.ul`
margin:0;
padding: 0;
list-style: none;
display: flex;
`;

const NavigationListItem = styled.li`
font-weight: 600;
font-size: 15px;
margin-left: 32px;
`;



const Navigation = () => (

    <NavigationWrapper>
        <Logo>Ania Wojtkiewicz</Logo>
        <NavigationList>
            <NavigationListItem>
                <Link strict to="/">Home</Link>
                </NavigationListItem>
            <NavigationListItem>
                <Link to="/gallery">Galeria</Link>
                </NavigationListItem>
            <NavigationListItem>
                <Link to="/about">O mnie</Link>
                </NavigationListItem>
            <NavigationListItem>
                <Link to="/contact">Kontakt</Link>
                </NavigationListItem>
            <NavigationListItem>
                <Link to="/offer">Oferta</Link>
                </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
)

export default Navigation;
