import React from "react"
import styled, { css } from "styled-components"
import media, { breakpoints } from "../utils/media"

const SectionElement = styled.section`
  display: grid;
  place-items: start;

  ${media.xSmallOnly`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.smallDown`
    grid-column-gap: var(--m);
  `}
  ${media.smallOnly`
    grid-template-columns: repeat(6, 1fr);
  `}
  ${media.mediumDown`
    margin: 0 var(--l) var(--xxxl) var(--l);
  `}
  ${media.mediumOnly`
    grid-template-columns: repeat(8, 1fr);
  `}
  ${media.mediumUp`
    grid-column-gap: var(--l);
  `}
  ${media.largeUp`
    grid-template-columns: repeat(12, 1fr);
    max-width: calc(${breakpoints.largeMin}px - (2 * var(--l)));
    margin: 0 auto var(--xxxl) auto;
  `}

  ${props =>
    !props.noseparator &&
    css`
      border-top: var(--xxs) solid var(--white);
      padding-top: var(--l);
    `}

    h2 {
      grid-column: 1 / -1;
    }
`

const Section = ({ className, heading, subheading, noseparator, children }) => {
  return (
    <SectionElement noseparator={noseparator} className={className}>
      {heading && <h2>{heading}</h2>}
      {subheading && <p>{subheading}</p>}
      {children}
    </SectionElement>
  )
}

export default Section
