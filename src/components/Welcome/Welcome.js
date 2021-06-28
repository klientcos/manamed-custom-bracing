import {
    WelcomeContainer, 
    WelcomeContent,
    WelcomeImg, 
    WelcomeContentText,
    WelcomeContentTitle,
    WelcomeText,
    Img
} from './Welcome.styles';
import Img1 from '../../images/how-it-works.jpg';

function Welcome() {
    return (
        <div>
            <WelcomeContainer>
                <WelcomeContent>
                    <WelcomeImg>
                        <Img src={Img1} alt="Delicious Pizza" />
                    </WelcomeImg>

                    <WelcomeContentText>
                        <WelcomeContentTitle> Why Custom Bracing? </WelcomeContentTitle>
                        <WelcomeText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </WelcomeText>
                    </WelcomeContentText>
                        
                </WelcomeContent>
            </WelcomeContainer>
        </div>
    )
}

export default Welcome
