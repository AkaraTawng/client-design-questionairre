import styled from "styled-components"
import { useState } from "react";
function Form() {

  const [page, setPage] = useState(0);
  const FormTitles = [
    "1", 
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]

  const handleIncrementClick = (e) => {
    // e.preventDefault();
    setPage((currPage) => currPage + 1)
  }

  const handleDecrementClick = (e) => {
    // e.preventDefault();
    setPage((currPage) => currPage - 1)
  }



  
  return (
    <FormWrapperOuter>
        <ProgressBar></ProgressBar>
        <FormWrapperInner>
        <Header><h1>{FormTitles[page]}</h1></Header>
        <Body></Body>
        <Footer>
            <PrevButton type="button" onClick={handleDecrementClick}>Back</PrevButton>
            <NextButton type="button" onClick={handleIncrementClick}>Next</NextButton>
        </Footer>
        </FormWrapperInner>
    </FormWrapperOuter>
  )
}

const FormWrapperOuter  = styled.form`
    
`;

const ProgressBar = styled.div`
    
`;

const FormWrapperInner = styled.div`

`;

const Header = styled.header`
    h1 {
      color: red;
    }
`;

const Body = styled.main`
    
`;

const Footer = styled.footer`
    
`;

const PrevButton = styled.button`
    
`;

const NextButton = styled.button`
    
`;


export default Form