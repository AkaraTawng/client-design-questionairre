import styled from "styled-components"
function Form() {
  return (
    <FormWrapperOuter>
        <ProgressBar></ProgressBar>
        <FormWrapperInner>
        <Header></Header>
        <Body></Body>
        <Footer>
            <PrevButton>Prev</PrevButton>
            <NextButton>Next</NextButton>
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