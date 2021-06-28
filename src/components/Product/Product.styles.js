import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

export const ProdContainer = styled.section`
  display: flex;
  align-items: center;
`;

export const ProdWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #e5f2e5;
  overflow: hidden;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 1370px) {
    align-items: center;
  }
`;

export const ProdContent = styled.div`
  padding: 0 1rem;
  @media only screen and (min-width: 1800px) {
    margin: 0 20rem;
  }

  @media only screen and (max-width: 1300px) {
    padding: 2rem 5rem;
  }

  @media only screen and (max-width: 1000px) {
    text-align: center;
  }

  @media only screen and (max-width: 500px) {
    padding: 2rem;
  }
`;

export const ProdContentTitle = styled.h2`
  font-size: clamp(2rem, 8vw, 5rem);
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.2;
`;

export const ProdContentText = styled.p`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`;

export const ProdContentBtn = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const ProdImage = styled.div`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  @media only screen and (min-width: 1800px) {
    width: 900px;
  }
  @media only screen and (max-width: 1400px) {
    width: 650px;
  }

  @media only screen and (max-width: 1200px) {
    width: 500px;
  }
  @media only screen and (max-width: 1000px) {
    width: 700px;

    height: 500px;
  }
  @media only screen and (max-width: 700px) {
    width: 600px;
  }
  @media only screen and (max-width: 500px) {
    width: 400px;
    height: 300px;
  }
  @media only screen and (max-width: 400px) {
    width: 350px;
  }
`;
