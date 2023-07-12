import React from 'react'
import styled from 'styled-components'

function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <Copyright>
        Christopher Chamberlain &copy; {currentYear} 
      </Copyright>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.p`
  
`;

export default Footer