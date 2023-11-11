import { styled } from "@stitches/react";

export const NavbarContainer = styled('nav', {
    marginTop: '1em',
    'ul': {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    }
})

export const NavbarItem = styled('div', {
    cursor: 'pointer',

    width: '100%',
    textAlign: 'center',

    backgroundColor: '$yellow500',
    border: '2px solid $yellow800',
    
    // 'a': {
    //     color: '$yellow800',
    //     textDecoration: 'none',
    //     textTransform: 'uppercase',
        
    //     fontSize: '25pt',
    //     fontWeight: 'bold',
    //     // '-webkit-text-stroke': '1px #CB8834'
    // },

    '&:hover': {
      backgroundColor: '$yellow200'
    }

})
  