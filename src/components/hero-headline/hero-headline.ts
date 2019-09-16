import styled from "styled-components"

export const HeroHeadline = styled.h1<{fontSize: string}>`
  font-size: ${({fontSize})=> fontSize || '9rem'};
  margin: 0;
  margin-bottom: -.5rem;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -.005em;
`
