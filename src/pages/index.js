import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import theme, { mediaq } from '../utils/theme';
import Layout from '../components/Layout';
import Slide from '../components/Slide';
import SEO from '../components/Seo';

/* ==================================================
 *  Styles
================================================== */
// const introHighlight = '#1a66ff';
const introHighlight = '#1188FF';

const animScroll = keyframes`
  0% {
    opacity: 1;
    transform: translate(100%, 0px) rotate(-90deg);
  }
  100% {
    opacity: 0.6;
    transform: translate(100%, 40px) rotate(-90deg);
  }
`;

// Used to override slide styles
const SlidesSection = styled.section`
  #intro {
    overflow: hidden;
    ::after {
      content: '<< SCROLL';
      font-family: ${theme.fonts.heading};
      letter-spacing: 0.5ch;

      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(100%) rotate(-90deg);
      transform-origin: bottom left;

      color: ${introHighlight};
      font-size: 1.3rem;
      padding: 0 0 4px 48px;
      border-bottom: 4px solid ${introHighlight};
      display: flex;
      align-items: center;

      ${mediaq.sm`color: white;`}
      ${mediaq.sm`border-width: 8px;`}

      ${mediaq.md`background: ${introHighlight};`}
      ${mediaq.md`padding: 0 24px 0 48px;`}
      ${mediaq.md`border: none;`}
      ${mediaq.md`height: 24px;`}
      ${mediaq.md`right: 24px;`}

      ${mediaq.lg`font-size: 1.4rem;`}
      ${mediaq.lg`height: 32px;`}
      ${mediaq.lg`right: 32px;`}

      ${mediaq.xl`font-size: 1.6rem;`}
      ${mediaq.xl`height: 40px;`}
      ${mediaq.xl`right: 40px;`}

      animation: ${animScroll} 2s ease-in alternate infinite;
    }
  }
`;

/* ==================================================
 *  Render
================================================== */
function IndexPage({ data }) {
  /* --------------------------------------------------
   *  Slide Data
  -------------------------------------------------- */
  // slides contains the props data needed to create <Slide> elements.
  // For each slide that we want to render, we create an object and push it to slides.
  const slides = [];

  /* --------------------------------------------------
   *  Slide Data / #intro
  -------------------------------------------------- */
  slides.push({
    id: 'intro',
    title: 'I’m a software engineer building blockchain innovations for the fintech industry.',
    descr: (
      <>
        <p>
          Currently, I'm a software engineer at Fidelity Investments. I recently graduated from{' '}
          <Link to="#lehigh">Lehigh University's</Link> Computer Science and Business program.
          Previously, I did Cyber Risk Advisory at <Link to="#deloitte">Deloitte</Link>.
        </p>
      </>
    ),
    fluid: data.imgIntro.childImageSharp.fluid,
    overlay: '#1C130F',
    highlight: introHighlight,
    isColorful: false,
    isExpanded: false,
    position: '70% 20%',
    // button: { text: 'Scroll', link: '#crater', isExternal: false },
    isBorderless: true,
  });

  /* --------------------------------------------------
   *  Slide Data / #fidelity
  -------------------------------------------------- */
  slides.push({
    id: 'fidelity',
    title: 'I develop and explore blockchain applications for Fidelity Investments.',
    descr: (
      <>
        <p>
          I work at the Operations &amp; Services Center of Excellence where I develop firm-wide
          best practices for our brokerage technologies. As a software engineer, I use the Ethereum
          blockchain to develop smart contracts in Solidity.
        </p>
        <p>
          <em>If you're passionate about the future of decentralized systems, we should talk!</em>
        </p>
      </>
    ),
    fluid: data.imgFidelity.childImageSharp.fluid,
    overlay: '#00201B',
    highlight: '#76a923',
    isColorful: true,
    isExpanded: false,
    position: '10% 50%',
    button: { text: 'Let’s Chat', link: '/contact', isExternal: false },
    isBorderless: false,
  });

  /* --------------------------------------------------
   *  Slide Data / #lehigh
  -------------------------------------------------- */
  slides.push({
    id: 'lehigh',
    title:
      'I recently graduated from Lehigh University’s interdisciplinary program in Computer Science and Business.',
    descr: (
      <>
        <p>
          I founded a startup with my dormmates and won Best App at the{' '}
          <a href="https://www1.lehigh.edu/news/app-inventors-display-practicality-creativity">
            LU Apps competition
          </a>
          . I was a Teaching Assistant for Web Systems Programming as well as Fundamentals of
          Programming. I was also a founding member of the{' '}
          <a href="http://www.lehighfintech.org/">Lehigh FinTech Group</a>.
        </p>
      </>
    ),
    fluid: data.imgLehigh.childImageSharp.fluid,
    overlay: '#21150b',
    highlight: '#ffd94a',
    isColorful: true,
    isExpanded: false,
    position: '70% 20%',
    // button: { text: 'Scroll', link: '#crater', isExternal: false },
    isBorderless: false,
  });

  /* --------------------------------------------------
   *  Slide Data / #deloitte
  -------------------------------------------------- */
  slides.push({
    id: 'deloitte',
    title:
      'At Deloitte, I advised clients by detecting cyber risks and upgraded them to new security standards.',
    descr: (
      <>
        <p>
          I helped clients migrate legacy systems by implementing hundreds of security
          configurations. I was also selected to attend Deloitte University with other top intern
          candidates.
        </p>
      </>
    ),
    fluid: data.imgDeloitte.childImageSharp.fluid,
    overlay: '#392000',
    highlight: '#86bc25',
    isColorful: true,
    isExpanded: false,
    position: '50% 50%',
    // button: { text: 'Scroll', link: '#crater', isExternal: false },
    isBorderless: false,
  });

  /* --------------------------------------------------
   *  Slide Data / #dots
  -------------------------------------------------- */
  slides.push({
    id: 'dots',
    title: 'As a fun project, I created a web app to play a game of connect-the-dots.',
    descr: (
      <>
        <p>
          I was inspired by the <a href="https://www.dots.co/">Dots</a> mobile game and recreated a
          cross-platform version using{' '}
          <a href="https://github.com/deepsheth/Connect-the-Dots">HTML5 canvas.</a> My top score is
          573 &mdash; shouldn't be too hard to top. 😛
        </p>
      </>
    ),
    fluid: data.imgDots.childImageSharp.fluid,
    overlay: '#D7503C',
    highlight: '#e03f3a',
    isColorful: false,
    isExpanded: false,
    position: '50% 50%',
    button: {
      text: 'Play Game',
      link: 'https://deepsheth.github.io/Connect-the-Dots/',
      isExternal: true,
    },
    isBorderless: false,
  });

  /* --------------------------------------------------
   *  Slide Data / Render
  -------------------------------------------------- */
  // Why map is used: https://reactjs.org/docs/lists-and-keys.html
  // Why a 'key' prop is needed: https://reactjs.org/docs/lists-and-keys.html#keys
  const renderSlides = slides.map(slideProps => <Slide key={slideProps.id} {...slideProps} />);

  /* --------------------------------------------------
  *  Render Component
  -------------------------------------------------- */
  return (
    <Layout hasTransparentHeader hasStickyHeader hasContainer={false} hasFooter={false}>
      <SEO
        title="Home"
        keywords={['deep', 'sheth', 'deepsheth', 'lehigh', 'fidelity', 'blockchain']}
      />
      <SlidesSection>{renderSlides}</SlidesSection>
    </Layout>
  );
}
export default IndexPage;

/* ==================================================
 *  Properties
================================================== */
IndexPage.propTypes = {
  data: PropTypes.object,
};

/* ==================================================
 *  Queries
================================================== */

// GraphQL fragment to load fluid responsive images
export const slideImage = graphql`
  fragment slideImage on File {
    childImageSharp {
      fluid(maxWidth: 4000, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
// GraphQL query to load the images based on the fragment
// See https://codebushi.com/using-gatsby-image/ for more info
export const pageQuery = graphql`
  query {
    imgIntro: file(relativePath: { eq: "slides/intro-deep-sheth.jpg" }) {
      ...slideImage
    }
    imgFidelity: file(relativePath: { eq: "slides/fidelity.jpg" }) {
      ...slideImage
    }
    imgLehigh: file(relativePath: { eq: "slides/lehigh.jpg" }) {
      ...slideImage
    }
    imgDeloitte: file(relativePath: { eq: "slides/deloitte.jpg" }) {
      ...slideImage
    }
    imgDots: file(relativePath: { eq: "slides/dots.jpg" }) {
      ...slideImage
    }
  }
`;
