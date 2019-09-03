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
import { BlocHeader } from '../../components/BlocHeader';
import { Banniere } from '../../components/Banniere';

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
        <TextIntro
          fontsize='24px'
          align='center'
          color={style.color0}
          padding='0px'
          paddingSection='10px 20px'
          texte='Titre de la page du monoproduit - Largeur image 600px'
        />
        <BlocTextImageVerti
          titre='Titre du produit lorem ipsum dolor sit amet'
          texte='Texte descriptif du produit lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
          picto='https://imgshare.io/images/2019/07/18/ico-search.png'
          image="lien image monoproduit - taille 600X600"
          lienTitre='lien titre produit'
          imageLoupe='image loupe'
          lienLoupeNouveau='lien loupe nouveau'
          lienTexte='lien texte produit'
          color1={style.color1}
          color={style.color0}
          verdana={style.fontVerdana}
          padding='10px 20px 10px 20px'
        />
        <Banniere
          titre='Titre bannière'
          lienTitre='lien titre bannière'
          texte='Texte bannière - taille image max 400X150'
          lienTexte='lien texte bannière'
          lien="> Cliquez ici"
          lienCliquezIci='lien cliquez ici bannière'
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