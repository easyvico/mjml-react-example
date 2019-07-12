import React from 'react';

import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlWrapper,
  MjmlDivider,
} from 'mjml-react';

import { Head } from '../components/Head';
import { Header } from '../components/Header';
import { LogoNavBar } from '../components/LogoNavBar';
import { Visuel } from '../components/Visuel';
import { Argument } from '../components/Argument';
import { Accroche } from '../components/Accroche-promesse';
import { CtaIntro } from '../components/Cta-intro';
import { Cta } from '../components/Cta';
import { Footer } from '../components/Footer';
import { Mentions } from '../components/Mentions';

const style = {
  tiret: {
    borderTop:'3px solid olive', 
    width:'100px', 
    margin:'10px auto'
  },
  colorTest: '#61daff'
};

export const generate = () => {
  return (
    <Mjml>
      //#region [Section2]
      <Head />//#endRegion

      <MjmlBody width={640}>
        //#region [Section1]
        <Header prenom='Laurent'/>//#endRegion

        //#region [Section4]
        <LogoNavBar />//#endRegion

        //#region [Section2]
        <Visuel />//#endRegion

        //#region [Section3]
        <Accroche style={style} couleur='#0F2056' titre='Titre de la newsletter' bouton='Titre bouton'/>//#endRegion

        //#region [Section4]
        <MjmlWrapper padding='20px' backgroundColor='#ede9e2'>
          <MjmlSection backgroundColor='#ffffff' padding='20px'>
            <Argument tiret='#0F2056' titre='Titre argument 1' contenu='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Argument titre='Titre argument 2' contenu='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Argument titre='Titre argument 3' contenu='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
          </MjmlSection>
          <MjmlDivider borderWidth='1px' borderColor='#eeeeee'></MjmlDivider>
          <CtaIntro couleur='#666666' titre='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'></CtaIntro>
          <MjmlSection backgroundColor='#ffffff' padding='0 20px 20px 20px'>
            <MjmlColumn>
              <Cta bouton='souscrire'></Cta>
            </MjmlColumn>
            <MjmlColumn>
              <Cta bouton='prendre rdv'></Cta>
              <MjmlText><p style={{color:style.colorTest}}>test couleur page principale</p>
                <p style={style.tiret}>test</p>
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>//#endRegion
        <Footer />
        <Mentions />
      </MjmlBody>
    </Mjml>
  );
};
