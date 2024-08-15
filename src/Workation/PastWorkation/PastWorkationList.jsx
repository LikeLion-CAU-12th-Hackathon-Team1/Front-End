import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OnePastWorkationList from './OnePastWorkationList'
import axios from 'axios';
import { formatDateWithDay, getSiggMap } from '../../api/mappingData';
import { useNavigate } from 'react-router-dom';
import No from "../../assets/img/No.svg"

const PastWorkationList = () => {
    //백에서 갯수 받아온 만큼 배열 돌리기
    const baseURL = `https://saengchaein.r-e.kr`;
    const [data, setData] = useState(null);
    const token = localStorage.getItem('access');
    const [isNoting, setIsNoting] = useState(false);

    const navigate = useNavigate();

//워케이션 아이디는 지난회고 페이지에서 받아온걸로



// useEffect(() => {
//   const handleThisAll = async () => {
//     try {
//       const response = await axios.get(`${baseURL}/workation/`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       setData(response.data); // 데이터를 설정
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   handleThisAll();
// }, []); 

const handleThisAll = async () => {
  try {
      const response = await axios.get(`${baseURL}/workation/`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
      setData(response.data);
      if(response.data.length === 0){
        setIsNoting(true);
        //console.log(isNoting);
        //console.log(response.data)
      }else{
        //console.log(isNoting);
        //console.log(response.data)
      }
      
  } catch (error) {
      console.error("Error fetching data:", error);
  }
};

useEffect(() => {
  handleThisAll();
}, []);



if (data === null) {
  return <div>Loading...</div>;
}

const handleOne = (workation_id)=> {
    navigate(`/timetable/pastWorkation/${workation_id}`);
}

  return (
    <Container>
        {isNoting ? (
        <NoWorkation>
            워케이션을 등록해 주세요.
            <NoImg src = {No} />
        </NoWorkation>
        ) : 
        (
            <>
            <TitleBox>
            <Time>시간순</Time>
            </TitleBox>
            <ContentBox>
                {data.map((workation, index)=>{
                     const { start_date, end_date, sigg, workation_id } = workation;
                     const SiggText = getSiggMap(sigg);
                     const formattedStartDate = formatDateWithDay(start_date);
                     const formattedEndDate = formatDateWithDay(end_date);
    
                    return(
                    < OnePastWorkationList
                    key={workation_id}
                    workation_id={workation_id} 
                    SiggText={SiggText}
                    formattedStartDate={formattedStartDate}
                    formattedEndDate={formattedEndDate}
                    handleOne={() => handleOne(workation_id)}
                    handleThisAll={handleThisAll}
                    />
                    )
                })}
            </ContentBox>
            </>
        )}
        
    </Container>
  )
}

export default PastWorkationList

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 98%;
  background-color: #FFFAF0;
  box-sizing: border-box;
  border-radius: 6px;
`;

const TitleBox = styled.div`
    width: 94%;
    height: 7%;
    /* border:2px solid black; */
    margin-top: 2%;
`

const Time = styled.div`
    width: 50%;
    height: 100%;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.6px;
    letter-spacing: -0.02em;
    color: #7A7A7A;
    cursor: default;
    
`
const ContentBox = styled.div`
    width: 94.5%;
    height:auto;
    max-height: 720px;
    overflow-y: auto;
    margin-bottom: 4%;
    margin-top: -2%;
`

const NoWorkation = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
font-weight: 700;
color: #000000;
text-align: center;
background-color: #FFFAF0;
flex-direction: column;
cursor: default;
margin-top: 29.5%;
`;

const NoImg = styled.img`
  width: 7%;
  margin-top: 20px;
  cursor: pointer;
  
`