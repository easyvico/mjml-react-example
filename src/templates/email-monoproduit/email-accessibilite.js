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

import { Head } from '../../components/Head';
import { Footer } from '../../components/Footer';
import { BlocTextImageVerti } from '../../components/BlocTextImageVerti';
import { TextIntro } from '../../components/TextIntro';
import { BlocHeader2Liens } from '../../components/BlocHeader2Liens';
import { Banniere } from '../../components/Banniere';
import { LogoTheme } from '../../components/LogoTheme';

const style = {
  tiret: {
    borderTop:'3px solid pink', 
    width:'100px', 
    margin:'10px auto'
  },
  fontVerdana: {
    fontFamily: 'Verdana,Geneva,sans-serif',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fd3d0e'
  },
  color0: '#ffffff',
  color1: '#3c4858',
  color2: '#fd3d0e',
  color3: '#F5F5F5',
  color4: '#004990',
  color5: '#cccccc',
  color6: '#F8F8F8',
  color7: '#707070',
  color9: '#119c92'
};

export const generate = () => {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={640} backgroundColor={style.color6}>       
        <BlocHeader2Liens
          color4={style.color4}
          color7={style.color7}
          color={style.color0}
          color5={style.color5}
          declinaison='Spécial accessibilité'
        />
        <LogoTheme
          color={style.color0}
          src='http://p7tre.emv3.com/IL/7/2/2/1101071722/1202306083.png'
          image='spécial accessibilité'
        />
        <TextIntro
          lien='https://www.lienTexte.fr/'
          fontsize='24px'
          align='center'
          color={style.color0}
          padding='0px'
          paddingSection='10px 20px'
          texte='Titre email monoproduit - Largeur img 600px'
        />
        <BlocTextImageVerti
          lien='https://www.lien1.fr/'
          titre='Titre monoproduit'
          texte='Texte monoproduit lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
          picto='http://p7tre.emv3.com/IL/7/2/2/1101071722/2027971645.png'
          image="image monoproduit - taille 600X600"
          imageLoupe='loupe'
          color1={style.color1}
          color={style.color0}
          background={style.color0}
          verdana={style.fontVerdana}
          padding='10px 20px 10px 20px'
        />
        <Banniere
          titre='Titre bannière'
          texte='Texte bannière - img min 320X120 / max 400X150'
          lien="> Cliquez ici"
          color={style.color0}
          color1={style.color1}
          color2={style.color2}
        />
        <Footer
          colorDivider={style.color9}
          color4={style.color4}
		      color={style.color0}
          color2={style.color2}
          background={style.color0}
        />
      </MjmlBody>
    </Mjml>
  );
};