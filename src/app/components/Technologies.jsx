import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'
import GrafVirus from "../../../public/img/GrafVirus.png"
import GrafVirusW from "../../../public/img/GrafVirusW.png"
import GrafIllustration from "../../../public/img/GrafIllustration.png"
import GrafIllustrationW from "../../../public/img/GrafIllustrationW.png"
import Icons from "../../../public/img/Icons.png"
import IconsW from "../../../public/img/IconsW.png"
import TechList from './TechList';
import dynamic from 'next/dynamic';
const ChartComponent = dynamic(() => import('../components/TechTreeChart'), { ssr: false });
const ChartComponent2 = dynamic(() => import('../components/TechIllustration'), { ssr: false });
import Titles from './Titles';

const Technologies = ({ dark }) => {
  // Define los datos del gráfico
  const technologyData = {
    name: "Root",
    value: 0,
    children: [
      {
        name: "FRONT-END",
        value: 1,
        showTooltip: false,
        children: [
          {
            name: "HTML",
            value: 2,
            image: "https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png",
          },
          {
            name: "CSS",
            value: 2,
            image: "https://cdn.iconscout.com/icon/free/png-256/css-alt-3628710-3029935.png",
            children: [
              {
                name: "TailwindCSS",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
                value: 3
              },
            ],
          },
          {
            name: "JavaScript",
            value: 2,
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            children: [
              {
                name: "React",
                image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                value: 3,
                children: [
                  {
                    name: "Next.js",
                    image: "https://i.postimg.cc/h40tbYqT/NextJS.png",
                    value: 4,
                    linkWith: ["TailwindCSS"],
                    children: [
                      {
                        name: "Next-Auth",
                        image: "https://next-auth.js.org/img/logo/logo-xs.png",
                        value: 5
                      },
                    ]
                  },
                  {
                    name: "Redux",
                    image: "https://img.icons8.com/color/48/redux.png",
                    value: 4
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "BACK-END",
        value: 1,
        showTooltip: false,
        children: [
          {
            name: "NodeJS",
            value: 2,
            image: "https://img.icons8.com/fluency/48/node-js.png",
            children: [
              {
                name: "Express",
                image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Status_iucn_EX_icon.svg",
                value: 3
              },
              {
                name: "Passport",
                image: "https://images.ctfassets.net/vwq10xzbe6iz/tnwT7PN9aBmT7vgkTtGhV/940f001eb249a42904cd40e64d13c7e9/passportJS-300x300.png?h=250",
                value: 3
              },
              {
                name: "JSON Web Tokens",
                image: "https://img.icons8.com/color/48/java-web-token.png",
                value: 3
              },
            ],
          },
          {
            name: "PostgreSQL",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
            value: 2
          },
          {
            name: "Cloudinary",
            image: "https://i.postimg.cc/mZV8fbsD/cloudinary.png",
            value: 2
          },
          {
            name: "Multer",
            value: 2
          },
        ],
      },
      {
        name: "OTHERS",
        value: 1,
        showTooltip: false,
        children: [
          {
            name: "Illustrator",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png",
            value: 2
          },
          {
            name: "InDesign",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
            value: 2
          },
          {
            name: "Photoshop",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
            value: 2
          },
          {
            name: "Clip Studio Paint",
            image: "https://upload.wikimedia.org/wikipedia/en/6/66/Clip_Studio_Paint_app_logo.png",
            value: 2
          },
          {
            name: "Blender",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png",
            value: 2
          },
        ],
      },
    ],
  };

  const [selectedChart, setSelectedChart] = useState("techList");

  const handleShowVirus = () => {
    setSelectedChart("virus");
  };

  const handleShowIllustration = () => {
    setSelectedChart("illustration");
  };

  const handleShowTechList = () => {
    setSelectedChart("techList");
  };

  return (
    <section id='Technologies' className={`relative 
    
    h-[50svh] md:h-[100svh] lg:min-h-full w-full 
    
    flex flex-col items-center gap-4 
    
    snap-start snap-always z-20`} >
      
      <Titles title="Technologies" />
      <ul className='absolute top-0 right-4 h-full w-auto flex flex-col gap-4 justify-center z-30'>
        <li>
          <Image
            width="20"
            height="20"
            src={dark ? IconsW : Icons}
            alt="Grafic List"
            className={`w-10 p-1 
            
            cursor-pointer border-double border-2 dark:border-white border-slate-900 rounded-full relative ${selectedChart === "techList" && "outline outline-offset-2 outline-1 outline-yellow-300 "}`}
            onClick={handleShowTechList}
          />
        </li>
        <li>
          <Image
            width="20"
            height="20"
            src={dark ? GrafVirusW : GrafVirus}
            alt="Grafic Virus"
            className={`w-10 p-1 
            
            cursor-pointer border-2 dark:border-white border-slate-900 rounded-full relative ${selectedChart === "virus" && "outline outline-offset-2 outline-1 outline-yellow-300 "}`}
            onClick={handleShowVirus}
          />
        </li>
        <li>
          <Image
            width="20"
            height="20"
            src={dark ? GrafIllustrationW : GrafIllustration}
            alt="Grafic Illustration"
            className={`w-10 p-1
            
            cursor-pointer border-double border-2 dark:border-white border-slate-900 rounded-full relative ${selectedChart === "illustration" && "outline outline-offset-2 outline-1 outline-yellow-300 "}`}
            onClick={handleShowIllustration}
          />
        </li>
      </ul>
      {
        selectedChart === "virus" ? (
          <ChartComponent data={technologyData} dark={dark} />
        ) : selectedChart === "illustration" ? (
          <ChartComponent2 />
        ) : selectedChart === "techList" && <TechList dark={dark} />
      }
    </section>
  );
};

export default Technologies;

