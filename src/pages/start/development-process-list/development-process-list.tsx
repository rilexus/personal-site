import * as React from "react"
import { ListTitleStyled } from "../../../components/list/list-title/list-title"
import { ListSubtitleStyled } from "../../../components/list/list-subtitle/list-subtitle"
import { ParagraphStyled } from "../../../components/pragraph/pragraph.style"
import { useRef } from "react"
import { useIsInView } from "../../../hooks/useIsinView"
import posed from "react-pose"
import { LiElemStyled } from "../../../components/list/li-elem/li-elem"
import { UlList } from "../../../components/list/ul-list/ul-list.styled"
import Viewport from "../../../components/viewport/viewport"

const LiAnimated = posed(LiElemStyled)({
  visible: {
    y: 0,
    opacity: 1,
    transition: ({ duration }) => ({
      opacity: { ease: "easeOut", duration: duration },
      y: { ease: "easeOut", duration: duration },
    }),
  },
  hidden: {
    y: 75,
    opacity: 0,
    transition: ({ duration }) => ({
      opacity: { ease: "easeOut", duration: duration },
      y: { ease: "easeOut", duration: duration },
    }),
  },
})
const UlAnimated = posed(UlList)({
  visible: {
    staggerChildren: ({ staggerChildren }) => staggerChildren,
  },
  hidden: {
    // time children
    staggerChildren: ({ staggerChildren }) => staggerChildren,
  },
})

const DevelopmentProcessList = () => {
  const listAnimationRef = useRef(null)
  const animateList = useIsInView(listAnimationRef)
  return (
    <Viewport height={"200vh"}>
      <section ref={listAnimationRef}>
        <ListTitleStyled>How I work</ListTitleStyled>
        <ListSubtitleStyled>Development process</ListSubtitleStyled>
        <UlAnimated
          staggerChildren={200}
          pose={animateList ? "visible" : "hidden"}
        >
          <LiAnimated key={"Practice"} duration={700}>
            <h3>Practice</h3>
            <ParagraphStyled>
              I’m a programmer who knows design. I know best practices from both
              worlds and combine them in frontend development and UX/XD. I work
              close with designers and programmers. I believe that
              communication, constructive criticism a safe team environment are
              the keys to success.
            </ParagraphStyled>
          </LiAnimated>
          <LiAnimated key={"Full Stack"} duration={700}>
            <h3>Full Stack</h3>
            <ParagraphStyled>
              I am competent in backend technologies as well as frontend and
              design. I work equally well in a team or develop a project
              completely on my own.
            </ParagraphStyled>
          </LiAnimated>
          <LiAnimated key={"Process"} duration={700}>
            <h3>Process</h3>
            <ParagraphStyled>
              Before starting to develop I make sure I understand the needs and
              requirements for the project. Therefore I ask a lot of questions
              and interview future users.
            </ParagraphStyled>
          </LiAnimated>
          <LiAnimated key={"Prototyping"} duration={700}>
            <h3>Prototyping</h3>
            <ParagraphStyled>
              After understanding all requirements I sketch out the first design
              and test it for functionality. Then I create a quick prototype. I
              say: "A prototype tells more than 100 sketches"
            </ParagraphStyled>
          </LiAnimated>
        </UlAnimated>
      </section>
    </Viewport>
  )
}
export default DevelopmentProcessList
