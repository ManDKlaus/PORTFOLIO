// reducer.js
import { CHANGE_MODE, CHANGE_CONNECTION, CHANGE_DASHBOARD, SHOW_LANDING } from './actions';
import Banner from "../../../public/img/NDM-Portfolio.png"

const initialState = {
    lightMode: false,
    connect: false,
    dashboard: false,
    showLanding: true,
    imageObject: {
        HTML: "https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png",
        CSS: "https://cdn.iconscout.com/icon/free/png-256/css-alt-3628710-3029935.png",
        TailwindCSS: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
        JavaScript: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        React: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "Next.js": "https://i.postimg.cc/h40tbYqT/NextJS.png",
        "Next-Auth": "https://next-auth.js.org/img/logo/logo-xs.png",
        Redux: "https://img.icons8.com/color/48/redux.png",
        "NodeJS": "https://img.icons8.com/fluency/48/node-js.png",
        Express: "https://upload.wikimedia.org/wikipedia/commons/8/88/Status_iucn_EX_icon.svg",
        Passport: "https://images.ctfassets.net/vwq10xzbe6iz/tnwT7PN9aBmT7vgkTtGhV/940f001eb249a42904cd40e64d13c7e9/passportJS-300x300.png?h=250",
        "JSON Web Tokens": "https://img.icons8.com/color/48/java-web-token.png",
        PostgreSQL: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        Cloudinary: "https://i.postimg.cc/mZV8fbsD/cloudinary.png",
        Multer: "",
        Illustrator: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png",
        InDesign: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
        Photoshop: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
        "Clip Studio Paint": "https://upload.wikimedia.org/wikipedia/en/6/66/Clip_Studio_Paint_app_logo.png",
        Blender: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png",
    },
    projects: [
        {
            id: 1,
            title: 'Portfolio',
            description: 'This website showcases my work as a Full Stack Developer, highlighting projects that reflect my passion for creating user-friendly web applications with cutting-edge technologies.',
            technologies: ['Next.js', 'Tailwind CSS', 'Express'],
            imageUrl: Banner,
            liveDemoLink: 'https://portfolio-git-master-mandklaus.vercel.app',
            sourceCodeLink: 'https://github.com/ManDKlaus/PORTFOLIO',
            likes: 10,
            comments: [
                {
                    user: "nik",
                    comment: "kjsdbhfkjdbngjabdhfkjbdfgkjh"
                },
                {
                    user: "klaus",
                    comment: "dsfkjghdkfujghdfhnglkjdfngukdfukgh sdjkghfuksdhgghudsfg"
                },
                {
                    user: "nico",
                    comment: "sdhkjbgdhkjfgbyi dfbujvfdbkvxcnluk hdwfej rtofluerhlkfmneru ujbnwe hbcybsdcbsfbi iu bnei ubne iub kjbne"
                },
            ]
        },
        {
            id: 2,
            title: 'E-commerce',
            description: '1337 Hardware is your ultimate destination for all things gaming. Discover a wide range of high-performance computer products tailored to gamers. From top-of-the-line graphics cards to ergonomic gaming peripherals, we´ve got you covered.',
            technologies: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
            imageUrl: Banner,
            liveDemoLink: 'enlace del demo 2',
            sourceCodeLink: 'enlace del código fuente 2',
            likes: 27,
            comments: [
                {
                    user: "nik",
                    comment: "kjsdbhfkjdbngjabdhfkjbdfgkjh"
                },
                {
                    user: "klaus",
                    comment: "dsfkjghdkfujghdfhnglkjdfngukdfukgh sdjkghfuksdhgghudsfg"
                },
                {
                    user: "nico",
                    comment: "sdhkjbgdhkjfgbyi dfbujvfdbkvxcnluk hdwfej rtofluerhlkfmneru ujbnwe hbcybsdcbsfbi iu bnei ubne iub kjbne"
                },
            ]
        },
        {
            id: 3,
            title: 'API Insights',
            description: '1337 Hardware is your ultimate destination for all things gaming. Discover a wide range of high-performance computer products tailored to gamers. From top-of-the-line graphics cards to ergonomic gaming peripherals, we´ve got you covered.',
            technologies: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
            imageUrl: Banner,
            liveDemoLink: 'enlace del demo 2',
            sourceCodeLink: 'enlace del código fuente 2',
            likes: 6,
            comments: [
                {
                    user: "nik",
                    comment: "kjsdbhfkjdbngjabdhfkjbdfgkjh"
                },
                {
                    user: "klaus",
                    comment: "dsfkjghdkfujghdfhnglkjdfngukdfukgh sdjkghfuksdhgghudsfg"
                },
                {
                    user: "nico",
                    comment: "sdhkjbgdhkjfgbyi dfbujvfdbkvxcnluk hdwfej rtofluerhlkfmneru ujbnwe hbcybsdcbsfbi iu bnei ubne iub kjbne"
                },
            ]
        },
        {
            id: 4,
            title: 'Game',
            description: '1337 Hardware is your ultimate destination for all things gaming. Discover a wide range of high-performance computer products tailored to gamers. From top-of-the-line graphics cards to ergonomic gaming peripherals, we´ve got you covered.',
            technologies: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
            imageUrl: Banner,
            liveDemoLink: 'enlace del demo 2',
            sourceCodeLink: 'enlace del código fuente 2',
            likes: 45,
            comments: [
                {
                    user: "nik",
                    comment: "kjsdbhfkjdbngjabdhfkjbdfgkjh"
                },
                {
                    user: "klaus",
                    comment: "dsfkjghdkfujghdfhnglkjdfngukdfukgh sdjkghfuksdhgghudsfg"
                },
                {
                    user: "nico",
                    comment: "sdhkjbgdhkjfgbyi dfbujvfdbkvxcnluk hdwfej rtofluerhlkfmneru ujbnwe hbcybsdcbsfbi iu bnei ubne iub kjbne"
                },
            ]
        },
        {
            id: 5,
            title: 'Red Social',
            description: '1337 Hardware is your ultimate destination for all things gaming. Discover a wide range of high-performance computer products tailored to gamers. From top-of-the-line graphics cards to ergonomic gaming peripherals, we´ve got you covered.',
            technologies: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
            imageUrl: Banner,
            liveDemoLink: 'enlace del demo 2',
            sourceCodeLink: 'enlace del código fuente 2',
            likes: 21,
            comments: [
                {
                    user: "nik",
                    comment: "kjsdbhfkjdbngjabdhfkjbdfgkjh"
                },
                {
                    user: "klaus",
                    comment: "dsfkjghdkfujghdfhnglkjdfngukdfukgh sdjkghfuksdhgghudsfg"
                },
                {
                    user: "nico",
                    comment: "sdhkjbgdhkjfgbyi dfbujvfdbkvxcnluk hdwfej rtofluerhlkfmneru ujbnwe hbcybsdcbsfbi iu bnei ubne iub kjbne"
                },
            ]
        },
    ],
    navLanding: [
        {
            id: 'GitHub',
            text: 'GitHub',
            linkSrc: "https://github.com/ManDKlaus",
            iconSrc: "https://img.icons8.com/pulsar-line/48/github.png",
        },
        {
            id: 'LinkedIn',
            text: 'LinkedIn',
            linkSrc: "https://www.linkedin.com/in/nicol%C3%A1sdanielmansilla/",
            iconSrc: "https://img.icons8.com/pulsar-line/48/linkedin.png",
        },
        {
            id: 'Gmail',
            text: 'Gmail',
            linkSrc: "mailto:mansilland@gmail.com",
            iconSrc: "https://img.icons8.com/pulsar-line/48/gmail-new.png",
        },
        {
            id: 'WhatsApp',
            text: 'WhatsApp',
            linkSrc: "https://wa.me/qr/2X77DSSQIW2EO1",
            iconSrc: "https://img.icons8.com/pulsar-line/48/whatsapp.png",
        },
    ],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MODE:
            return { ...state, lightMode: action.payload };
        case CHANGE_CONNECTION:
            return { ...state, connect: !state.connect };
        case CHANGE_DASHBOARD:
            return { ...state, dashboard: !state.dashboard };
        case SHOW_LANDING:
            return { ...state, showLanding: !state.showLanding };
        default:
            return state;
    }
};

export default rootReducer;