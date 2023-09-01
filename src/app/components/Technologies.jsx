import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import GrafVirus from "../../../public/img/GrafVirus.png"
import GrafVirusW from "../../../public/img/GrafVirusW.png"
import GrafIllustration from "../../../public/img/GrafIllustration.png"
import GrafIllustrationW from "../../../public/img/GrafIllustrationW.png"
import dynamic from 'next/dynamic';
const ChartComponent = dynamic(() => import('../components/TechTreeChart'), { ssr: false });
const ChartComponent2 = dynamic(() => import('../components/TechIllustration'), { ssr: false });

const Technologies = ({ dark }) => {
  // Define los datos del gráfico
  const technologyData = {
    name: "Root",
    value: 0,
    children: [
      {
        name: "Frontend",
        children: [
          {
            name: "HTML",
            children: [
              { name: "JSX", value: 1 },
              { name: "SVG", value: 1 },
            ],
          },
          {
            name: "CSS",
            children: [
              { name: "TailwindCSS", value: 1 },
              { name: "Next.js", value: 1, linkWith: ["React", "TailwindCSS"] },
            ],
          },
          {
            name: "JS",
            children: [
              {
                name: "React",
                children: [
                  { name: "Next.js", value: 1 },
                  { name: "Redux", value: 1 },
                  { name: "Nextauth", value: 1 },
                ],
                linkWith: ["Next.js"],
              },
            ],
          },
          { name: "Illustrator", value: 1 },
          { name: "InDesign", value: 1 },
          { name: "Photoshop", value: 1 },
          { name: "Clip Studio", value: 1 },
          { name: "Blender", value: 1 },
        ],
      },
      {
        name: "Backend",
        children: [
          {
            name: "NodeJS",
            children: [
              { name: "Express", value: 1 },
              { name: "Passport", value: 1 },
            ],
          },
          {
            name: "Databases",
            children: [
              { name: "PostgreSQL", value: 1 },
            ],
          },
          {
            name: "Image Hosting",
            children: [
              { name: "Cloudinary", value: 1 },
            ],
          },
          {
            name: "File Upload",
            children: [
              { name: "Multer", value: 1 },
            ],
          },
        ],
      },
    ],
  };

  const [showGrafVirus, setShowGrafVirus] = useState(true);
  const [showGrafIllustration, setShowGrafIllustration] = useState(true);

  const handleShowVirus = () => {
    setShowGrafVirus(true);
    setShowGrafIllustration(false);
  };

  const handleShowIllustration = () => {
    setShowGrafVirus(false);
    setShowGrafIllustration(true);
  };

  console.log("showGrafVirus", showGrafVirus)

  return (
    <section id='Technologies' className='relative min-h-screen w-full flex flex-col justify-center items-center gap-4 snap-start snap-always' >
      <div className='min-h-screen w-full pl-[calc(12%)] pr-[calc(10%)] mt-56'>
        <div className='flex gap-14'>
          <h1 className="text-3xl font-semibold z-10">Technologies</h1>
          <div className='h-full w-full flex items-center mt-1 gap-5 z-50'>
              <Image
                width="20"
                height="20"
                src={dark ? GrafVirusW : GrafVirus}
                alt="Grafic Virus"
                className={`w-8 h-8 p-1 border-2 dark:border-white border-slate-900 rounded-full relative ${showGrafVirus && "outline outline-offset-2 outline-1 outline-yellow-300"}`}
                onClick={handleShowVirus}
              />
              <Image
                width="20"
                height="20"
                src={dark ? GrafIllustrationW : GrafIllustration}
                alt="Grafic Illustration"
                className={`w-8 h-8 p-1 border-double border-2 dark:border-white border-slate-900 rounded-full relative ${showGrafIllustration && "outline outline-offset-2 outline-1 outline-yellow-300 shadow-md  shadow-yellow-300"}`}
                onClick={handleShowIllustration} />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-14 h-10 dark:bg-slate-950 z-40' />
      {showGrafVirus ? <ChartComponent data={technologyData} /> : <ChartComponent2 data={technologyData} />}
    </section>
  );
};

export default Technologies;

