import styled from "styled-components"

export default function App(){
  return(
    <Container>
      <CenterContainer>
        Olá, tudo bem?
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
    width: 85%;
    border-radius: 10px;
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    
`