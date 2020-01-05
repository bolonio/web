import React from "react"
import styled from "styled-components"
import { Content } from "./content"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter1.svg"
import github from "../images/github1.svg"
import linkedin from "../images/linkedin.svg"

const StyledFooter = styled.div`
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Open Sans,
    sans-serif !important;
`

const FooterContainer = styled.footer`
  background-color: #23333d;
`

const FooterText = styled.span`
  color: #ffffff;
  display: flex;
  align-items: center;
`

const FooterIcon = styled.img`
  fill: #ffffff;
  margin: 0;
  width: 20px;
  margin-left: 20px;
`

/*
const FooterLink = styled.a`
  box-shadow: none;
  :hover {
    box-shadow: 0 2px 0 0 #ffffff;
  }
  :focus {
    box-shadow: none;
    outline: 3px solid #ffffff;
    outline-offset: 0.5rem;
  }
`
*/

export const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <StyledFooter>
          <FooterText>Adrián Bolonio - {new Date().getFullYear()}</FooterText>
          <FooterText>
            <FooterIcon src={twitter} alt="Logo" />
            <FooterIcon src={instagram} alt="Logo" />
            <FooterIcon src={github} alt="Logo" />
            <FooterIcon src={linkedin} alt="Logo" />
          </FooterText>
        </StyledFooter>
      </Content>
    </FooterContainer>
  )
}
