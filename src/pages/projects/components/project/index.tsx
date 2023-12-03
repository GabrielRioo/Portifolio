import { ProjectContainer } from "./styles";

interface ProjectProps {
    children?: React.ReactNode;
}

export default function Project({ children }: ProjectProps) {
    return (
        <ProjectContainer>
            {children}
        </ProjectContainer>
    )
}