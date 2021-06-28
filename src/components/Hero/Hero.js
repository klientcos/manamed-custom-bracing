import Navbar from '../Navbar/Navbar';
import { Button } from '../../GlobalStyles';
import {
    HeroContainer,
    HeroContent,
    HeroContentText,
    HeroTitle,
    HeroSubtitle,
    HeroText,
    HeroBtn
} from './Hero.styles';


function Hero() {
    return (
        <div>
            <HeroContainer>
                <Navbar />
                <HeroContent>
                    <HeroContentText>

                        <HeroTitle> Custom Bracing </HeroTitle>

                        {/* <HeroSubtitle> For a longer life </HeroSubtitle> */}

                        <HeroText>
                        Custom braces for children, adolescents and adults Bracing has long been used to halt the progression of spinal curvature.
                        </HeroText>

                        <HeroBtn>
                            <Button primary big bigFont bigRadius> Contact Us </Button>
                        </HeroBtn>
                    </HeroContentText>
                </HeroContent>
            </HeroContainer>

            
        </div>
    )
}

export default Hero;
