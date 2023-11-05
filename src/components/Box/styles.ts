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