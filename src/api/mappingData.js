//1.지역
export const siggMap = {
    1: "강원도 강릉",
    2: "강원도 속초",
    3: "강원도 양양",
    4: "강원도 춘천"
}
export const getSiggMap = (typeNumber) => {
    return siggMap[typeNumber] || "알 수 없음";
}

//2.여행 일정 ( YYYY/MM/DD 이렇게 파싱)
// export const DateMap1 = (dateString) => {
//     if (!dateString || dateString.length !==8) {
//         return "알 수 없음";
//     }
//     const year = dateString.substring(0,4);
//     const month = dateString.substring(4,4);
//     const day = dateString.substring(6,8);
//     return `${year}/${month}/${day}`;
// } 뭔가이상함 우선 Top에서는 다르게 끊어서 할거임 ~~
//...요일나타내기가 필요햇음
export const formatDateWithDay = (dateString) => {
    if (!dateString || dateString.length !== 8) {
      return "Invalid date";
    }
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6) - 1; // 월은 0부터 시작하므로 1을 뺌
    const day = dateString.substring(6, 8);
  
    const date = new Date(year, month, day);
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const dayName = days[date.getDay()];
  
    return `${year}/${month + 1}/${day} (${dayName})`; // 다시 1을 더해 1부터 시작하도록 조정
  };
  

//3.WorkStyle
export const workStyleMap = {
    1: "오전부터 하루 시작하고 싶어요",
    2: "여유롭게 점심부터 시작하고 싶어요",
    3: "느긋하게 오후부터 시작하고 싶어요"
}
export const getWorkStyleMap = (typeNumber) => {
    return workStyleMap[typeNumber] || "알 수 없음";
}

//4.WorkPurpose
export const workPurposeMap = {
    1: "휴식보다 일을 집중적으로 하고 싶어요",
    2: "일과 휴식의 균형이 중요해요",
    3: "일보다 휴식을 주로 하고 싶어요"
}
export const getWorkPurposeMap = (typeNumber) => {
    return workPurposeMap[typeNumber] || "알 수 없음";
}

//5.workation2space
export const workTypeMap = {
    1: "바다가 보이는 공간",
    2: "시야 탁 트인 개방적인 공간",
    3: "업무에 집중할 수 있는 나만의 독립적인 공간",
    4: "채광이 좋은 공간"
}
export const getWorkTypeText = (typeNumber) => {
    return workTypeMap[typeNumber] || "알 수 없음";
  };


//6.workation2rest
export const restTypeMap = {
    1: "공방",
    2: "게임",
    3: "독서",
    4: "라이딩",
    5: "명상",
    6: "미술",
    7: "산책",
    8: "서핑",
    9: "쇼핑",
    10: "스포츠관람",
    11: "액티비티",
    12: "운동",
    13: "요가",
    14: "자연힐링",
    15: "등산"
  };

  // 매핑 함수
export const getRestTypeText = (typeNumber) => {
    return restTypeMap[typeNumber] || "알 수 없음";
  };

//7. 기상시간 필요할때 사용