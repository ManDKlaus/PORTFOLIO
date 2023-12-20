import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { changeConnection, changeDashboard } from '../redux/actions';

function InOut() {
    const dispatch = useDispatch();

    const ConectOrNot = (e) => { 
        dispatch(changeConnection());
        dispatch(changeDashboard());
        e.stopPropagation();
    }

    const connect = useSelector(state => state.connect);
    const show = useSelector(state => state.showLanding);

    return (
        <button
            className={`flex items-center ${show && "hidden"} h-10`}
            onClick={ ConectOrNot }
        >
            <span className='p-2'>{connect ? "Sign Out" : "Sign In"}</span>
            <Image
                width="24"
                height="24"
                src={connect ? "https://img.icons8.com/pulsar-line/48/exit.png" : "https://img.icons8.com/pulsar-line/48/enter-2.png"}
                alt={connect ? "Sign Out" : "Sign In"}
                className="h-11 w-11 p-2 invert"
            />
        </button>
    );
}

export default InOut;