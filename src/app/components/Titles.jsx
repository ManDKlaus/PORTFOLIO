import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Emblema_One } from 'next/font/google'
const emblemaOne = Emblema_One({ subsets: ['latin'], weight: ["400"] })

function Titles({ title }) {
    const dashboard = useSelector(state => state.dashboard);

    return (
        <h2 className={`absolute left-0 top-[5svh] lg:top-[10svh] w-full text-[5svh] lg:text-[8svh] text-center font-semibold ${emblemaOne.className} leading-7 indent-0 ${ dashboard ? "text-emerald-300 dark:text-neutral-950/60" : "text-white/80 dark:text-slate-900/60"} custom-text-shadow z-0`} >{title}</h2>
    );
}

export default Titles;
