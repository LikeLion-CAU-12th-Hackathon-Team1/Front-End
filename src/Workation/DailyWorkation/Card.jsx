import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import pin from '../../assets/img/pin.svg'

const Card = ({ image, placename, report, mapKey }) => {

  const [getKey, setKey] = useState(null);

  useEffect(() => {
    setKey(mapKey);
  }, [mapKey]);

  const handleClick = () => {
    if (getKey) {
      const link = `https://map.kakao.com/link/map/${getKey}`;
      window.open(link);
    }
  };
  return (
    <CardLocation>
      <Img style={{ backgroundImage: `url(${image})` }} alt={placename}>
        <Overlay />
        <InnerBox>
        <Report>{report}</Report>
        <TitleBox>
          <Title> {placename} </Title>
          <Pin style={{ backgroundImage: `url(${pin})` }} onClick={handleClick}/>
        </TitleBox>
        </InnerBox>
      </Img>
    </CardLocation>
  )
}

export default Card

const InnerBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CardLocation = styled.div`
  width: 292px;
  height: 260px;
  margin: 5px;
  display: flex;
  position: relative;
`
const Img = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
  border-radius: 4px;
  object-fit: cover;
  position: relative;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  //opacity: 50%;
  border-radius: 4px;
`
const Title = styled.div`
  z-index: 2;
  font-size: 25px;
  /* font-weight: 700; */
  color: white;
  max-width:90%;
  font-family: 'AppleSDGothicNeoSB', sans-serif;
  cursor: default;
`
const Report = styled.div`
  z-index: 2;
  font-size: 20px;
  /* font-weight: 600; */
  color: white;
  margin: 5%;
  font-family: 'AppleSDGothicNeoL', sans-serif;
  cursor: default;
`
const TitleBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 5%;
`

const Pin = styled.div`
  width: 28px;
  height: 28px;
  background-size: cover;
  cursor: pointer;
`