import styled from "styled-components"
import InputsButton from "./components/InputsButton"

export default function App(){
  return(
    <Container>
      <CenterContainer>
        <TopText>Currency Converter</TopText>
          <InputDiv>
          <InputsButton text="Converter Real"/>
          <InputsButton text="Converter Dolar"/>
          <button>To Convert</button>
          </InputDiv>
      </CenterContainer>
    </Container>  
  )
}


const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    position: fixed;
`

const CenterContainer = styled.div`
    height: 800px;
    width: 80%;
    border-radius: 10px;
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: center;
    background-color: white;
    
`

const TopText = styled.h1`
  font-size: 6vw;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: #E35E95;
  margin-top: 45px;
`

const InputDiv = styled.div`
 margin-top: 100px;
  width: 80%;
  max-width: 500px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;