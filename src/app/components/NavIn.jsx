import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { changeDashboard } from '../redux/actions';

function NavIn({ show }) {
    const dispatch = useDispatch();

    const dashboardOrNot = () => {
        dispatch(changeDashboard());
    }


    const connect = useSelector(state => state.connect);
    const dashboard = useSelector(state => state.dashboard);

    return (
        <div
            className={`flex items-center justify-end ${!connect && "hidden"} h-14 `}
        >
            <button
                className={`flex items-center ${!connect && "hidden"} h-full group `}
            >
                <span className='hidden group-hover:block p-2'>Chat</span>
                <Image
                    width="24"
                    height="24"
                    src={connect && "https://img.icons8.com/pulsar-line/48/weixing.png"}
                    alt="Chat"
                    className="h-10 w-10 p-2 dark:invert"
                />
            </button>
            <button
                className={`flex items-center ${!connect && "hidden"} h-full group px-2`}
                onClick={dashboardOrNot}
            >
                <span className='hidden group-hover:block p-2'>{dashboard ? "Return to Homepage" : "Dashboard"}</span>
                <Image
                    width="24"
                    height="24"
                    src={!dashboard ? "https://img.icons8.com/pulsar-line/48/statistics.png" : 'https://img.icons8.com/pastel-glyph/24/user-male-circle.png'}
                    alt={dashboard ? "Return to Homepage" : "Dashboard"}
                    className="h-10 w-10 p-2 dark:invert"
                />
            </button>
        </div>
    );
}

export default NavIn;