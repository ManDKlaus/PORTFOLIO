import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
const ChartComponent = dynamic(() => import('../components/TechTreeChart'), { ssr: false });

/* name: 'React',
children: [
  { name: 'Next.js' },
  { name: 'Redux' },
  { name: 'TailwindCSS' },
  { name: 'NodeJS' },
  { name: 'Express' },
  { name: 'PostgreSQL' },
  { name: 'Passport' },
  { name: 'Cloudinary' },
  { name: 'Multer' },
], */

const Technologies = () => {
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

  // Lógica adicional o funciones aquí si es necesario

  return (
    <section id='Technologies' className='relative min-h-screen w-full flex flex-col justify-center items-center gap-4 snap-start snap-always' >
      <div className='min-h-screen w-full pl-[calc(12%)] pr-[calc(10%)] mt-56'>
        <h1>Technologies</h1>
      </div>
      <div className='absolute bottom-0 left-0 w-14 h-14 bg-slate-950 z-10' />
      <ChartComponent data={technologyData} />
    </section>
  );
};

export default Technologies;

