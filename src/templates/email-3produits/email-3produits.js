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
          lien='https://www.lienTexte.fr/'
          fontsize='18px'
          align='center'
          color={style.color0}
          padding='0px'
          paddingSection='10px 20px'
          texte='Titre email des trois produits'
        />
        <Divider
          padding='10px 20px 20px'
          padding0='0px'
          border={style.color5}
          background={style.color0}
        />
        <BlocTextImageHoriz
          titre='Titre 1 produit'
          lien='https://www.lien1.fr/'
          texte='Texte 1 produit. Lorem ipsum dolor sit amet.'
          picto='http://p7tre.emv3.com/IL/7/2/2/1101071722/2027971645.png'
          image="img 1 - taille 290X290"
          imageLoupe='loupe'
          color1={style.color1}
          color={style.color0}
          background={style.color0}
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
          titre='Titre 2 produit'
          lien='https://www.lien2.fr/'
          texte='Texte 2 produit. Lorem ipsum dolor sit amet.'
          picto='http://p7tre.emv3.com/IL/7/2/2/1101071722/2027971645.png'
          image="img 2 - taille 290X290"
          imageLoupe='loupe'
          color1={style.color1}
          color={style.color0}
          background={style.color0}
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
          lien='https://www.lien3.fr/'
          titre='Titre 3 produit'
          texte='Texte 3 produit. Lorem ipsum dolor sit amet.'
          picto='http://p7tre.emv3.com/IL/7/2/2/1101071722/2027971645.png'
          image="img 3 - taille 290X290"
          imageLoupe='loupe'
          color1={style.color1}
          color={style.color0}
          background={style.color0}
          padding='0px 10px 20px 10px'
          verdana={style.fontVerdana}
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
          colorDivider={style.color4}
          color4={style.color4}
		      color={style.color0}
          color2={style.color2}
          background={style.color0}
        />
      </MjmlBody>
    </Mjml>
  );
};