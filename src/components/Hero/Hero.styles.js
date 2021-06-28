import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImgBg from '../../images/hero-cover.jpg';

export const HeroContainer = styled.div`
    background-image: linear-gradient( to top right, rgba(11, 10, 10, 0.38), rgba(11, 10, 10, 0.19)), url(${ImgBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 74vh;

    //insert @media codes
`;

export const HeroContent = styled.section`
    heightL 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #FFFEFE;

    //insert @media codes
`;

export const HeroContentText = styled.div`
    width: 50%;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    //insert @media codes
`;

export const HeroTitle = styled.h1`
    font-size: clamp(1rem, 10vw, 5rem);
    font-weight: 900;
    // letter-spacing: .2rem;
    line-height: 1.3;
    display: block;
`;


export const HeroSubtitle = styled.h2`
    font-size: clamp(2rem, 3vw, 4rem);
    font-weight: 300;
    // letter-spacing: 0.2rem;
    padding-top: 1rem;
`;

export const HeroText = styled.h3`
    font-size: clamp(2rem, 2.5vw, 3rem);
    font-weight: 400;
    padding: 2.5rem 2rem;
`;

export const HeroBtn = styled(Link)`
    text-decoration: none;
    outline: none;
    border: none;
`;