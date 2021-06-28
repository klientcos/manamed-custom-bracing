import { Button } from "../../GlobalStyles";
import ProductImg from "../../images/product-img.jpeg";

import {
  ProdContainer,
  ProdWrapper,
  ProdContent,
  ProdContentTitle,
  ProdContentText,
  ProdContentBtn,
  Img,
  ProdImage,
} from "./Product.styles";

function Prod() {
  return (
    <ProdContainer>
      <ProdWrapper>
        <ProdContent>
          <ProdContentTitle> Personalize your brace </ProdContentTitle>
          <ProdContentText>
            We create, fit, and offer prosthetics and orthotics for many medical
            conditions depending on what each patient needs. We provide both
            custom limbs and braces which are made in house, and also offer
            off-the-shelf solutions from a variety of respected brands.
          </ProdContentText>

          <ProdContentBtn>
            <Button big bigFont bigRadius>
              {" "}
              Find Out More{" "}
            </Button>
          </ProdContentBtn>
        </ProdContent>
        <Img src={ProductImg} alt="Personalize your brace" />
      </ProdWrapper>
    </ProdContainer>
  );
}

export default Prod;
