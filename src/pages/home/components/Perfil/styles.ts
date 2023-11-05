import { styled } from "@stitches/react";

export const PerfilContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '.5em',
});

export const PerfilName = styled('div', {
    fontSize: '1.2em'
})

export const PerfilRole = styled('div', {
    fontSize: '1em'
})

export const PerfilYears = styled('div', {
    fontSize: '.8em'
})

export const PerfilImage = styled('div', {
    border: '3px solid $yellow800',
    width: '5em',
    height: '5em',
    position: 'relative'
})

export const PerfilContent = styled('div', {
    fontSize: '15pt'
})

export const PerfilDescription = styled('p', {
    margin: '.5em'
})