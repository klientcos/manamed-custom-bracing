import {
  FeaturesContainer,
  FeaturesContent,
  FeaturesImg,
  FeaturesContentText,
  FeaturesContentTitle,
  FeaturesText,
  Img,
} from "./Features.styles";
import Img1 from "../../images/how-it-works.jpg";

function Features() {
  return (
    <div>
      <FeaturesContainer>
        <FeaturesContent>
          <FeaturesImg>
            <Img src={Img1} alt="Doctor 1" />
          </FeaturesImg>

          <FeaturesContentText>
            <FeaturesContentTitle> Why Custom Bracing? </FeaturesContentTitle>
            <FeaturesText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </FeaturesText>
          </FeaturesContentText>
        </FeaturesContent>
      </FeaturesContainer>
    </div>
  );
}

export default Features;
