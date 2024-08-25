import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { alertModalAtom } from '../recoil/alertAtom';
import { timer } from '../api/api_alert';

const AlertModal = () => {
    const [isAlertModal, setAlertModal] = useRecoilState(alertModalAtom);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlertModal(false);
        }, 30000);

        return () => clearTimeout(timer);
    }, [setAlertModal]);

    useEffect(() => {
        const checkTimer = async () => {
            const response = await timer();
            if (response.exists) {
                setAlertModal(true);
            }
        };

        checkTimer(); // 초기 실행
        const interval = setInterval(checkTimer, 30000); // 30초 동안 지속

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 클리어
    }, [setAlertModal]);

    return (
            <Container>
                <Compo>10분 후 일정이 종료됩니다. 마무리 해주세요!</Compo>
            </Container>
    )
}

export default AlertModal;

const Container = styled.div`
  background-color: #ffffff;
  width: 390px;
  height: 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #DCD3C8;
  /* 위치 관련 코드*/
  position: fixed;
  top: 80px;
  right: 15%;
  border-radius: 8px;
`
const Compo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.6px;
  letter-spacing: -0.02em;

`