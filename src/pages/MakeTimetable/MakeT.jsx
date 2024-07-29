import React from 'react'
import styled from 'styled-components';
import AutoComplete from '../../component/AutoComplete';
import { Button } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TimePicCom from '../../component/TimePicCom';
import CalenderCom from '../../component/CalenderCom';
import { useRecoilState } from 'recoil';
import { answersAtom } from '../../recoil/makeTAtom';
import AnswerButton from '../../component/AnswerButton';
import CalenderResult from '../../component/CalenderResult';
import dayjs from 'dayjs';

//질문지 답변
const Qlist=[
  {
    key: "workStyle",
    question : "어떤 업무 방식을 선호하시나요?",
    options: ["오전부터 하루 시작하고 싶어요", "여유롭게 점심부터 시작하고 싶어요", "느긋하게 오후부터 시작하고 싶어요"]
  },
  {
    key: "workPurpose",
    question: "이번 워케이션의 목적은 어떻게 되시나요?",
    options: ["휴식보다 일을 집중적으로 하고 싶어요", "일과 휴식의 균형이 중요해요", "일보다 휴식을 주로 하고 싶어요"]
  },
  {
    key: "workPlace",
    question: "선호하는 업무 공간이 있나요?",
    options: ["바다가 보이는 공간", "시야 탁 트인 개방적인 공간", "업무에 집중할 수 있는 나만의 독립적인 공간"]
  },
];

const Qlist2=[
  {
    key: "restMethod",
    question : "쉼을 찾는 나만의 방법이 있나요?",
    options: ["공방", "게임", "독서", "라이딩", "명상", "미술", "산책", "서핑", "쇼핑", "스포츠 관람", "액티비티", "운동", "요가", "자연힐링"]
  }
];

const MakeT = () => {
  //recoil사용위해,,Atom 기본 설정값 가져옴
  const [answers, setAnswers] = useRecoilState(answersAtom);

  //3~6번 선택지 눌렀을때 값 저장 및 단축선택
  const handleAnswerClick = (key, option) =>{
    setAnswers(prev => {
      if (key==='restMethod') {
        const selectedOptions = new Set(prev[key]);
        //ㄴ입력된 값들을 set형태로 저장함
        if (selectedOptions.has(option)) {
          selectedOptions.delete(option);
        } else{
          selectedOptions.add(option);
        }
        return {...prev, [key]: Array.from(selectedOptions)};
      } else{
        return {...prev, [key]:option};
      }
    })
  }


  const handleSubmit = ()=> {
    console.log("All answers:", answers);
    //제출 시 백으로 전송하는 코드 추가 필요
  }

  return (
      <Wrapper>
      <TitleW>
      <Title>몇가지 질문을 통해<br/>완벽한 워라밸을 경험해보세요!</Title>
      </TitleW>
      <QuestionW>
    <Question>
    <TitleBox>
        <Circle>1</Circle>
        <TextBox>어느 지역으로 가시나요?</TextBox>
    </TitleBox>
    <ContentBox>
        <AutoComplete />
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
              text={option}
              onClick={()=> handleAnswerClick(question.key, option)}
              selected={answers[question.key] ===option}
            />
            </div>
          ))}
        </ContentBox>
      </Question>
    ))}

    {Qlist2.map((question, index) => (
    <Question key={index}>
      <TitleBox>
        <Circle>6</Circle>
        <TextBox>{question.question}</TextBox>
      </TitleBox>
      <ContentBox>
        {question.options.map((option, idx)=>(
          <AnswerButton
            key={idx}
            text={option}
            onClick={()=> handleAnswerClick(question.key, option)}
            selected={Array.isArray(answers[question.key])
              ? answers[question.key].includes(option)
              : answers[question.key] === option}
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
  
`;

const TitleW = styled.div`
    width : 377px;
    font-size: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 146px; /*네브바와 겹치지않게 콘텐츠 구역 */
`
const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  width: 500px; /* 폰트 변경 후 수정 필요*/
  height: 58px;
`

const QuestionW = styled.div`
  width: 100%;
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
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
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

const ContentBox = styled.div`
  border-left: 1px solid #dbdada;
  padding: 20px;
  width: 100%;
  margin-left: 14px;
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
    margin-top: 60px;
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