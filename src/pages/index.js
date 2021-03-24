import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';


const SliderWrapper = styled.div`
align-items: center;
background-color: lime;
height: 100vh;
background-color: blue;
max-width: 1400px;
margin: auto;

  div {
    background-color: green;
  }

  p {
    margin: 0;
  }

`
const PhotoTitle = styled.div`
    background-color: white;
    position: absolute;
    bottom: 100rem;
    left: 2rem;

    p {
      margin: 0;
    }
`



const MainSlider = () => (
 <SliderWrapper>
    <div>
    <p>Plenery</p>
    <h1>Sesja Andrzeja i Justyny</h1>
    <p>Zobacz więcej</p>
    </div>
  </SliderWrapper>
 )




const IndexPage = () => (
  <>
    <MainSlider />
  </>
)

export default IndexPage
