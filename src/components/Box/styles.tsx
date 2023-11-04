import { styled } from "@stitches/react";

export const Container = styled('div', {
    margin: '50px',
    width: '300px',
    height: '300px',

    backgroundColor: 'white',
    border: '2px solid $ColorBorder',
    flexDirection: 'column',

    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',

})

export const Content = styled('div', {
    backgroundColor: '$yellow200',
    width: '290px',
    height: '240px',
    margin: '0 5px 5px 5px',

    border: '3px solid $ColorBorder',
})

export const BoxTitle = styled('div', {
    backgroundColor: '$yellow500',
    border: '3px solid $ColorBorder',

    width: '240px',
    height: '40px',
    margin: '0 5px 5px 5px',
})