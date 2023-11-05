import { PerfilContainer, PerfilContent, PerfilDescription, PerfilImage, PerfilName, PerfilRole, PerfilYears } from "./styles";
import Image from "next/image";

export default function Perfil() {
    return (
        <>
            <PerfilContainer>
                <PerfilImage>
                    <Image src="https://github.com/GabrielRioo.png" alt="Foto de Gabriel de Paiva Rio" layout="fill" />
                </PerfilImage>
                <PerfilContent>
                    <PerfilName><strong>Gabriel de Paiva Rio</strong></PerfilName>
                    <PerfilRole><strong>Fullstack Developer</strong></PerfilRole>
                    <PerfilYears>4 years</PerfilYears>
                </PerfilContent>
            </PerfilContainer>

            <PerfilDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam risus eget tortor egestas, eget pellentesque urna malesuada. Sed bibendum hendrerit enim, in mattis nulla auctor eget.
            </PerfilDescription>
        </>
    )
}