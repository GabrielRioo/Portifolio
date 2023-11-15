import Image, { StaticImageData } from "next/image";
import { BoxContent, BoxTitle, Container, Content, TitleContainer } from "./styles";
import Perfil from "@/pages/home/components/Perfil";
import Links from "@/pages/home/components/Links";
import Skills from "@/pages/home/components/Skill";
import Experiences from "@/pages/home/components/Experiences";
import Project from "@/pages/projects/components/project";
import Error404Icon from '../../assets/Error404Icon.png'


interface BoxProps {
    iconSrc: StaticImageData;
    session: string;
    imageProject?: StaticImageData;
    descriptionProject?: string;
    title?: string;
    children?: React.ReactNode;
}

export default function Box({ iconSrc, session, imageProject = Error404Icon, descriptionProject, title = session, children }: BoxProps) {
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
                        {session === "About" && (
                            <Perfil />
                        )}
                        {session === "Links" && (
                            <Links />
                        )}
                        {session === "Skills" && (
                            <Skills />
                        )}
                        {session === "Experiences" && (
                            <Experiences />
                        )}
                        {session === "Project" && (
                            <Project>
                                {
                                    imageProject === Error404Icon ? (
                                        <Image src={imageProject} alt="Project Image" height={200} style={{ border: 'none', margin: '1em' }} />
                                    ) : (
                                        <Image src={imageProject} alt="Project Image" height={200} style={{ border: '3px solid #CB8834', margin: '1em' }}/>
                                    )
                                }

                                <p>{descriptionProject}</p>
                            </Project>
                        )}

                    </BoxContent>
                </Content>
            </Container>
        </>
    )
}

