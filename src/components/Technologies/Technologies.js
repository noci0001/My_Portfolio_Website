import React from 'react';
import { DiReact, DiZend } from 'react-icons/di';
import { SiNextDotJs } from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Who I am</SectionTitle>
    <SectionText>
    I describe myself as a curious person, I study Software Engineering because the world of Tech offers limitless opportunities for those ravenous for enlightenment. 
    I strive for excellence and I try to put creativity in every challenge I face, I think that "We need to first be limited in order to become limitless,” (Phil Hansen, TED Conference 2013).
    <br/>
    My classmates, instructors and co-workers have described me as an enthusiastic cheerful person and a motivated collaborator who is passionate and hard-working.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="6rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextDotJs size="6rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Next.js 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="6rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
