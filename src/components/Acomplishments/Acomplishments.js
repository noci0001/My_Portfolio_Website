import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1, text: 'Honours Programme', },
  { number: 4, text: 'Working Proficiency Languages', },
  { number: 1, text: 'Scrimba Scholarship', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Accomplishments </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number != 1 ? `${card.number}+` : `${card.number}` }</BoxNum>
          <BoxText>{card.text != 1 ? `${card.text}` : "" }</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
