import {
  FooterSection,
  FooterContainer,
  FooterCopyRight,
} from "./Footer.styles";

function Footer() {
  return (
    <div>
      <FooterSection>
        <FooterContainer>
          <FooterCopyRight>
            {" "}
            &copy; 2021 ManaMed Inc. All Rights Reserved
          </FooterCopyRight>
        </FooterContainer>
      </FooterSection>
    </div>
  );
}

export default Footer;
