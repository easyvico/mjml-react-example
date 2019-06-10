import React from 'react';
//import { readFileSync } from 'fs';

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

<<<<<<< HEAD
//const css = readFileSync('./assets/styles.css').toString();
=======
const css = readFileSync('./assets/styles.css').toString();
>>>>>>> b789491f7623b86dcf7ab1044ee5fe6a99202ec7
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
<<<<<<< HEAD
      //#region [Section2]
      <Head />//#endRegion
=======
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
          <MjmlText font-size='15px' font-family='arial' padding='0' line-height='1.1' color=''/>
        </MjmlAttributes>
      </MjmlHead>
>>>>>>> b789491f7623b86dcf7ab1044ee5fe6a99202ec7

      <MjmlBody width={640}>
        //#region [Section1]
        <Header prenom='Laurent'/>//#endRegion

        //#region [Section2]
        <Visuel />//#endRegion

        //#region [Section3]
<<<<<<< HEAD
        <Accroche style={style} couleur='#0F2056' titre='Titre de la newsletter' bouton='Titre bouton'/>//#endRegion
=======
        <Accroche style={style} titre='Titre de la email' text='Test couleur avec du css' bouton='Titre bouton'/>//#endRegion
>>>>>>> b789491f7623b86dcf7ab1044ee5fe6a99202ec7

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
            <MjmlColumn cssClass="violet">
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
