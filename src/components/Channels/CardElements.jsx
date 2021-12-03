import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
 `
export const CardWrapper = styled.div`
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;


`

export const CardOverTitle = styled.h1`
  margin: 20px auto 20px auto;
  color: black;
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 5px;
  min-width: 350px;
  font-weight: 500;
`

export const InfoCard = styled.div`
  background: #929292;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 100px;
  max-width: 275px;
  min-width: 275px;
  padding:  30px;
  box-shadow: 0 1px 3px #55505033;
  transition: all 0.2s ease-in-out;
  margin: 5px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    background: #a58f8f;
    cursor:pointer;
  }
`
export const CardIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

`
export const CardHead = styled.p`
  text-align: center;
  display: inline;
  width: 100%;
  font-size: 1.5rem;
  color: black;
  margin: 2vh auto 2vh auto;
  
`
export const CardSubHead = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const CardPrag = styled.p`
  font-size: 1rem;
  text-align: center;
`

export const UserIcon = styled.img`
  height: 50px;
  width: 50px;
  margin: 5px auto;
  border-radius: 50%;

`

export const AvatarIcon = styled.img`
  margin-top: 50px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
`
