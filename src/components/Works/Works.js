import {
    WorksContainer,
    WorksContent,
    WorksTitle,
    WorksCardContent,
    WorksCard,
    WorksIconContainer,
    WorksIcon1,
    WorksIcon2,
    WorksIcon3,
    WorksIcon4,
    WorksCardTitle,
    WorksCardText
} from './Works.styles';

function Works() {
    return (
        <div>
            <WorksContent>
                <WorksContainer>
                    <WorksTitle> How it works </WorksTitle>

                    <WorksCardContent>

                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon1 />
                            </WorksIconContainer>

                            <WorksCardTitle> Message Us </WorksCardTitle>

                            <WorksCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </WorksCardText>
                        </WorksCard>

                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon2/>
                            </WorksIconContainer>

                            <WorksCardTitle> Order </WorksCardTitle>

                            <WorksCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </WorksCardText>
                        </WorksCard>

                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon3 />
                            </WorksIconContainer>

                            <WorksCardTitle> Pay </WorksCardTitle>

                            <WorksCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </WorksCardText>
                        </WorksCard>

                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon4 />
                            </WorksIconContainer>

                            <WorksCardTitle> Ship </WorksCardTitle>

                            <WorksCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </WorksCardText>
                        </WorksCard>

                    </WorksCardContent>
                </WorksContainer>
            </WorksContent>
        </div>
    )
}

export default Works;
