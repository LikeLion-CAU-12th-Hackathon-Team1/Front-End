import React from 'react'
import styled from 'styled-components';

const ThisAllGraph = () => {

    const ratio = 10; // 추후 백에서 가공한 비율 데이터 받아와야 함

    return (
      <>
      <SectionGraph>
          <SectionTitleContainer>
              <SectionTitle>Work-life Balance</SectionTitle>
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