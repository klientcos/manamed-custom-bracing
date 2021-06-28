import Navbar from "../Navbar/Navbar";
import { Button } from "../../GlobalStyles";
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroText,
  HeroBtn,
} from "./Hero.styles";

function Hero() {
  return (
    <div>
      <HeroContainer>
        <Navbar />
        <HeroContent>
          <HeroContentText>
            <HeroTitle> Custom Bracing </HeroTitle>

            <HeroText>
              We specialize in fitting you with the right prosthetic limb or
              orthotic so you can do what matters - living your life. Get fitted
              properly.
            </HeroText>

            <HeroBtn>
              <Button primary big bigFont bigRadius>
                {" "}
                Contact Us{" "}
              </Button>
            </HeroBtn>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </div>
  );
}

export default Hero;
