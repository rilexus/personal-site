import styled from "styled-components"
import { ThemePropsI } from "../../providers/swith-theme/themes/default.theme"

export const IntroText = styled.p`
  color: ${({theme}:ThemePropsI)=>theme.colors.text.prime};
  font-size: 21px;
  line-height: 1.38105;
  font-weight: 400;
  letter-spacing: .011em;
`
