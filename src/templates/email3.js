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
import { BlocImageText} from '../components/BlocImageTexte';
import { LogoNavBar } from '../components/LogoNavBar';
import { VisuelText } from '../components/VisuelText';
import { TextIntro } from '../components/TextIntro';
import { Divider } from '../components/Divider';



const style = {
  tiret: {
    borderTop:'3px solid olive', 
    width:'100px', 
    margin:'10px auto'
  },
  text: {
    fontFamily: 'Verdana,Geneva,sans-serif',
    fontSize: '40px',
    color: 'mediumvioletred'
  },
  color0: '#ffffff',
  color1: '#3c4858',
  color2: '#fd3d0e',
  color3: '#F5F5F5',
  color4: '#004990',
  color5: '#cccccc'
};

export const generate = () => {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={640} backgroundColor={style.color3}>
        <Header prenom='Laurent' color0={style.color0}/>

        <LogoNavBar color0={style.color0}/>

        <VisuelText 
          color0={style.color0}
        />

        <TextIntro
          background0={style.color0}
          padding='20px 20px 10px'
          texte='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
        />

        <Divider
          padding='0px 20px 10px'
          padding0='0px'
          border={style.color5}
          background0={style.color0}
        />

        <MjmlSection key="first" padding='0 10px' backgroundColor={style.color0}>
          <BlocImageText
            titre="Transport des matières dangereuse"
            lien="> En savoir plus"
            color1={style.color1}
            color2={style.color2}
            color3={style.color3}
          />
          <BlocImageText
            titre="Signalisation pour les véhicules"
            lien="> En savoir plus"
            color1={style.color1}
            color2={style.color2}
          />
        </MjmlSection>

        <MjmlSection key="first" padding='0 10px' backgroundColor={style.color0}>
          <BlocImageText
            titre="&Eacute;quipements pour véhicules"
            lien="> En savoir plus"
            color1={style.color1}
            color2={style.color2}
            color3={style.color3}
          />
          <BlocImageText
            titre="Emballage"
            lien="> En savoir plus"
            color1={style.color1}
            color2={style.color2}
          />
        </MjmlSection>

        <Divider 
          border={style.color4}
          background0={style.color0}
        />

        <MjmlSection backgroundColor={style.color0} padding='20px'>
          <Argument 
            background='olive' 
            tiret='#0F2056' titre='Lorem ipsum dolor sit amet' 
            contenu='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
          <Argument 
            background='yellow' 
            titre='Lorem ipsum dolor sit amet' 
            contenu='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
          <Argument 
            background='pink' 
            titre='Lorem ipsum dolor sit amet' 
            contenu='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
        </MjmlSection>

        <MjmlDivider borderWidth='1px' borderColor='#eeeeee'></MjmlDivider>

        <CtaIntro couleur='#666666' titre='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'></CtaIntro>
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

        <Footer />
        <Mentions />
      </MjmlBody>
    </Mjml>
  );
};
