import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const ThisAllGraph = ({daily_workation_id}) => {

  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        const response = await axios.get(`https://saengchaein.r-e.kr/workation/daily/${daily_workation_id}/graph/`);
        setRatio(response.data.ratio);
      } catch (error) {
        console.error('Error fetching graph data:', error);
      }
    };

    if (daily_workation_id) {
      fetchGraphData();
    }
  }, [daily_workation_id]); // daily_workation_id가 바뀔때마다 재렌더링


    return (
      <>
      <SectionGraph>
          <SectionTitleContainer>
              <SectionTitle>Work-Rest Balance</SectionTitle>
          </SectionTitleContainer>
          <BalanceGraphWork>
              <BalanceGraphRest width={`${ratio}%`} />
          </BalanceGraphWork>
      </SectionGraph>
      </>
    )
  }
  
  export default ThisAllGraph
  
  const SectionGraph = styled.div`
    background-color: #FFF2D6;
    width: 96%;
    /* height: 113px; */
    border-radius: 4px;
    /* align-items: center; */
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
  `;
  
  const SectionTitle = styled.div`
    width: 98%;
    height: 25px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28.8px;
    letter-spacing: -0.02em;
    color: #222222;
    box-sizing: border-box;
    //margin-bottom: 4px;
    margin-left: 1%;
    cursor: default;
  `;
  
  const SectionTitleContainer = styled.div`
      display: flex;
      flex-direction: row;
  `
  
  const BalanceGraphWork = styled.div`
      height: 56px;
      width: 454px;
      background-color: #FFB336;
      border-radius: 6px;
      margin-top: 10px;
      margin-left:2px;
  `
  
  const BalanceGraphRest = styled.div`
      width: ${(props) => props.width || '20%'};
      height: 100%;
      background-color: #E3DCD0;
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
      
  `