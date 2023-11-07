import { styled } from "@stitches/react";

export const LinkContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
})

export const LinkContent = styled('li', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    backgroundColor: '$yellow500',
    border: '2px solid $yellow800',
    margin: '.5em .5em .5em 0',

    listStyle: 'none',
    flex: 1,

    a: {
        textDecoration: 'none',
        paddingLeft: '.5em',
        textAlign: 'center'
    },

    img: {
        cursor: 'pointer'
    }
})