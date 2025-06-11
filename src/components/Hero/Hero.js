import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

function openResumeNewTab(){
  const url = 'https://drive.google.com/file/d/1dku3vXBQ9R5ciMwWDU1cFo7xvryEih4x/view?usp=sharing';
  window.open(url, '_blank');
}
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Rakki R<br />
        </SectionTitle>
        <SectionText>
        Seasoned Blockchain Developer <br /> 
        Building Full Stack Decentralized Applications <br />
        </SectionText>
        <SectionText>
        💼 Currently Working At Zkcross Network
        </SectionText>
        <Button onClick={openResumeNewTab}>Download Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;