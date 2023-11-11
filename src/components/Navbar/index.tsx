import React, { CSSProperties, ReactNode } from "react";
import { NavbarContainer, NavbarItem } from "./styles";

interface NavbarProps {
    children: ReactNode;
    style?: CSSProperties;
  }

export default function Navbar( {children, style }: NavbarProps) {
    return (
        <NavbarContainer>
            <ul>
                {React.Children.map(children, (child) => {
                    return (
                        <NavbarItem style={style}>
                            {child}
                        </NavbarItem>
                    )
                })}
            </ul>
        </NavbarContainer>
    );
}