import React from 'react'
import styled from 'styled-components';
import AutoComplete from '../../component/AutoComplete';
import { Button } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TimePicCom from '../../component/TimePicCom';
import CalenderCom from '../../component/CalenderCom';
import { useRecoilState } from 'recoil';
import { answersAtom, endDateAtom, siggAtom, sleepTimeAtom, startDateAtom, wakeTimeAtom } from '../../recoil/makeTAtom';
import AnswerButton from '../../component/AnswerButton';
import CalenderResult from '../../component/CalenderResult';
import dayjs from 'dayjs';
import makeTheader from "../../assets/img/makeTheader.svg";
import footer from "../../assets/img/footer.svg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AutoComplete2 from '../../component/AutoComplete2';

//질문지 답변
const Qlist=[
  {
    key: "work_style",
    question : "어떤 업무 방식을 선호하시나요?",
    options: [
      { label: "오전부터 하루 시작하고 싶어요", value: 1 },
      { label: "여유롭게 점심부터 시작하고 싶어요", value: 2 },
      { label: "느긋하게 오후부터 시작하고 싶어요", value: 3 }
    ]
  },
  {
    key: "work_purpose",
    question: "이번 워케이션의 목적은 어떻게 되시나요?",
    options: [
      { label: "휴식보다 일을 집중적으로 하고 싶어요", value: 1 },
      { label: "일과 휴식의 균형이 중요해요", value: 2 },
      { label: "일보다 휴식을 주로 하고 싶어요", value: 3 }
    ]
  },
];

const QlistWork = [ // 5번 질문
  {
    key: "workation2space",
    question: "선호하는 업무 공간이 있나요?",
    options: [
      { label: "바다가 보이는 공간", value: 1 },
      { label: "시야 탁 트인 개방적인 공간", value: 2 },
      { label: "업무에 집중할 수 있는 나만의 독립적인 공간", value: 3 },
      { label: "채광이 좋은 공간", value: 4 }
    ]
  }
];

const QlistRest=[
  {
    key: "workation2rest",
    question : "쉼을 찾는 나만의 방법이 있나요?",
    options:[
      { label: "공방", value: 1 },
      { label: "게임", value: 2 },
      { label: "독서", value: 3 },
      { label: "라이딩", value: 4 },
      { label: "명상", value: 5 },
      { label: "미술", value: 6 },
      { label: "산책", value: 7 },
      { label: "서핑", value: 8 },
      { label: "쇼핑", value: 9 },
      { label: "스포츠 관람", value: 10 },
      { label: "액티비티", value: 11 },
      { label: "운동", value: 12 },
      { label: "요가", value: 13 },
      { label: "자연힐링", value: 14 }
    ]
  }
];

const MakeT = () => {
  const navigate = useNavigate();
  //recoil사용위해,,Atom 기본 설정값 가져옴
  const [answers, setAnswers] = useRecoilState(answersAtom);
  const [startDate] = useRecoilState(startDateAtom); // 2번 질문
  const [endDate] = useRecoilState(endDateAtom); // 2번 질문
  const [wakeTime] = useRecoilState(wakeTimeAtom);//7번 질문
  const [sleepTime] = useRecoilState(sleepTimeAtom);//7번 질문ㅇ톰
  const [sigg, setSigg] =useRecoilState(siggAtom);

  //3~4번 단일선택지 눌렀을때 값 저장 및 단축선택
  const handleAnswerClick = (key, option) =>{
    setAnswers(prev => {
        return {...prev, [key]:option};
      }
    )
    console.log(answers);
  };
     // 5~6번 다중선택지 눌렀을 때 값 저장 및 단축 선택
  const handleAnswerClick5 = (key, option) => {
    setAnswers(prev => {
      const selectedOptions = new Set(prev[key]);
      if (selectedOptions.has(option)) {
        selectedOptions.delete(option);
      } else {
        selectedOptions.add(option);
      }
      return { ...prev, [key]: Array.from(selectedOptions) };
    });
  };


  const baseURL = "https://saengchaein.r-e.kr";

  const handleSubmit = async()=> {
    
    //제출 시 백으로 전송하는 코드 추가 필요
    //1~7번의 답들을 모두 한곳에 합치게..
    //보낸 다음에는 시간표(전체시간표?)로 옮기도록
    //각 질문에 대한 응답을 순서대로 변수에 넣고 해당 객체들을 하나로 합쳐서 보내자.
    //1번
    const token =localStorage.getItem('access'); // localStorage에서 사용자 ID를 숫자로 가져오기


    //dataTosend에 답변 담기
    const dataTosend= {
      sigg: sigg, //이거는 백에게 각 지역별 물어보고 1번 질문
      start_date: startDate, //2번질문답1
      end_date: endDate, //2번질문 답2
      work_style : answers.work_style, //3번질문
      work_purpose :  answers.work_purpose, //4번 질문
      workation2space: answers.workation2space.map(space => ({space})), //5번 질문
      workation2rest: answers.workation2rest.map(rest => ({ rest })), //6번 질문
      start_sleep: Number(sleepTime), // 7번 취침시간
      end_sleep: Number(wakeTime) // 7번 기상 시간
    }
    try {
      const response = await axios.post(`${baseURL}//workation/`, dataTosend,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }); //post요청으로 답변 보냄
      console.log('Response from server:', response.data);
      // 전송 성공 시 처리 로직 추가 (예: 페이지 이동 등) 
    } catch (error) {
      console.error('Error submitting answers:', error);
      // 에러 처리 로직 추가 (예: 사용자에게 알림)
    }
    console.log("All answers:", dataTosend);
    navigate("/timetable");
  }

  return (
      <Wrapper>
      <TitleW>
      <Title>몇가지 질문으로 AI가 만든<br/>워라밸 시간표를 경험해 보세요!</Title>
      </TitleW>
      <QuestionW>
    <Question>
    <TitleBox className='firstQ'>
        <Circle>1</Circle>
        <TextBox>어느 지역으로 가시나요?</TextBox>
    </TitleBox>
    <ContentBox className='firstA'>
        <AutoComplete2 /> <AutoComplete />
    </ContentBox>
    </Question>


    <Question>
    <TitleBox>
        <Circle>2</Circle>
        <TextBox>일정이 어떻게 되나요?</TextBox>
    </TitleBox>
    <ContentBox>
        <CalenderBox>
            <CalenderCom 
              id="start-work"/>
            ~ 
            <CalenderCom 
              id="end-work"/>
          </CalenderBox>
        <CalenderBox>
          <CalenderResult 
          /></CalenderBox>
        </ContentBox>
        </Question>

    
    {Qlist.map((question, index)=> (
      <Question key= {index}>
        <TitleBox>
          <Circle>{index +3}</Circle>
          <TextBox>{question.question}</TextBox>
        </TitleBox>
        <ContentBox>
          {question.options.map((option, idx)=>(
            <div key={idx} style={{marginBottom: '20px', marginLeft : '20px'}}>
            <AnswerButton 
              key={idx}
              text={option.label}
              onClick={()=> handleAnswerClick(question.key, option.value)}
              selected={answers[question.key] ===option.value}
            />
            </div>
          ))}
        </ContentBox>
      </Question>
    ))}

    
    {QlistWork.map((question, index)=>(
      <Question key={index}>
        <TitleBox>
          <Circle>5</Circle>
          <TextBox> 선호하는 업무 공간이 있나요? (복수선택) </TextBox>
        </TitleBox>
        <ContentBox className='Multi'>
          {question.options.map((option, idx)=>(
            <AnswerButton 
              key={idx}
              text={option.label}
              onClick={()=> handleAnswerClick5(question.key, option.value)}
              selected={Array.isArray(answers[question.key]) && answers[question.key].includes(option.value)}
            />
          ))}
        </ContentBox>
      </Question>
    ))}

      {QlistRest.map((question, index) => (
          <Question key={index}>
            <TitleBox>
              <Circle>6</Circle>
              <TextBox>쉼을 찾는 나만의 방법이 있나요? (복수선택)</TextBox>
            </TitleBox>
            <ContentBox className='Multi'>
              {question.options.map((option, idx) => (
                <AnswerButton
                  key={idx}
                  text={option.label}
                  onClick={() => handleAnswerClick5(question.key, option.value)}
                  selected={answers[question.key]?.includes(option.value)}
                />
              ))}
            </ContentBox>
          </Question>
        ))}

    <Question>
    <TitleBox>
        <Circle>7</Circle>
        <TextBox>기상, 취침시간이 어떻게 되나요?</TextBox>
        <SubTextBox>(선택)</SubTextBox>
    </TitleBox>
    <ContentBox>
      <Sleep>
      <SleepTime>
        <div>기상</div>
        <TimePicCom id="wake-time"/>
      </SleepTime>
      <SleepTime>
        취침 <TimePicCom id="sleep-time"/>
      </SleepTime>
      </Sleep>

    </ContentBox>
    </Question>
    </QuestionW>
    <SubmitButton onClick={handleSubmit}>워케이션 등록하기</SubmitButton>
     <Footer/>
</Wrapper>
  )
}

export default MakeT

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 1228px;
  /* position: relative; */
  
`;

const TitleW = styled.div`
    width : 1227px;
    height: 260px;
    font-size: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 34px; /*네브바와 겹치지않게 콘텐츠 구역 */
    /* position: absolute; /* 추가 */
    /* top: 20px; /* 필요에 따라 조정 */
    /* left: 20px;  */ 
    background-image: url(${makeTheader});
    background-size: contain; /* 배경 이미지 크기 조정 */
    background-position: center; /* 배경 이미지 위치 조정 */
    background-repeat: no-repeat; /* 배경 이미지 반복 방지  */

`

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  width: 1228px; /* 폰트 변경 후 수정 필요*/
  height: 100%;
  margin-top: 60px;
  margin-left: 150px;
`

const QuestionW = styled.div`
  width: 1190px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border: 1px solid #E3E3E3;
  border-radius: 5px;
  background-color: #F9F9F9;

`
const Question = styled.div`
  width: 100%;
  padding-left: 50px;
  //padding-top: 50px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;

  &.firstQ {
    padding-top: 50px;
  }
`;

const ContentBox = styled.div`
  border-left: 1px solid #dbdada;
  padding: 40px;
  width: 100%;
  height: 100%;
  margin-left: 14px;

  &.Multi {
    width: 70%;
    padding: 50px;
  }

  &.firstA{
    display: flex;
  }
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #F2F2F2;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border: 1px #E3E3E3;
`;

const TextBox = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const SubTextBox = styled.div`
  font-size: 18px;
  color: #777777;
  margin-left: 7px;
`;


const SubmitButton = styled.button`
    text-align: center;
    background-color: #FA710C;
    color : white;
    border-radius: 4px;
    width: 253px;
    height: 52px;
    top: 11px;
    left: 790px;
    padding: 4px 10px 4px 10px;
    margin-top: 100px;
    margin-bottom: 130px;
    border: none;
    font-size: 24px;
    font-weight: 700;
`

//2번 관련
const CalenderBox = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
  display: flex;
`

const Sleep = styled.div`
  display: flex;
  width: 600px;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 50px;
`

const SleepTime= styled.div`
  display: flex;
  width: 250px;
  height: 30px;
  margin-right: 40px;
  margin-left: 10px;
`

const Footer = styled.div`
    width : 1440px;
    height: 314px;
    background-image: url(${footer});
    background-size: contain; /* 배경 이미지 크기 조정 */
    background-position: center; /* 배경 이미지 위치 조정 */
    background-repeat: no-repeat; /* 배경 이미지 반복 방지  */
`