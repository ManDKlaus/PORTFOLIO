import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"; 

function TechTreeChart({ data, dark }) {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    var container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
      })
    );

    var series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        initialDepth: 0,
        topDepth: 1,
        maxRadius: 20,
        minRadius: 25,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        idField: "name",
        linkWithStrength: 0.3,
        linkWithField: "linkWith",
        manyBodyStrength: -20,
        nodePadding: 25,
        centerStrength: 0.5,
      })
    );

    series.circles.template.adapters.add("visible", function (visible, target) {
      return false;
    });

    series.labels.template.setAll({
      y: -16,
      oversizedBehavior: "none",
      fontSize: 10,
      fontFamily: "Arial, sans-serif",
    });

    !dark ? series.labels.template.setAll({ 
      fill: am5.color(0x000000),
    }) : null;

    series.nodes.template.set("tooltipText", "");

    /* series.labels.template.adapters.add("visible", function (visible, target) {
      const hasImage = !!target.dataItem.dataContext.image;
      return !hasImage;
    }); */

    series.labels.template.adapters.add("y", function (y, target) {
      const hasImage = !!target.dataItem.dataContext.image;    
      return hasImage ? y : 0;
    });

    series.nodes.template.setup = function (target) {
      target.events.on("dataitemchanged", function (ev) {
        var icon = target.children.push(am5.Picture.new(root, {
          width: 30,
          centerX: am5.percent(50),
          centerY: am5.percent(50),
          y: 6,
          src: ev.target.dataItem.dataContext.image,
        }));
      });
    }

    series.data.setAll([{
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
    }]);

    series.set("selectedDataItem", series.dataItems[0]);

    // Make stuff animate on load
    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [data]); // Add data to the dependency array

  return (
    <div id="chartdiv" className='absolute top-0 left-0 w-full h-full z-0' />
  );
}

export default TechTreeChart;
