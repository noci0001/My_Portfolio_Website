import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        Samuel Nocita's <br/>
        Personal Portfolio
      </SectionTitle>
      <SectionText>
      The highest level of mastery is simplicity. <br />
      Most information is irrelevant and most effort is wasted, but only the expert knows what to ignore.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;