import React from 'react';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlText,
  MjmlStyle,
  MjmlAttributes,
  MjmlWrapper,
  MjmlDivider,
  MjmlClass,
  MjmlGroup
} from 'mjml-react';

import { Header } from '../components/Header';
import { Head } from '../components/Head';
import { Visuel } from '../components/Visuel';
import { Argument } from '../components/Argument';
import { Accroche } from '../components/Accroche-promesse';
import { CtaIntro } from '../components/Cta-intro';
import { Cta } from '../components/Cta';
import { Footer } from '../components/Footer';
import { Mentions } from '../components/Mentions';

export const generate = () => {
  return (
    <Mjml>
      <Head />      
      <MjmlBody width={640}>
        <Header prenom='Laurent'/>
        <Visuel />
        <Accroche couleur='#0F2056' titre='Titre de la newsletter' bouton='Titre bouton'/>  
        <MjmlWrapper padding='20px' backgroundColor='#ede9e2'>
          <MjmlSection backgroundColor='#ffffff' padding='20px'>
            <Argument tiret='#0F2056' titre='Lorem ipsum dolor sit amet' contenu='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Argument titre='Lorem ipsum dolor sit amet' contenu='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Argument titre='Lorem ipsum dolor sit amet' contenu='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
          </MjmlSection>
          <MjmlDivider borderWidth='1px' borderColor='#eeeeee'></MjmlDivider>
          <CtaIntro couleur='#666666' titre='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'></CtaIntro>
          <MjmlSection backgroundColor='#ffffff' padding='0 20px 20px 20px'>
            <MjmlColumn>
              <Cta bouton='souscrire'></Cta>
            </MjmlColumn>
            <MjmlColumn>
              <Cta bouton='prendre rdv'></Cta>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
        <Footer />
        <Mentions />
      </MjmlBody>
    </Mjml>
  );
};
