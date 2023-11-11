import { styled } from "@stitches/react";

export const ExperienceContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '.5em',
});

export const RoleName = styled('div', {
    fontSize: '1.2em'
})

export const YearRole = styled('div', {
    fontSize: '.8em'
})

export const CompanyImage = styled('div', {
    border: '3px solid $yellow800',
    width: '5em',
    height: '5em',
    position: 'relative'
})

export const ExperienceContent = styled('div', {
    fontSize: '15pt'
})

export const ExperienceDescription = styled('p', {
    margin: '.5em'
})

export const NavbarItem = styled('a', {
    color: '$yellow800',
    textDecoration: 'none',
    textTransform: 'uppercase',

    fontSize: '15pt',
    fontWeight: 'bold',
    // '-webkit-text-stroke': '1px #CB8834'
})