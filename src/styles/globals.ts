import { globalCss } from './index'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,

    fontFamily: 'VT323',
    color: '$yellow800',
  },

  body: {
    backgroundColor: 'black',
    color: 'white',
    '-webkit-font-smoothing': 'antialiased',
  },
})