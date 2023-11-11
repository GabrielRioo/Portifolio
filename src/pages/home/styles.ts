import { styled } from "@stitches/react";
import BannerImage from "../../assets/BannerImage.png";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    'header': {
        width: '100%'
    },

    'main': {
        width: '100%'
    },

    'footer': {
        width: '100%'
    }
})

export const Content = styled('div', {
    display: "flex", 
    justifyContent: "space-between"
})

export const BannerImageContainer = styled('div', {
    width: "100%",
    height: "200px",
    backgroundImage: `url(${BannerImage.src})`,
    backgroundRepeat: "repeat",
    backgroundSize: "auto",
})

export const NavbarItem = styled('a', {
    color: '$yellow800',
    textDecoration: 'none',
    textTransform: 'uppercase',

    fontSize: '25pt',
    fontWeight: 'bold',
    // '-webkit-text-stroke': '1px #CB8834'
})

export const Footer = styled('footer', {
    textAlign: 'center',

    backgroundColor: '$yellow500',
    border: '2px solid $yellow800',

    padding: '0.1em',

    width: "calc(100% - 1em) !important"
})