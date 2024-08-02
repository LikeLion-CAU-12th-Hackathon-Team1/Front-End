import React from 'react'
import styled from 'styled-components'
//import { locationArray } from '../test/dummydata'

const Card = ({image, placename, report}) => {
    //const response = locationArray;

  return (
    <CardLocation>
        <Img style={{ backgroundImage:`url(${image})`}} alt={placename}>
        <Overlay />
            <Report>{report}</Report>
            <Title> {placename} </Title>
        </Img>
    </CardLocation>
  )
}

export default Card

const CardLocation = styled.div`
    width: 292px;
    height: 260px;
    margin: 5px;
    display: flex;
    position: relative;
`
const Img = styled.div`
    width: 100%;
    height: 100%;
    background-color: gray;
    border-radius: 4px;
    object-fit: cover;
`
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    opacity: 50%;
    border-radius: 4px;
`
const Title = styled.div`
    width: 100%;
    z-index: 2;
    font-size: 24px;
    font-weight: 700;
    position: absolute;
    bottom: 10px; 
    left: 10px; 
    color : white;
`
const Report = styled.div`
    width: 90%;
    z-index: 2;
    font-size: 20px;
    font-weight: 600;
    position: absolute;
    bottom: 180px; 
    left: 10px; 
    color : white;
`