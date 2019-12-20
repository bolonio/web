import React from "react"
import styled from "styled-components"

const Main = styled.footer`
  padding: 15px 15px;
  background: #23333d;
  color: white;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Open Sans,
    sans-serif !important;
`

export const Footer = () => {
  return (
    <Main>
      <div>&copy; {new Date().getFullYear()} by Adrián Bolonio</div>
      <div>HERE IT COMES THE SOCIAL ICONS</div>
    </Main>
  )
}
