import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from './Card';
//import { locationArray } from '../test/dummydata';
import { handleRest } from '../api/api_location';

const RestLoca = ({RestCategory}) => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        const getData= async()=> {
            const locations = await handleRest(RestCategory);
            setData(locations);
        };
        getData();
    }, [RestCategory]);


  return (
    <ContentBox>
        {data.map((item) => (
    <Card key={item.place_code} image={item.image} placename={item.placename} report={item.report} />
    ))};


    </ContentBox>
  )
}

export default RestLoca

const ContentBox = styled.div`
    width: 1258px;
    height: 270px;
    display: flex;

`