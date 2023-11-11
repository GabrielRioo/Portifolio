import { LinkContainer, LinkContent } from "./styles";
import Image from "next/image";
import LinkedinIcon from "../../../../assets/linkedinIcon.png"
import GithubIcon from "../../../../assets/githubIcon.png"
import RedirectIcon from "../../../../assets/RedirectIcon.png"

export default function Links() {
    return (
        <section id="links" style={{width: '100%'}}>
                <LinkContainer>
                    <Image src={LinkedinIcon} alt="Linkedin Icon" width={40} height={40} />
                    <LinkContent>
                        <a href="https://www.linkedin.com/in/seu-nome" target="_blank" rel="noopener">
                            linkedin.com/in/gabrielpaivario/
                        </a>
                        <Image src={RedirectIcon} alt="Github Icon" width={18} height={18} />
                    </LinkContent>
                </LinkContainer>

                <LinkContainer>
                    <Image src={GithubIcon} alt="Linkedin Icon" width={40} height={40} />
                    <LinkContent>
                        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener">
                            github.com/GabrielRioo
                        </a>
                        <Image src={RedirectIcon} alt="Github Icon" width={18} height={18} />
                    </LinkContent>
                </LinkContainer>
        </section>
    )
}