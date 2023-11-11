import Image from "next/image";
import NavbarPrincipal from '../../../../components/Navbar'
import HtmlEmblem from '../../../../assets/HtmlEmblem.png'
import CsharpEmblem from '../../../../assets/CsharpEmblem.png'
import SqlEmblem from '../../../../assets/SqlEmblem.png'
import { SkillsContent, NavbarItem } from "./styles";

export default function Skills() {
    return (
        <section id="skills" style={{width: '100%'}}>
            <SkillsContent>
                <div id="frontend">
                    <Image src={HtmlEmblem} alt="Foto de Gabriel de Paiva Rio" width={40} height={40} />
                </div>
                <div id="backend">
                    <Image src={CsharpEmblem} alt="Foto de Gabriel de Paiva Rio" width={40} height={40} />
                </div>
                <div id="devops">
                    <Image src={SqlEmblem} alt="Foto de Gabriel de Paiva Rio" width={40} height={40} />
                </div>
            </SkillsContent>

            <NavbarPrincipal style={{ width: 80, height: 25 }}>
                <NavbarItem href="/Frontend">Frontend</NavbarItem>
                <NavbarItem href="/Backend">Backend</NavbarItem>
                <NavbarItem href="/DevOps">DevOps</NavbarItem>
            </NavbarPrincipal>
        </section>
    )
}