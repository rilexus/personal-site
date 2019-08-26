import * as React from "react"
import { ListTitleStyled } from "../../../list/list-title/list-title"
import { ListSubtitleStyled } from "../../../list/list-subtitle/list-subtitle"
import { ParagraphStyled } from "../../../pragraph/pragraph.style"
import { useEffect, useRef, useState } from "react"
import { useIsInView } from "../../../../hooks/useIsinView"
import posed from "react-pose"
import { LiElemStyled } from "../../../list/li-elem/li-elem"
import { UlList } from "../../../list/ul-list/ul-list.styled"
import Viewport from "../../../viewport/viewport"
import { useAppearedInView } from "../../../../hooks/useAppearedInView"

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

const ServicesList = () => {
  const listAnimationRef = useRef(null)
  const listAppeared = useAppearedInView(listAnimationRef)
  return (
    <Viewport height={"100vh"}>
      <section
        style={{
          padding: "0 5vw 0 5vw",
        }}
      >
        <ListTitleStyled>We provide</ListTitleStyled>
        <ListSubtitleStyled>Fullstack Service</ListSubtitleStyled>
        <UlAnimated
          ref={listAnimationRef}
          staggerChildren={200}
          pose={listAppeared ? "visible" : "hidden"}
        >
          <LiAnimated key={"Practice"} duration={700}>
            <h3>Frontend</h3>
            <ParagraphStyled>
              I’m a programmer who knows design. I know best practices from both
              worlds and combine them in frontend development and UX/XD. I work
              close with designers and programmers. I believe that
              communication, constructive criticism a safe team environment are
              the keys to success.
            </ParagraphStyled>
          </LiAnimated>
          <LiAnimated key={"Full Stack"} duration={700}>
            <h3>Backend</h3>
            <ParagraphStyled>
              I am competent in backend technologies as well as frontend and
              design. I work equally well in a team or develop a project
              completely on my own.
            </ParagraphStyled>
          </LiAnimated>
          <LiAnimated key={"Process"} duration={700}>
            <h3>Design</h3>
            <ParagraphStyled>
              Before starting to develop I make sure I understand the needs and
              requirements for the project. Therefore I ask a lot of questions
              and interview future users.
            </ParagraphStyled>
          </LiAnimated>
          <LiAnimated key={"Prototyping"} duration={700}>
            <h3>DevOps</h3>
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
export default ServicesList
