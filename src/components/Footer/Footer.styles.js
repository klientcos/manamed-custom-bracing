import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import { Link } from "react-router-dom";

export const FooterSection = styled.section`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #333;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 10rem;

  ${Container}
`;
export const FooterCopyRight = styled(Link)`
  text-decoration: none;
  outline: none;
  color: #fff;
  margin-top: 2rem;

  &:hover {
    color: #e38b06;
  }
`;
