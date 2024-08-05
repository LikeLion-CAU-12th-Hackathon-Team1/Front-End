//백데이터받아서 에러메세지 잡아서 띄우기

import React from 'react'

const BeforeAllTask = () => {
  return (
    <Container>
      <TopContainer>
      <NavDom>
        <BtnContainer>
        <AllBtn onClick={goAllTimeTable}>전체 일정</AllBtn>
        <TodayBtn onClick={goTodayTimeTable}>일일 일정</TodayBtn>
        <HistoryBtn onClick = {goLastTimeTable}>모든 워케이션</HistoryBtn>
        </BtnContainer>
      </NavDom>
      {/* 해당 부분에 에러메세지 캐치해서 띄우기 .. */}
      </TopContainer>
      </Container>
      
  )
}

export default BeforeAllTask
// 앗 그러면 이 페이지를 그대로 두고 컴포넌트로 가져다 써야겟다 ..~!
//에러메세지캐치하면 해당 컴포넌트를 불러오는 식으로 .!
//404에러