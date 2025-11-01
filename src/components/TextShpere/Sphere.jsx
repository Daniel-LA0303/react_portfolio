import React from "react";
import allIcons from "simple-icons";
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";
const Sphere = () => {
  const tagCanvasOptions = {
    imageScale: 2,
    initial: [0.1, -0.1],
    reverse: true,
    tooltip: "native", // null | 'div'
    tooltipDelay: 0,
    wheelZoom: true
  };
  const iconSlugs = [
    "java", "spring", "react", "html5", "nodedotjs", "express", "amazonaws", "postgresql", "docker", "git", "github", "visualstudiocode",
    "mysql", "mongodb", "linux", "typescript", "javascript", "css3", "kubernetes", "junit5"
  ];
  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug)
  }));
  return (
    <div className="w-full bg-black-card">
      <div className="w-full px-5 sm:w-5/6 md:w-10/12 mt-20 m-auto index-bg">
        <p className='text-color text-3xl sm:text-5xl text-center py-10'>Skills</p>
        <div className="container-sphere m-sphere-auto">
          <IconCloud
            key={v4()}
            id={"icon"}
            minContrastRatio={1}
            iconSize={40}
            backgroundHexColor={"#fff"}
            fallbackHexColor={"#000"}
            tags={iconTags}
            tagCanvasOptions={tagCanvasOptions}
          />
        </div>
      </div>
    </div>
  )
}
export default Sphere;