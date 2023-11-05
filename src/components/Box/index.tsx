import Image from "next/image";
import { BoxTitle, Container, Content, Perfil, PerfilContent, PerfilDescription, PerfilImage, PerfilName, PerfilRole, PerfilYears, TitleContainer } from "./styles";
import SmileImage from '../../assets/SmileImage.png'

export default function Box() {
    return (
        <>
            <Container>
                <TitleContainer>
                    <Image src={SmileImage} alt="Icon of a smile emoji" width={20} height={20}/>
                    <BoxTitle>
                        <h2>About</h2>
                    </BoxTitle>
                </TitleContainer>
                <Content>
                    <Perfil>
                        <PerfilImage>
                            <Image src="https://github.com/GabrielRioo.png" alt="Foto de Gabriel de Paiva Rio" layout="fill"/>
                        </PerfilImage>
                        <PerfilContent>
                            <PerfilName><strong>Gabriel de Paiva Rio</strong></PerfilName>
                            <PerfilRole><strong>Fullstack Developer</strong></PerfilRole>
                            <PerfilYears>4 years</PerfilYears>
                        </PerfilContent>
                    </Perfil>

                    <PerfilDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam risus eget tortor egestas, eget pellentesque urna malesuada. Sed bibendum hendrerit enim, in mattis nulla auctor eget.
                    </PerfilDescription>
                </Content>
            </Container>
        </>
    )
}