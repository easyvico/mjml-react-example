import React from 'react';
import { readFileSync } from 'fs';

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
import { Visuel } from '../components/Visuel';
import { Argument } from '../components/Argument';
import { Accroche } from '../components/Accroche-promesse';
import { CtaIntro } from '../components/Cta-intro';
import { Cta } from '../components/Cta';
import { Footer } from '../components/Footer';
import { Mentions } from '../components/Mentions';

const css = readFileSync('./assets/styles.css').toString();

export const generate = () => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Last Minute</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
        {/* <MjmlStyle inline>{`
          .text-contenu div {
            color: #666666 !important;
          }
          .tiret p {
            border-top: 3px solid #0F2056 !important;
          }

        `}</MjmlStyle> */}
        <MjmlStyle>{css}</MjmlStyle>
        <MjmlAttributes>
          <MjmlClass name="tiret" color="green" />
          <MjmlSection padding='0' backgroundColor=''></MjmlSection>
          <MjmlImage border='none' padding='0'/>
          <MjmlText font-size='15px' font-family='arial' padding='0' line-height='1.1'/>
        </MjmlAttributes>
      </MjmlHead>

      <MjmlBody width={640}>
        //#region [Section1]
        <Header prenom='Laurent'/>//#endRegion

        //#region [Section4]
        <Visuel />//#endRegion

        //#region [Section3]
        <Accroche couleur='#0F2056' titre='Titre de la newsletter' bouton='Titre bouton'/>//#endRegion

        //#region [Section2]
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
        </MjmlWrapper>//#endRegion
        <Footer />
        <Mentions />
      </MjmlBody>
    </Mjml>
  );
};
