import { styled } from "@stitches/react";

export const ExperienceContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '.5em',
});

export const RoleName = styled('div', {
    fontSize: '1.3em',
    marginBottom: '.2em'
})

export const YearRole = styled('div', {
    fontSize: '1em',
    color: '$yellow400'
})

export const CompanyImage = styled('div', {
    border: '3px solid $yellow800',
    width: '5em',
    height: '5em',
    position: 'relative',

    margin: '.5em 2em .5em .5em'
})

export const ExperienceContent = styled('div', {
    fontSize: '15pt'
})

export const ExperienceDescription = styled('p', {
    margin: '.5em',
    fontSize: '1.2em',
})

export const NavbarItem = styled('a', {
    color: '$yellow800',
    textDecoration: 'none',
    textTransform: 'uppercase',

    fontSize: '15pt',
    fontWeight: 'bold',
    // '-webkit-text-stroke': '1px #CB8834'
})