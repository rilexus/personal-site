import * as React from "react"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"
import { forwardRef, useRef, useState } from "react"
import useHover from "../../../../hooks/useHover"
import Tooltip from "../../../Tooltip/Tooltip"
import { useIsInView } from "../../../../hooks/useIsinView"
import { ThemePropsI } from "../../../../providers/swith-theme/themes/default.theme"
import { ParagraphStyled } from "../../../pragraph/pragraph.style"
const techIcons = [
  {
    name: "React",
    width: 80,
    height: 80,
    url: "https://reactjs.org/",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    desc:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.",
  },
  {
    name: "NestJs",
    width: 48,
    height: 48,
    url: "https://nestjs.com",
    src:
      "https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png",
    desc:
      "Nest is a framework for building efficient, scalable Node.js server-side applications. It uses modern JavaScript, is built with TypeScript (preserves compatibility with pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).",
  },
  {
    name: "GraphQL",
    width: 55,
    height: 55,
    url: "https://graphql.org/",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    desc:
      "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.",
  },
  {
    name: "Prisma",
    width: 55,
    height: 55,
    url: "https://www.prisma.io",
    src:
      "https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png",
    desc:
      "GraphQL is a simple yet incredibly powerful abstraction for working with data. Prisma is the first step towards making GraphQL a universal query language by abstracting away the complexity of SQL and other database APIs.",
  },
  {
    name: "Styled-Components",
    width: 55,
    height: 55,
    url: "https://www.styled-components.com/",
    src: "https://angeloocana.com/imgs/styled-components.png",
    desc:
      "Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles.",
  },
  {
    name: "CSS",
    width: 55,
    height: 55,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    desc:
      "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
  },
  {
    name: "HTML",
    width: 55,
    height: 55,
    url: "https://www.w3.org/html/",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    desc:
      "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
  },
  {
    name: "Sketch",
    width: 59,
    height: 55,
    url: "https://www.sketch.com",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/788px-Sketch_Logo.svg.png",
    desc:
      "Sketch is a vector graphics editor, developed by the Dutch company Bohemian Coding. A key difference between Sketch and other vector graphics editors is that Sketch does not include print design features.",
  },
  {
    name: "Photoshop",
    width: 55,
    height: 55,
    url: "https://www.adobe.com/products/photoshopfamily.html",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1024px-Adobe_Photoshop_CC_icon.svg.png",
    desc:
      "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, this software has become the industry standard not only in raster graphics editing, but in digital art as a whole.",
  },
  {
    name: "Intellij",
    width: 55,
    height: 55,
    url: "https://www.jetbrains.com",
    src: "https://cdn.iconscout.com/icon/free/png-512/intellij-idea-569199.png",
    desc:
      "IntelliJ IDEA is a Java integrated development environment for developing computer software. It is developed by JetBrains, and is available as an Apache 2 Licensed community edition, and in a proprietary commercial edition. Both can be used for commercial development.",
  },
]

const Section = styled.section`
  padding-bottom: 20vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
`

const ChildStaggger = posed.div({
  visible: {
    staggerChildren: 100,
  },
  hidden: {
    staggerChildren: 10,
  },
  init: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "10vh 0 10vh 0",
  },
})

const IconWrapper = styled.div<any>`
  margin: 5px;
`
const Img = styled.img`
  transition: transform 120ms;
  cursor: pointer;
  margin: 0;
  &:hover {
    transform: scale(1.1);
  }
`
const TooltipName = styled.div`
  font-size: 14px;
  margin: 0;
  font-weight: 500;
`
const TooltipUrl = styled.div`
  font-size: 12px;
  margin: 0;
  opacity: 0.5;
  font-weight: 400;
`
const Icon = forwardRef(({ icon }: any, ref: any) => {
  // forwardRef for AnimationIcons component
  const { src, width, height, url, name } = icon
  const { event, bind } = useHover()
  const pos = event.target && event.target.getBoundingClientRect()
  return (
    <IconWrapper {...bind} ref={ref}>
      <Tooltip
        visible={event.hovered}
        left={pos && pos.left + pos.width / 2}
        top={pos && pos.top}
      >
        <TooltipName>{name}</TooltipName>
        <TooltipUrl>{url}</TooltipUrl>
      </Tooltip>
      <a href={url}>
        <Img width={`${width}px`} height={`${height}px`} src={src} alt="" />
      </a>
    </IconWrapper>
  )
})
const AnimatedIcon = posed(Icon)({
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 250,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.2,
    transition: {
      duration: 10,
    },
  },
})

const TechWrapper = styled.div`
  text-align: center;
`
const PCentered = styled.p`
  width: 66%;
  max-width: 690px;
  margin-left: auto;
  margin-right: auto;
  font-size: 22px;
  line-height: 1.335;
  color: ${({ theme }: ThemePropsI) => theme.colors.text.prime};
`
const TechIntro = () => {
  return (
    <div>
      <h2>
        I L
        <span
          style={{
            fontSize: "1.1rem",
          }}
        >
          ❤️
        </span>
        ve Technology!
      </h2>
      <PCentered>
        Every tool serves a certain purpose and solves a specific problem. Those
        are my tools which help me solving mine.
      </PCentered>
    </div>
  )
}

const FadeInAnimation = posed.div({
  init: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: () => ({
      opacity: { duration: 700 },
    }),
  },
  exit: {
    opacity: 0,
    transition: () => ({
      opacity: { duration: 70 },
    }),
  },
})

const Tech = props => {
  const ref = useRef()
  const animate = useIsInView(ref)
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const currIconInfo = [techIcons[hoveredIndex]]
  return (
    <TechWrapper ref={ref}>
      <TechIntro />
      <div
        style={{
          height: "250px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "700px",
            overflowX: "scroll",
          }}
        >
          <div
            style={{
              width: "800px",
            }}
          >
            <ChildStaggger pose={animate ? "visible" : "hidden"}>
              {techIcons.map((icon, idx) => (
                <span
                  key={`tech-icon-${idx}`}
                  onMouseOver={() => {
                    setHoveredIndex(idx)
                  }}
                >
                  <AnimatedIcon icon={icon} />
                </span>
              ))}
            </ChildStaggger>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "660px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <PoseGroup animateOnMount enterPose={"enter"}>
          {currIconInfo.map(({ name, desc }, idx) => (
            <FadeInAnimation key={`curr-icon-${name}`}>
              <h3>{name}</h3>
              <ParagraphStyled>{desc}</ParagraphStyled>
            </FadeInAnimation>
          ))}
        </PoseGroup>
      </div>
    </TechWrapper>
  )
}

export default function TechList(props) {
  return (
    <Section>
      <Tech />
    </Section>
  )
}
