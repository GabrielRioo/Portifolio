import Image, { StaticImageData } from "next/image";
import { BoxContent, BoxTitle, Container, Content, TitleContainer } from "./styles";
import Perfil from "@/pages/home/components/Perfil";
import Links from "@/pages/home/components/Links";
import Skills from "@/pages/home/components/Skill";
import Experiences from "@/pages/home/components/Experiences";


interface BoxProps {
    iconSrc: StaticImageData;
    title: string;
    children?: React.ReactNode;
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
                    <BoxContent>
                        {title === "About" && (
                            <Perfil />
                        )}
                        {title === "Links" && (
                            <Links />
                        )}
                        {title === "Skills" && (
                            <Skills />
                        )}
                        {title === "Experiences" && (
                            <Experiences />
                        )}
                    </BoxContent>
                </Content>
            </Container>
        </>
    )
}

