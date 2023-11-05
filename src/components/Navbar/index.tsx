import React, { ReactNode } from "react";
import { NavbarContainer, NavbarItem } from "./styles";

interface NavbarProps {
    children: ReactNode;
  }

export default function Navbar( {children }: NavbarProps) {
    return (
        <NavbarContainer>
            <ul>
                {React.Children.map(children, (child) => {
                    return (
                        <NavbarItem>
                            {child}
                        </NavbarItem>
                    )
                })}
            </ul>
        </NavbarContainer>
    );
}