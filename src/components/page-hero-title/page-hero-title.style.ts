import styled from "styled-components"

interface PropsI {
  url:string
}

export const PageTitleStyled = styled.span`
  display: inline-block;
  
  background-image: url(${({url}:PropsI)=>url});
  
  color: transparent;
  background-color: ${({url}:PropsI)=>url ? 'transparent' : 'black'};
  background-clip: text;
  -webkit-background-clip: text;
  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
