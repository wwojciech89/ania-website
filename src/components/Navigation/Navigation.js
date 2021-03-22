import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.nav`
display: flex;
align-items: center;
justify-content: flex-start;
`;


const Navigation = () => (

    <NavigationWrapper>
        <span>Ania Wojtkiewicz</span>
        <ul>
            <li>Home</li>
            <li>Galeria</li>
            <li>O mnie</li>
            <li>Kontakt</li>
            <li>Oferta</li>
        </ul>
    </NavigationWrapper>
)