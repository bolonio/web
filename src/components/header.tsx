import React from "react"
import styled from "styled-components"
import useNavigation from "../hooks/use-navigation"
import { Link } from "gatsby"

const Main = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
`

const MenuLink = styled.span`
  color: #1b1b1b;
  font-weight: 400;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Open Sans,
    sans-serif !important;
  margin-right: 15px;
  font-size: 1.25rem;
`

export const Header = () => {
  // const rootPath = `/`
  const navigation = useNavigation()
  return (
    <Main>
      <div>HERE IT COMES THE LOGO</div>
      <div>
        {navigation.map(item => (
          <Link key={item.slug} to={item.slug}>
            <MenuLink>{item.title}</MenuLink>
          </Link>
        ))}
      </div>
    </Main>
  )
}
