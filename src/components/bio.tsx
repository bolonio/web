import React from "react"
import styled from "styled-components"
import { Content } from "./content"
import useSiteMetadata from "../hooks/useSiteMetadata"

export const Bio = () => {
  const BioContainer = styled.div`
    background-color: #f3f7f9;
    padding: 50px 0;
  `

  const BioText = styled.p`
    font-weight: 300;
    font-size: 1.75rem;
    margin: 0;
    @media screen and (max-width: 1000px) {
      font-size: 1.5rem;
    }
  `

  const { bio } = useSiteMetadata()

  return (
    <BioContainer>
      <Content>
        <BioText>{bio}</BioText>
      </Content>
    </BioContainer>
  )
}
