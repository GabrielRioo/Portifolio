import { styled } from "@stitches/react";

export const Container = styled('section', {
    width: '20em',

    backgroundColor: 'white',
    border: '2px solid $ColorBorder',
    flexDirection: 'column',

    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',

    h2: {
        textTransform: 'uppercase',
        fontSize: '20pt'
    }

})

export const TitleContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',

    img: {
        alignSelf: 'center',
        justifySelf: 'center',
        flex: 1,
        objectFit: 'cover',
        height: '100%',
        margin: '.3em'
    }
})

export const Content = styled('div', {
    backgroundColor: '$yellow200',
    width: '19em',
    height: '16em',
    margin: '0 5px 5px 5px',

    border: '3px solid $ColorBorder',
})

export const BoxTitle = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    
    backgroundColor: '$yellow500',
    border: '3px solid $ColorBorder',

    width: 'calc(100% - 3em)',
    margin: '5px 5px 5px 5px',

    textAlign: 'center',
    
})

export const Perfil = styled('div', {
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