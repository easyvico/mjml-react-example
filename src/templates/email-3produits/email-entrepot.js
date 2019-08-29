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
  color8: '#d65a2b'
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
          padding='50px 0 0 0'
        />
        <LogoTheme
          color={style.color0}
          src='https://imgshare.io/images/2019/08/27/sol-entrepot.png'
        />
        <TextIntro
          fontsize='18px'
          align='center'
          color={style.color0}
          padding='0px'
          paddingSection='10px 20px'
          texte='Titre de l&rsquo;email solutions entrepôt'
        />
        <Divider
          padding='10px 20px 20px'
          padding0='0px'
          border={style.color8}
          background={style.color0}
        />
        <BlocTextImageHoriz
          titre='Titre du produit numéro un ®'
          texte='Texte descriptif du produit numéro un. Lorem ipsum dolor sit amet.'
          picto='https://imgshare.io/images/2019/07/18/ico-search.png'
          color1={style.color1}
          color={style.color0}
          verdana={style.fontVerdana}
          padding='0 10px 10px 10px'
        />
        <Divider
          padding='10px 20px 20px'
          padding0='0px'
          border={style.color8}
          background={style.color0}
        />
        <BlocTextImageHoriz
          titre='Titre du produit numéro deux ®'
          texte='Texte descriptif du produit numéro deux. Lorem ipsum dolor sit amet.'
          picto='https://imgshare.io/images/2019/07/18/ico-search.png'
          color1={style.color1}
          color={style.color0}
          verdana={style.fontVerdana}
          padding='0 10px 10px 10px'
          direction='rtl'
        />
        <Divider
          padding='10px 20px 20px'
          padding0='0px'
          border={style.color8}
          background={style.color0}
        />
        <BlocTextImageHoriz
          titre='Titre du produit numéro trois ®'
          texte='Texte descriptif du produit numéro trois. Lorem ipsum dolor sit amet.'
          picto='https://imgshare.io/images/2019/07/18/ico-search.png'
          color1={style.color1}
          color={style.color0}
          padding='0px 10px 20px 10px'
          verdana={style.fontVerdana}
        />
        <Banniere
          titre='Titre de la bannière'
          texte='Texte descriptif de la bannière lorem ipsum'
          lien="> Cliquez ici"
          color={style.color0}
          color1={style.color1}
          color2={style.color2}
          color4={style.color4}
        />
        <Footer
          colorDivider={style.color8}
          color4={style.color4}
		      color={style.color0}
          color2={style.color2}
        />
      </MjmlBody>
    </Mjml>
  );
};