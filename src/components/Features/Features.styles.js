import styled from "styled-components";

export const FeaturesContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FeaturesContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const FeaturesImg = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 4px;
  width: 900px;
  height: 400px;
`;

export const FeaturesContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  @media only screen and (min-width: 1200px) {
    padding: 3rem 6rem;
  }
  @media only screen and (min-width: 1500px) {
    padding: 3rem 9rem;
  }
`;

export const FeaturesContentTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: bold;
`;

export const FeaturesText = styled.p`
  font-size: 1.8rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
