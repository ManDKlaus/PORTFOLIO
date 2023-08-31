import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function TechTreeChart({ data }) {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create wrapper container
    var container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    var series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        topDepth: 1,
        maxRadius: 25,
        minRadius: 12,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        idField: "name",
        linkWithStrength: 0.3,
        linkWithField: "linkWith",
        manyBodyStrength: -15,
        centerStrength: 0.5
      })
    );

    series.get("colors").set("step", 2);

    series.data.setAll([data]);
    series.set("selectedDataItem", series.dataItems[0]);

    // Make stuff animate on load
    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [data]); // Add data to the dependency array

  return (
    <div id="chartdiv" className='absolute left-0 w-full h-full'></div>
  );
}

export default TechTreeChart;
