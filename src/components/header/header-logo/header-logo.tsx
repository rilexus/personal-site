import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Styled = styled.div`
  a {
    color: #00f;
    text-decoration: none;
  }
`

const HeaderLogo = () => {
  return (
    <Styled>
      <Link to={"/"}>Stanislav Panchenko</Link>
    </Styled>
  )
}

export default HeaderLogo
