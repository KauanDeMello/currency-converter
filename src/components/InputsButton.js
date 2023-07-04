import styled from "styled-components"

export default function InputsButton(props){
    return (
        <>
            <form>
                <StyledForm>
                    <input 
                        type="text"
                        placeholder={`${props.text}`}
                        required
                    />    
                </StyledForm> 
            </form>
        </>
    )
}

const StyledForm = styled.label`
  width: auto;
  
  input {
    width: 500px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 9px;
    margin-bottom: 16px;
    border: 1px solid grey;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #7E7E7E;
    padding-left: 14px;
  }

  @media (max-width: 600px) {
    input {
      width: 100%;
    }
  }
`