import Image, { StaticImageData } from "next/image";
import { BoxTitle, Container, Content, PerfilDescription, TitleContainer } from "./styles";
import Perfil from "@/pages/home/components/Perfil";
import Links from "@/pages/home/components/Links";
import Skills from "@/pages/home/components/Skill";


interface BoxProps {
    iconSrc: StaticImageData;
    title: string;
    children: React.ReactNode;
}

export default function Box({ iconSrc, title, children }: BoxProps) {
    return (
        <>
            <Container>
                <TitleContainer>
                    <Image src={iconSrc} alt="Icon of a smile emoji" width={20} height={20} />
                    <BoxTitle>
                        <h2>{title}</h2>
                    </BoxTitle>
                </TitleContainer>
                <Content>
                    {title === "About" && (
                        <Perfil />
                    )}
                    {title === "Links" && (
                        <div>
                            <Links />
                        </div>
                    )}
                    {title === "Skills" && (
                        <div>
                            <Skills />
                        </div>
                    )}
                </Content>
            </Container>
        </>
    )
}

