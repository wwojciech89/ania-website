import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';


const SliderWrapper = styled.div`
align-items: center;
background-color: lime;
height: 100vh;

  p {
    margin: 0;
  }
`




const MainSlider = () => {
 return ( <SliderWrapper>
    <p>Plenery</p>
    <h1>Sesja Andrzeja i Justyny</h1>
    <p>Zobacz więcej</p>

  </SliderWrapper>
 )
}



const IndexPage = () => (
  <>
    <MainSlider />
  </>
)

export default IndexPage
