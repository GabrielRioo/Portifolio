import { styled } from "@stitches/react";

export const PerfilContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '.5em',

});

export const PerfilName = styled('div', {
    fontSize: '1.3em',
})

export const PerfilRole = styled('div', {
    fontSize: '1em',
    marginBottom: '.2em'
})

export const PerfilYears = styled('div', {
    fontSize: '.8em'
})

export const PerfilImage = styled('div', {
    border: '3px solid $yellow800',
    width: '5em',
    height: '5em',
    position: 'relative',

    margin: '.5em 2em .5em .5em'
})

export const PerfilContent = styled('div', {
    fontSize: '15pt'
})

export const PerfilDescription = styled('p', {
    margin: '.5em',
    fontSize: '1.2em',
})