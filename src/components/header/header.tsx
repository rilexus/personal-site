import * as React from "react"
import {
  HeaderBackground,
  HeaderContent,
  HeaderWrapper,
  NavStyled,
} from "./header.style"
import HeaderLogo from "./header-logo/header-logo"
import { Link } from "gatsby"
import styled from "styled-components"

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  position: relative;
  align-items: center;
`

const LinksWrapper = styled.div<{ type: HeaderType }>`
  a {
    text-decoration: none;

    color: ${({ type }) => (type === HeaderType.white ? "#2b2b2b" : "white")};
    margin-right: 20px;
  }
`
export enum HeaderType {
  black = "black",
  white = "white",
}
interface HeaderPropsI {
  type: HeaderType
}
const Header = ({ type }: HeaderPropsI) => {
  return (
    <NavStyled key={"header"}>
      <HeaderWrapper>
        <HeaderBackground type={type} />
        <HeaderContent>
          <Flex>
            <div>
              <HeaderLogo />
            </div>
            <LinksWrapper type={type}>
              <Link to={"/bio"}>Bio</Link>
              <Link to={"/portfolio"}>Portfolio</Link>
              <Link to={"/client"}>Clients</Link>
            </LinksWrapper>
          </Flex>
        </HeaderContent>
      </HeaderWrapper>
    </NavStyled>
  )
}

export default Header
