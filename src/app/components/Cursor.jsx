import React from 'react'

function Cursor({ transparent }) {

    const style = {
      "--mask": `radial-gradient(
        circle at var(--x, 15%) var(--y, 50%),
        white .1%,
        transparent ${transparent}%
      )`,
      "-webkitMask": `var(--mask)`,
      mask: `var(--mask)`,
    }

    return (
        <div
            id='hero'
            className={`hidden lg:block absolute left-0 top-0 z-20 w-screen h-screen bg-white/30 brightness-150 pointer-events-none `}
            style={style}
        />
    )
}

export default Cursor