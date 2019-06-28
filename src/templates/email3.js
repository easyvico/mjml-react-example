import React from 'react';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlStyle,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlText,
  MjmlAttributes,
  MjmlWrapper,
  MjmlDivider,
  MjmlClass,
  MjmlGroup,
  MjmlCarousel,
  MjmlCarouselImage,
  MjmlNavbar
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
import { ArgumentVisuel } from '../components/Argument-visuel';
import { BlocText } from '../components/BlocText';
import { NavBar } from '../components/Navbar';


const style = {
  tiret: {
    borderTop:'3px solid olive', 
    width:'100px', 
    margin:'10px auto'
  },
  text: {
    fontFamily: 'Verdana,Geneva,sans-serif',
    fontSize: '55px',
    color: '#61daff'
  },
  colorTest: '#61daff'
};

export const generate = () => {
  return (
    <Mjml>
      //#region [Section2]
      <Head />//#endRegion

      <MjmlBody width={600}>
        //#region [Section1]
        <Header prenom='Laurent'/>//#endRegion

        //#region [Section4]
        <NavBar />//#endRegion

        //#region [Section4]
        <Visuel />//#endRegion

        //#region [Section3]
        <BlocText titre="Bill Murray Groundhog Day" />//#endRegion

        <MjmlSection key="first" padding-top='15px' backgroundColor="#ffffff">
          <MjmlColumn>
            <MjmlCarousel>
              <MjmlCarouselImage thumbnailsSrc='' src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" />
              <MjmlCarouselImage src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" />
              <MjmlCarouselImage src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" />
            </MjmlCarousel>
          </MjmlColumn>
        </MjmlSection>

        //#region [Section3]
        <Accroche style={style} couleur='#0F2056' titre='Titre de la newsletter' bouton='Titre bouton'/>//#endRegion

        <MjmlWrapper padding='20px' backgroundColor='#ede9e2'>
          <MjmlSection backgroundColor='#ffffff' padding='20px'>

            //#region [Section2]
            <Argument background='olive' tiret='#0F2056' titre='Lorem ipsum dolor sit amet' contenu='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Argument background='yellow' titre='Lorem ipsum dolor sit amet' contenu='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Argument background='pink' titre='Lorem ipsum dolor sit amet' contenu='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>//#endRegion

          </MjmlSection>
          <MjmlDivider borderWidth='1px' borderColor='#eeeeee'></MjmlDivider>

          //#region [Section1]
          <CtaIntro couleur='#666666' titre='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'></CtaIntro>#endRegion
          {/* Les 2 CTA */}
          <MjmlSection backgroundColor='#ffffff' padding='0 20px 20px 20px'>
            <MjmlColumn>
              <Cta bouton='souscrire'></Cta>
            </MjmlColumn>
            <MjmlColumn>
              <Cta bouton='prendre rdv'></Cta>
            </MjmlColumn>
          </MjmlSection>

          //#region [Section4]
          <ArgumentVisuel />#endRegion

        </MjmlWrapper>
        <Footer />
        <Mentions />
      </MjmlBody>
    </Mjml>
  );
};
