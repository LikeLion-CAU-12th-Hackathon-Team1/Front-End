import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from './Card';
//import { locationArray } from '../test/dummydata';
import { handleWork } from '../api/api_location';

const WorkLoca = ({WorkCategory, sigg}) => {
    const [data, setData] = useState([]);

    //카테고리상태가 변경될 때 마다 겟요청(useEffect)

    useEffect(()=> {
        if(sigg){
            const getData= async()=> {
                const locations = await handleWork(WorkCategory, sigg);
                setData(locations);
            };
            getData();
        }
        
    }, [WorkCategory, sigg]);


  return (
    <ContentBox>
        {data.map((item) => (
    <Card key={item.place_code} mapKey={item.place_code} image={item.image} placename={item.placename} report={item.report} />
    ))};


    </ContentBox>
  )
}

export default WorkLoca

const ContentBox = styled.div`
    width: 1258px;
    height: 270px;
    display: flex;

`
