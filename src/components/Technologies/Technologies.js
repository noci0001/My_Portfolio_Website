import React from 'react';
import { DiReact, DiZend } from 'react-icons/di';
// import { SiNextDotJs } from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Who I am</SectionTitle>
    <SectionText>
	I am Sam from Berlin,<br/> I code for a living and I live to code.<br/> I really enjoy low level languages like C and I mostly code in CPP. You can checkout my LinkedIn profile at my LinkedIn
    <br/>
	🔭 I am currently working on creating a web server <br/>
	🌱 I am learning the wonders of C++ and Object Oriented Programming<br/>
	👯 I am looking to collaborate on frontend projects involving React<br/>
	🤔 I am looking for help with finding an internship in tech that challenges me and makes me create an impact<br/>
	💬 Ask me about how shell works! It's an amazingly complex language that we use daily but we do not appreciate enough!<br/>
	📫 How to reach me: my <a href="https://www.linkedin.com/in/samuelnocita/">LinkedIn</a> or <a href="mailto:samuelnocita@gmail.com">samuelnocita@gmail.com</a><br/>
	⚡ Fun fact: Computer languages are not the only languages I find fascinating, human languages were my first passion and I speak a few like Italian, Spanish, French and soon I hope to master German<br/>
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
        {/* <SiNextDotJs size="6rem"/> */}
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
