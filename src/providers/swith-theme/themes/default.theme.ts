import { black, blue } from "../../../themes/colors"
import { deviceMediaQueries, MediaQueries } from "../../../themes/media-queries"

export interface ThemePropsI {
  theme: ThemeI
}
export interface ThemeI {
  colors: {
    prime: string;
    second: string;
    third: string;
    accent: string;
    text:{
      prime: string;
      second: string;
    }
    border: string;
  }
  shadow:{
    prime: string;
    second: string;
  },
  media: MediaQueries
}
export const defaultTheme: ThemeI = {
  colors: {
    prime: black.prime,
    second: "#565656",
    third: "#7f7f7fcc",
    accent: blue.main,
    text:{
      prime: black.second,
      second: black.third,
    },
    border: "#ececec",
  },
  shadow: {
    prime: "0 3px 7px 0px #0000004d",
    second: "0 4px 13px 0px #0000004d",
  },
  media: deviceMediaQueries
}
