import React from "react"
import styled from "styled-components"
import media from "../utils/media"
import EventCard, {LinkElement} from "./EventCard"
import Section from "../components/Section"

const PastEventsSection = styled(Section)`
  grid-auto-rows: 1fr;
  place-items: stretch;

  ${LinkElement} {
    grid-column: span 2;
  }

  ${media.mediumDown`
    ${LinkElement} {
      h4 {
        font-size: var(--m);
        line-height: var(--l);
      }
    }
  `}

  ${media.smallDown`
    overflow-x: scroll;
    margin-left: - var(--l);
    margin-right: - var(--l);
    -webkit-overflow-scrolling: touch;
  
    &::before,
    &::after {
      content: '';
    }
  `}

  ${media.smallOnly`
    grid-template-columns: calc(var(--l) - var(--m)) repeat(${props => props.cards * 2}, calc((100vw - ((var(--l) * 2) + (var(--m) * 5))) / 6)) calc(var(--l) - var(--m));
  `}

  ${media.xSmallOnly`
    grid-template-columns: calc(var(--l) - var(--m)) repeat(${props => props.cards * 2}, calc((100vw - ((var(--l) * 2) + (var(--m) * 5))) / 4)) calc(var(--l) - var(--m));
  `}
`;

const PastEvents = ({events}) => {
  return (
			<>
        <Section heading="Past events" css="margin-bottom: var(--m);"></Section>
        <PastEventsSection noseparator cards={events.length}>
          {events.map(({ node }, index) => {
            const { poster, title, date, location, speakers } = node.frontmatter
            return (
              <EventCard
                key={node.parent.id}
                path={`/${node.parent.name}`}
                poster={poster}
                title={title}
                date={date}
                location={location}
                speakers={speakers}
              />
            )
          })}
        </PastEventsSection>
      </>
  )
}

export default PastEvents