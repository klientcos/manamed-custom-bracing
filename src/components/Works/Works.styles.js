import styled from 'styled-components';
import {BiMessageAltEdit, BiDetail, BiCart, BiPaperPlane} from 'react-icons/bi';
import {Container} from '../../GlobalStyles';

export const WorksContent = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`;

export const WorksContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 8rem;
    color: #333333;

    ${Container};
`;

export const WorksTitle = styled.h2`
    font-size: clamp(2rem, 8.5vw, 5rem);
    font-weight: bold;
`;

export const WorksCardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
`;

export const WorksCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 30rem;
    height: 30rem;
    background-color: #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.19);
    border-radius: 10px;

    &:not(:last-child) {
        margin-right: 5rem;
    }
    &:hover {
        box-shadow:  0px 10px 80px rgba(0, 0, 0, 0.21);
        transform: scale(1.00);
        // background-color: #E38B06;
        // color: #fff;
        
    }
`;

export const WorksIconContainer = styled.div`
width: 9rem;
height: 9rem;
// border-radius: 50%;
// border: 2px solid #333;
transition: all .3s ease-out;
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;

`;

export const WorksIcon1 = styled(BiMessageAltEdit)`
color: #333;
font-size: 6rem;
`;

export const WorksIcon2 = styled(BiDetail)`
color: #333;
font-size: 6rem;
`;
export const WorksIcon3 = styled(BiCart)`
color: #333;
font-size: 6rem;
`;

export const WorksIcon4 = styled(BiPaperPlane)`
color: #333;
font-size: 6rem;
`;
export const WorksCardTitle = styled.h3`
font-size: 2.4rem;
font-weight: bold;
padding-top: 1rem;
`;

export const WorksCardText = styled.p`
font-size: 1.8rem;
padding: 1rem 2rem;
`;