import Swal from 'sweetalert2';


// 백에서 가장 가까운 일정 가져오기 - 지금은 상수값 내가 지정
const scheduleTime = 20240725171910

/** 클라이언트 시간 가져오는 로직 */
const getClientTime = ()=> {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const formattedDate = `${year}${month}${day}${hours}${minutes}${seconds}`;
    const numDate = parseInt(formattedDate, 10);

    return numDate;
}

// 알림세팅 함수
// clientTiem = 사용자 컴퓨터 시간 / scheduleTime = 등록 워케이션 일정 중 가장 빠른 스케줄 시간
const setNotice = (clientTime, scheduleTime) => {

  // 스케줄 타임이 미래인 경우에만 비교 시작
  if(clientTime < scheduleTime){
    // 시간비교
    // 년/월/일 비교
    const clientYymmdd = parseInt(clientTime.toString().substr(0,8))
    const scheduleYymmdd = parseInt(scheduleTime.toString().substr(0,8))
    console.log(clientYymmdd, scheduleYymmdd, "yymmdd")

    const clienthh = parseInt(clientTime.toString().substr(8,2))
    const schedulehh = parseInt(scheduleTime.toString().substr(8,2))
    console.log(clienthh, schedulehh, "시간출력")

    const clientmm = parseInt(clientTime.toString().substr(10,2))
    const schedulemm = parseInt(scheduleTime.toString().substr(10,2))
    console.log(clientmm, schedulemm, "분출력")

    const clientss = parseInt(clientTime.toString().substr(12,2))
    const schedulss = parseInt(scheduleTime.toString().substr(12,2))
    console.log(clientss, schedulss, "초출력")

    if(clientYymmdd === scheduleYymmdd) { // 년월일이 같으면 그 다음 타이머 설정 시작

      const timeInterval = ((schedulehh-clienthh)*3600+(schedulemm-clientmm)*60+(schedulss-clientss))
      console.log(timeInterval)
      setTimeout(()=>{/**여기에 추후 알림뜨는 함수 추가 */

        Toast.fire({
          icon: 'success',
          title: 'Work까지 10분 남았습니다!!'
        })

      }, timeInterval*1000)
    }

  }
    console.log(clientTime, scheduleTime)
    return clientTime
}

// 로그인 버튼 누르면 그때 클라이언트 시간 가져오기 + setTime

export const handleLoginClick = () => {
    console.log("handleLoginClick")
    setNotice(getClientTime(), scheduleTime)
}

const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

/** 전체로직 생각
 1. 로그인이 된 경우 -> 워케이션 등록이 있다면 (if문으로 워케이션의 가장 가까운 일정 상태 추적) 로그인과 동시에 현재시간 측정 후 가까운 일정 10분 전으로 setTimer 설정
 2. 워케이션 추가로 새로운 워케이션이 등록되면(그때 등록과 동시에 현재시간 측정 후 가까운 일정 10분 전으로 setTimer 설정
 3. setTimer로 호출한 함수는 알림창에 알림 하나 생성
 */

 /** 추후 이 파일에서 해결해야 할 것 */
 /**
  연결할 곳 제대로 정하기(지금은 임시로 Home의 알림에만 연결)
  백에서 schduleTime 제대로 받아오기
  */