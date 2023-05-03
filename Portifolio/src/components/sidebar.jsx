import React from 'react'

const SIDEBAR_STYLE = {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    gap: '30%',
    backgroundColor: 'black',
    width: '60px',
    height: '100vh'
}

const MENU_HAMBURGUER_STYLE = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    top: '10px',
    width: '100%',
    height: '40px',
}

const MENU_HAMBURGUER = {
    backgroundColor: 'white',
    width: '40px',
    height: '40px',
}

const MENU_ITENS_STYLE = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '20px',
    
}

const ITEM_STYLE = {
    width: '40px',
    height: '40px',
    backgroundColor: 'white',
    borderRadius: '50%',
    alignSelf: 'center'
}

export default function Sidebar() {
    return (
        <div style={SIDEBAR_STYLE}>
            <div style={MENU_HAMBURGUER_STYLE}>
                <div style={MENU_HAMBURGUER}></div>
            </div>

            <div style={MENU_ITENS_STYLE}>
                <div style={ITEM_STYLE}></div>
                <div style={ITEM_STYLE}></div>
                <div style={ITEM_STYLE}></div>
            </div>
        </div>
    )
}
