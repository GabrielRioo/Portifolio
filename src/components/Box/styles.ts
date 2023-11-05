import { styled } from "@stitches/react";

export const Container = styled('div', {
    margin: '50px',
    width: '20em',
    height: '20em',

    backgroundColor: 'white',
    border: '2px solid $ColorBorder',
    flexDirection: 'column',

    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',

})

export const Content = styled('div', {
    backgroundColor: '$yellow200',
    width: '19em',
    height: '16em',
    margin: '0 5px 5px 5px',

    border: '3px solid $ColorBorder',
})

export const BoxTitle = styled('div', {
    backgroundColor: '$yellow500',
    border: '3px solid $ColorBorder',

    width: '16em',
    height: '3em',
    margin: '5px 5px 5px 5px',
})