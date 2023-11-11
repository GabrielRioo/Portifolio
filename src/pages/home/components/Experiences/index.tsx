import Image from "next/image";
import NavbarPrincipal from '../../../../components/Navbar'
import HtmlEmblem from '../../../../assets/HtmlEmblem.png'
import CsharpEmblem from '../../../../assets/CsharpEmblem.png'
import SqlEmblem from '../../../../assets/SqlEmblem.png'
import { SkillsContent, NavbarItem, CompanyImage, ExperienceContent, YearRole, RoleName, ExperienceContainer, ExperienceDescription } from "./styles";
import { PerfilYears } from "../Perfil/styles";

export default function Experiences() {
    return (
        <section id="experiences">
            <ExperienceContainer>
                <CompanyImage>
                    <Image src="https://github.com/GabrielRioo.png" alt="Foto de Gabriel de Paiva Rio" layout="fill" />
                </CompanyImage>
                <ExperienceContent>
                    <RoleName><strong>Fullstack Developer</strong></RoleName>
                    <YearRole><strong>2022 - current</strong></YearRole>
                </ExperienceContent>
            </ExperienceContainer>

            <ExperienceDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam risus eget tortor egestas, eget pellentesque urna malesuada. Sed bibendum hendrerit enim, in mattis nulla auctor eget.
            </ExperienceDescription>

            <NavbarPrincipal style={{ width: 80, height: 25 }}>
                <NavbarItem href="/Sistran">Sistran</NavbarItem>
                <NavbarItem href="/Telecall">Telecall</NavbarItem>
                <NavbarItem href="/Focus">Focus</NavbarItem>
            </NavbarPrincipal>
        </section>
    )
}