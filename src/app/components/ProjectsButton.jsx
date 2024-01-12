import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

function ProjectsButton() {
    const [like, setLike] = useState(false);
    const [activeComment, setActiveComment] = useState(false);
    const [comment, setComment] = useState(false);
    const [text, setText] = useState("");
    const formRef = useRef(null);
    const containerRef = useRef(null);

    const liked = () => {
        setLike(!like);
    }

    const activeCommented = () => {
        setActiveComment(!activeComment);
    }

    const commented = () => {
        setComment(!comment);

        console.log("Valor de comment:", comment);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                formRef.current &&
                !formRef.current.contains(event.target) &&
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setActiveComment(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className='absolute -bottom-20 md:-bottom-32 lg:-bottom-40 left-[20%] lg:left-28 w-auto h-full bg-neutral flex gap-2 z-50 drop-shadow-4xl dark:drop-shadow-none'
        >
            <Image
                height={25}
                width={25}
                src={like ? "https://img.icons8.com/emoji/48/red-heart.png" : "https://img.icons8.com/pulsar-line/48/like.png"}
                className={`h-10 w-14 p-4 pb-0 ${like ? "" : "dark:invert"}`}
                onClick={liked}
            />
            <div
                disabled={activeComment}
                onClick={activeCommented}
                className={`h-10 w-14 ${activeComment && "shadow-md rounded-t-lg bg-white dark:bg-slate-600/95 "}`}
            >
                <Image
                    height={25}
                    width={25}
                    src={comment ? "https://img.icons8.com/3d-fluency/94/chat-message.png" : "https://img.icons8.com/pulsar-line/48/comments.png"}
                    className={`h-10 w-14 p-4 pb-0 ${comment ? "transform -scale-x-100" : `dark:invert`} `}
                />
            </div>
            {
                activeComment &&
                <form
                    ref={formRef}
                    onSubmit={commented}
                    className='absolute top-10 left-16 z-50 flex flex-col items-center gap-2 bg-white dark:bg-slate-600/95 text-white p-4 rounded-r-lg rounded-b-lg' >
                    <textarea
                        className={`w-full py-1 px-2 rounded-lg placeholder:text-gray-400 placeholder:opacity-60
          
                        bg-gradient-to-br
          
                        dark:from-gray-200 dark:via-gray-300 dark:to-gray-400 from-slate-500 to-slate-950

                        border border-gray-500 dark:border-gray-600
          
                        shadow-inner shadow-slate-700 dark:shadow-slate-500`}
                        onChange={(e) => setText(e.target.value)}
                        name='Comment'
                        placeholder='Comment'
                        rows='5'
                        required
                    />
                    <button
                        type='submit'
                        disabled={text === ""}
                        className='w-full bg-yellow-500 rounded'
                    >
                        Send Comment
                    </button>
                    <button
                        className='w-full bg-gray-300 dark:bg-gray-500 text-slate-950 dark:text-white rounded'
                        onClick={() => activeCommented()}
                    >
                        Cancel
                    </button>
                </form>
            }
        </div>
    )
}

export default ProjectsButton;
