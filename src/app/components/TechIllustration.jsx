import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5wc from "@amcharts/amcharts5/wc";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function TechIllustration({ dark, data }) {
    useLayoutEffect(() => {
        let root = am5.Root.new("chartdiv");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Add series
        // https://www.amcharts.com/docs/v5/charts/word-cloud/
        var series = root.container.children.push(am5wc.WordCloud.new(root, {
            categoryField: "tag",
            valueField: "weight",
            maxFontSize: am5.percent(10),
            colors: am5.ColorSet.new(root, {
              colors: [
                am5.color(0x095256),
                am5.color(0x087f8c),
                am5.color(0x5aaa95),
                am5.color(0x86a873),
                am5.color(0xbb9f06)
              ]
            })
        }));

        // Configure labels
        series.labels.template.setAll({
            fontFamily: "Courier New",/* 
            fill: am5.color(0x808080) */
        });

        setInterval(function () {
            am5.array.each(series.dataItems, function (dataItem) {
                var value = Math.random() * 65;
                value = value - Math.random() * value;
                dataItem.set("value", value);
                dataItem.set("valueWorking", value);
            })
        }, 5000)

        // Data from:
        // https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages
        series.data.setAll([
            { tag: "JavaScript", weight: 64.96 },
            { tag: "HTML/CSS", weight: 56.07 },
            { tag: "SQL", weight: 47.08 },
            { tag: "Node.js", weight: 33.91 },
            { tag: "TypeScript", weight: 30.19 },
            { tag: "Bash/Shell", weight: 27.13 },
            { tag: "PowerShell", weight: 10.75 },
            { tag: "SVG", weight: 9.55 },
            { tag: "JSX", weight: 8.32 },
            { tag: "TailwindCSS", weight: 7.03 },
            { tag: "Next.js", weight: 6.75 },
            { tag: "React", weight: 6.02 },
            { tag: "Redux", weight: 5.61 },
            { tag: "Next Auth", weight: 5.1 },
            { tag: "Illustrator", weight: 5.07 },
            { tag: "InDesign", weight: 4.66 },
            { tag: "Photoshop", weight: 4.66 },
            { tag: "Clip Studio", weight: 3.01 },
            { tag: "Blender", weight: 2.8 },
            { tag: "NodeJS", weight: 2.6 },
            { tag: "PostgreSQL", weight: 2.46 },
            { tag: "Cloudinary", weight: 2.12 },
            { tag: "Multer", weight: 2.1 },
        ]);
  
      return () => {
        root.dispose();
    };
}, [data]); // Add data to the dependency array

return (
    <div id="chartdiv" className='absolute left-0 w-full h-full z-0'></div>
);
  }

export default TechIllustration