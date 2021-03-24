import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';


const NavigationWrapper = styled.div`
position: fixed;
background-color: peru;
width: 100%;
`

const NavigationBar = styled.nav`
display: flex;
align-items: center;
justify-content: space-around;
font-family: 'Lato';

a {
    text-decoration: none;
    color: inherit;
}
`;

const Logo = styled.span`
font-weight: 900;
font-size: 20px;
margin-right: 10px;
`;

const NavigationList = styled.ul`
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
      <NavigationBar>
        <Logo><Link strict to="/">
            Ania Wojtkiewicz</Link>
            </Logo>
        <NavigationList>
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
      </NavigationBar>
    </NavigationWrapper>
   
)

export default Navigation;
