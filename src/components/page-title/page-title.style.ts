import styled from "styled-components"

interface PropsI {
  url:string
}

export const PageTitleStyled = styled.h2`
  font-weight: 900;
  font-size: 6rem;
  display: inline-block;
  
  background-image: url(${({url}:PropsI)=>url});
  background-color: ${({url}:PropsI)=>url ? 'transparent' : 'black'}
  
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
