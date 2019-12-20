import { PageRendererProps } from "gatsby"
import React, { ReactNode } from "react"
import styled from "styled-components"
import { Header } from "./header"
import { Footer } from "./footer"
import { rhythm } from "../utils/typography"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
}

/*
const StyledH1 = styled.h1`
  ${styledScale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`

const StyledH3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`

const StyledLink = styled(FadeLink)`
  box-shadow: none;
  color: inherit;
  text-decoration: none;
`


const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`
*/

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(35)};
`

export const Layout = (props: Props) => {
  const { children } = props
  return (
    <Content>
      <Header />
      <main>{children}</main>
      <Footer />
    </Content>
  )
}
