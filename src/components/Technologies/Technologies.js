import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaEthereum } from 'react-icons/fa';
import { SiSolidity } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle main center>🔮 Awesome Technology</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web3 world. <br />
      From Design To Blockchain.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br />
            Javascript / Typescript, React.js & Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiSolidity size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            Golang, Rust, Python, C++, C, Java, kubernetes, Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaEthereum size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solidity, Ethereum, Hyperleder Fabric, Web3.js, Ether.js, Hardhat, Smart Contracts
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
