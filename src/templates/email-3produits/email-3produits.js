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
import { BlocTextImageHoriz } from '../../components/BlocTextImageHoriz';
import { TextIntro } from '../../components/TextIntro';
import { Divider } from '../../components/Divider';
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
          fontsize='18px'
          align='center'
          color={style.color0}
          padding='0px'
          paddingSection='10px 20px'
          texte='Titre de l&rsquo;email des trois produits'
        />
        <Divider
          padding='10px 20px 20px'
          padding0='0px'
          border={style.color5}
          background={style.color0}
        />
        <BlocTextImageHoriz
          titre='Titre du produit numéro 1 -'
          lien='https://www.google.fr/'
          texte='Texte descriptif du produit numéro un. Lorem ipsum dolor sit amet.'
          picto='https://imgshare.io/images/2019/07/18/ico-search.png'
          lienTexte='lien texte produit 1'
          lienTitre='lien titre produit 1'
          lienLoupeNouveau='lien loupe nouveau 1'
          image="lien image 1 - taille 290X290"
          imageLoupe='image loupe'
          color1={style.color1}
          color={style.color0}
          verdana={style.fontVerdana}
          padding='0 10px 10px 10px'
        />
        <Divider
          padding='10px 20px 20px'
          padding0='0px'
          border={style.color5}
          background={style.color0}
        />
        <BlocTextImageHoriz
          titre='Titre du produit numéro 2 -'
          lien='https://www.google.fr/'
          texte='Texte descriptif du produit numéro deux. Lorem ipsum dolor sit amet.'
          picto='https://imgshare.io/images/2019/07/18/ico-search.png'
          lienTexte='lien texte produit 2'
          lienTitre='lien titre produit 2'
          lienLoupeNouveau='lien loupe nouveau 2'
          image="lien image 2 - taille 290X290"
          imageLoupe='image loupe'
          color1={style.color1}
          color={style.color0}
          verdana={style.fontVerdana}
          padding='0 10px 10px 10px'
          direction='rtl'
        />
        <Divider
          padding='10px 20px 20px'
          padding0='0px'
          border={style.color5}
          background={style.color0}
        />
        <BlocTextImageHoriz
          lien='https://www.google.fr/'
          titre='Titre du produit numéro 3 -'
          texte='Texte descriptif du produit numéro trois. Lorem ipsum dolor sit amet.'
          picto='https://imgshare.io/images/2019/07/18/ico-search.png'
          lienTexte='lien texte produit 3'
          lienTitre='lien titre produit 3'
          lienLoupeNouveau='lien loupe nouveau 3'
          image="lien image 3 - taille 290X290"
          imageLoupe='image loupe'
          color1={style.color1}
          color={style.color0}
          padding='0px 10px 20px 10px'
          verdana={style.fontVerdana}
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