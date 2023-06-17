import React from "react";

export default function Loading() {
  return (
    <svg
      style={{
        margin: "auto",
        background: "rgb(255, 255, 255)",
        display: "block",
        shapeRendering: "auto",
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="84" cy="50" r="10" fill="#ffdd52">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.9615384615384615s"
          calcMode="spline"
          keyTimes="0;1"
          values="10;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="3.846153846153846s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values="#ffdd52;#ffe8a2;#ffd061;#fff979;#ffdd52"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#ffdd52">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="3.846153846153846s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="3.846153846153846s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10" fill="#fff979">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="3.846153846153846s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.9615384615384615s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="3.846153846153846s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.9615384615384615s"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10" fill="#ffd061">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="3.846153846153846s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.923076923076923s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="3.846153846153846s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.923076923076923s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#ffe8a2">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="3.846153846153846s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-2.8846153846153846s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="3.846153846153846s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-2.8846153846153846s"
        ></animate>
      </circle>
    </svg>
  );
}
