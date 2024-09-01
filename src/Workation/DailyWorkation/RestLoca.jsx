import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from './Card';
import { handleRest } from '../../api/api_location';

const RestLoca = ({RestCategory, sigg}) => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        if(sigg){
            const getData= async()=> {
                const locations = await handleRest(RestCategory, sigg);
                setData(locations);
            };
            getData();
        }
        
    }, [RestCategory, sigg]);

  return (
    <ContentBox>
        {data.map((item) => (
        <Card key={item.place_code} mapKey={item.place_code} image={item.image} placename={item.placename} report={item.report} />
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
