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
  MjmlDivider,
  MjmlClass,
  MjmlGroup,
  MjmlNavbar
} from 'mjml-react';

import { Head } from '../components/Head';
import { Footer } from '../components/Footer';
import { BlocImageText} from '../components/BlocImageTexte';
import { VisuelText } from '../components/VisuelText';
import { TextIntro } from '../components/TextIntro';
import { Divider } from '../components/Divider';
import { BlocHeader } from '../components/BlocHeader';
import { Banniere } from '../components/Banniere';


const style = {
  tiret: {
    borderTop:'3px solid pink', 
    width:'100px', 
    margin:'10px auto'
  },
  fontVerdana: {
    fontFamily: 'Verdana,Geneva,sans-serif',
    fontSize: '40px',
    color: 'mediumvioletred'
  },
  color0: '#ffffff',
  color1: '#3c4858',
  color2: '#fd3d0e',
  color3: '#F5F5F5',
  color4: '#004990',
  color5: '#cccccc',
  color6: '#F8F8F8',
  color7: '#707070'
};

export const generate = () => {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={640} backgroundColor={style.color6}>
        <BlocHeader
          color4={style.color4}
          color7={style.color7}
          color={style.color0}
          color5={style.color5}
        />
        <VisuelText
          color={style.color0}
        />      
        <TextIntro
          fontsize='18px'
          align='center'
          color={style.color0}
          paddingSection='10px 20px 10px'
          civilite='[EMV FIELD]CIVILITE[EMV /FIELD] [EMV FIELD]NOM_CONTACT[EMV /FIELD]'
          texte='Lorem psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
        />
        <Divider
          padding='0px 20px 10px'
          padding0='0px'
          border={style.color5}
          background={style.color0}
        />

        <MjmlSection key="first" padding='0 10px' backgroundColor={style.color0}>
          <BlocImageText
            titre="Transport des matières dangereuse"
            lien="> En savoir plus"
            color={style.color0}
            color1={style.color1}
            color2={style.color2}
            color3={style.color3}
          />
          <BlocImageText
            titre="Signalisation pour les véhicules"
            lien="> En savoir plus"
            color={style.color0}
            color1={style.color1}
            color2={style.color2}
          />
        </MjmlSection>
        <MjmlSection key="first" padding='0 10px 20px 10px' backgroundColor={style.color0}>
          <BlocImageText
            titre="&Eacute;quipements pour véhicules"
            lien="> En savoir plus"
            color={style.color0}
            color1={style.color1}
            color2={style.color2}
            color3={style.color3}
          />
          <BlocImageText
            titre="Emballage"
            lien="> En savoir plus"
            color={style.color0}
            color1={style.color1}
            color2={style.color2}
          />
        </MjmlSection>

        <Banniere
          titre='Lorem psum dolor sit amet'
          texte='Consultez notre flyer virtuel aménagement extérieur '
          lien="> Cliquez ici"
          color={style.color0}
          color1={style.color1}
          color2={style.color2}
          color4={style.color4}
        />

        <Footer
          colorDivider={style.color4}
          color4={style.color4}
		      color={style.color0}
          color2={style.color2}
        />
      </MjmlBody>
    </Mjml>
  );
};
