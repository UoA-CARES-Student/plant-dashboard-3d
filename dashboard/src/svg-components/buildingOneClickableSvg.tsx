import { useState } from 'react';
import farms, { Plot } from '../data';
import { isMouseShortDistance } from '../utils/mousePosition';

interface BuildingOneClickableSvgProps {
  onClickPlot: (id: number) => void;
  height?: number | string;
  width?: number | string;
}

export default function BuildingOneClickableSvg(props: BuildingOneClickableSvgProps) {
  const { onClickPlot, height, width } = props;

  const [hoveredPlot, setHoveredPlot] = useState<Plot | undefined>();
  const [mouseXY, setMouseXY] = useState<[number, number] | null>(null);

  const building = farms[0].buildings[0];

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width={width}
      height={height}
      version='1.1'
      viewBox='0 0 1080.814 1082.531'
    >
      <defs>
        <pattern
          id='pattern2422'
          patternTransform='translate(100.575 51.705)'
          xlinkHref='#pattern7919'
        ></pattern>
        <pattern
          id='pattern2418'
          patternTransform='translate(291.633 169.337)'
          xlinkHref='#pattern7919'
        ></pattern>
        <pattern
          id='pattern2413'
          patternTransform='translate(463.6 442.438)'
          xlinkHref='#pattern7919'
        ></pattern>
        <pattern
          id='pattern2409'
          patternTransform='translate(100.708 75.807)'
          xlinkHref='#pattern7919'
        ></pattern>
        <pattern
          id='pattern2397'
          patternTransform='translate(158.502 389.366)'
          xlinkHref='#pattern7919'
        ></pattern>
        <pattern
          id='pattern2349'
          patternTransform='translate(119.755 91.182)'
          xlinkHref='#pattern7919'
        ></pattern>
        <pattern
          id='pattern2304'
          patternTransform='translate(39.421 172.192)'
          xlinkHref='#pattern7919'
        ></pattern>
        <pattern
          id='pattern2195'
          patternTransform='translate(-83.321 284.91)'
          xlinkHref='#pattern7919'
        ></pattern>
        <pattern
          id='pattern7919'
          width='824.962'
          height='822.962'
          patternTransform='translate(39.455 34.242)'
          patternUnits='userSpaceOnUse'
        >
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M7.11 4.175l691.964 811.057'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M47.101 4.814l694.561 813.84'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M86.144 4.635L778.8 817.527'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M817.97 818.12L125.378 5.607'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M161.772 3.293l656.854 772.586'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M199.306 2.25L819.67 730.003'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M239.969 3.293l579.7 682.92'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M277.503 4.335L819.67 640.337'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M315.038 2.25l505.674 592.212'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M354.658 4.335l466.054 544.251'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M393.235 4.335l427.477 498.376'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M431.727 3.293l390.985 456.67'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M470.39 3.293l349.279 407.666'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M510.009 3.293l310.703 365.961'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M547.543 5.378l272.126 318'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M586.12 4.335l233.549 274.21'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M625.74 4.335L819.67 232.67'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M663.275 3.293l155.351 182.46'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M702.895 3.293l117.817 138.669'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M742.515 4.335l77.154 92.794'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M780.05 2.25l40.662 51.089'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M6.42 46.04l657.898 772.586'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 90.873L625.74 818.626'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 136.749l583.87 681.877'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M2.25 178.454l547.379 642.258'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 226.415L507.924 816.54'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M3.293 270.205l465.01 545.293'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M2.25 316.08l428.52 501.504'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 360.913l389.942 457.713'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M3.293 407.832l351.365 410.794'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 452.665l313.83 367.004'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M2.25 496.455l275.253 322.171'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M5.378 544.416l233.548 273.168'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 587.163L200.35 818.626'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M5.378 636.167l155.351 181.417'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 678.914l117.817 139.712'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M3.293 723.747l81.324 94.88'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M5.378 769.623l41.705 50.046'
            opacity='0.694'
          ></path>
        </pattern>
        <pattern
          width='824.962'
          height='822.962'
          patternTransform='translate(39.455 34.242)'
          patternUnits='userSpaceOnUse'
        >
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M7.11 4.175l691.964 811.057'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M47.101 4.814l694.561 813.84'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M86.144 4.635L778.8 817.527'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M817.97 818.12L125.378 5.607'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M161.772 3.293l656.854 772.586'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M199.306 2.25L819.67 730.003'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M239.969 3.293l579.7 682.92'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M277.503 4.335L819.67 640.337'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M315.038 2.25l505.674 592.212'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M354.658 4.335l466.054 544.251'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M393.235 4.335l427.477 498.376'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M431.727 3.293l390.985 456.67'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M470.39 3.293l349.279 407.666'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M510.009 3.293l310.703 365.961'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M547.543 5.378l272.126 318'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M586.12 4.335l233.549 274.21'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M625.74 4.335L819.67 232.67'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M663.275 3.293l155.351 182.46'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M702.895 3.293l117.817 138.669'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M742.515 4.335l77.154 92.794'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M780.05 2.25l40.662 51.089'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M6.42 46.04l657.898 772.586'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 90.873L625.74 818.626'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 136.749l583.87 681.877'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M2.25 178.454l547.379 642.258'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 226.415L507.924 816.54'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M3.293 270.205l465.01 545.293'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M2.25 316.08l428.52 501.504'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 360.913l389.942 457.713'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M3.293 407.832l351.365 410.794'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 452.665l313.83 367.004'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M2.25 496.455l275.253 322.171'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M5.378 544.416l233.548 273.168'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 587.163L200.35 818.626'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M5.378 636.167l155.351 181.417'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 678.914l117.817 139.712'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M3.293 723.747l81.324 94.88'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M5.378 769.623l41.705 50.046'
            opacity='0.694'
          ></path>
        </pattern>
        <pattern
          width='824.962'
          height='822.962'
          patternTransform='translate(39.455 34.242)'
          patternUnits='userSpaceOnUse'
        >
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M7.11 4.175l691.964 811.057'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M47.101 4.814l694.561 813.84'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M86.144 4.635L778.8 817.527'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M817.97 818.12L125.378 5.607'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M161.772 3.293l656.854 772.586'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M199.306 2.25L819.67 730.003'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M239.969 3.293l579.7 682.92'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M277.503 4.335L819.67 640.337'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M315.038 2.25l505.674 592.212'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M354.658 4.335l466.054 544.251'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M393.235 4.335l427.477 498.376'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M431.727 3.293l390.985 456.67'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M470.39 3.293l349.279 407.666'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M510.009 3.293l310.703 365.961'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M547.543 5.378l272.126 318'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M586.12 4.335l233.549 274.21'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M625.74 4.335L819.67 232.67'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M663.275 3.293l155.351 182.46'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M702.895 3.293l117.817 138.669'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M742.515 4.335l77.154 92.794'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M780.05 2.25l40.662 51.089'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M6.42 46.04l657.898 772.586'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 90.873L625.74 818.626'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 136.749l583.87 681.877'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M2.25 178.454l547.379 642.258'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 226.415L507.924 816.54'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M3.293 270.205l465.01 545.293'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M2.25 316.08l428.52 501.504'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 360.913l389.942 457.713'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M3.293 407.832l351.365 410.794'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 452.665l313.83 367.004'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M2.25 496.455l275.253 322.171'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M5.378 544.416l233.548 273.168'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 587.163L200.35 818.626'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M5.378 636.167l155.351 181.417'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 678.914l117.817 139.712'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M3.293 723.747l81.324 94.88'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M5.378 769.623l41.705 50.046'
            opacity='0.694'
          ></path>
        </pattern>
        <pattern
          width='824.962'
          height='822.962'
          patternTransform='translate(39.455 34.242)'
          patternUnits='userSpaceOnUse'
        >
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M7.11 4.175l691.964 811.057'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M47.101 4.814l694.561 813.84'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M86.144 4.635L778.8 817.527'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M817.97 818.12L125.378 5.607'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M161.772 3.293l656.854 772.586'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M199.306 2.25L819.67 730.003'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M239.969 3.293l579.7 682.92'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M277.503 4.335L819.67 640.337'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M315.038 2.25l505.674 592.212'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M354.658 4.335l466.054 544.251'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M393.235 4.335l427.477 498.376'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M431.727 3.293l390.985 456.67'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M470.39 3.293l349.279 407.666'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M510.009 3.293l310.703 365.961'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M547.543 5.378l272.126 318'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M586.12 4.335l233.549 274.21'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M625.74 4.335L819.67 232.67'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M663.275 3.293l155.351 182.46'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M702.895 3.293l117.817 138.669'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M742.515 4.335l77.154 92.794'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M780.05 2.25l40.662 51.089'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M6.42 46.04l657.898 772.586'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 90.873L625.74 818.626'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 136.749l583.87 681.877'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M2.25 178.454l547.379 642.258'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 226.415L507.924 816.54'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M3.293 270.205l465.01 545.293'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M2.25 316.08l428.52 501.504'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 360.913l389.942 457.713'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M3.293 407.832l351.365 410.794'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 452.665l313.83 367.004'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M2.25 496.455l275.253 322.171'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M5.378 544.416l233.548 273.168'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 587.163L200.35 818.626'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M5.378 636.167l155.351 181.417'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M4.335 678.914l117.817 139.712'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M3.293 723.747l81.324 94.88'
            opacity='0.694'
          ></path>
          <path
            fillOpacity='1'
            stroke='#ff8c42'
            strokeDasharray='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeOpacity='1'
            strokeWidth='4.5'
            d='M5.378 769.623l41.705 50.046'
            opacity='0.694'
          ></path>
        </pattern>
      </defs>
      <g transform='translate(.52)'>
        <image
          width='1080'
          height='1080'
          x='0'
          y='0'
          preserveAspectRatio='none'
          xlinkHref='data:image/jpeg;base64,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 NaaTo6NJSTysE4t8Dg8dmmqhjbVhgg6eT//Z'
        ></image>
      </g>
      <g display='inline' transform='translate(.52)'>
        <path
          style={{ mixBlendMode: 'hard-light' }}
          fill='#d3ded9'
          fillOpacity='1'
          stroke='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeOpacity='0.455'
          strokeWidth='1.299'
          d='M0 0H1080V1080H0z'
          opacity='0.4'
        ></path>
      </g>
      {/* <g
        fillOpacity='1'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(.52)'
        onMouseDown={(e) => setMouseXY([e.clientX, e.clientY])}
        onMouseUp={(e) => {
          if (mouseXY && isMouseShortDistance(mouseXY[0], mouseXY[1], e.clientX, e.clientY)) {
            onClickPlot(building.plots[0].id);
            setMouseXY(null);
          } else {
            setMouseXY(null);
          }
        }}
        onMouseEnter={() => setHoveredPlot(building.plots[0])}
        onMouseLeave={() => setHoveredPlot(undefined)}
        style={{ cursor: 'pointer' }}
      >
        <path
          fill={hoveredPlot === building.plots[0] ? '#ff8c42' : 'url(#pattern2195)'}
          stroke='#ff8c42'
          strokeWidth='4.5'
          d='M277.134 1080.281l184.757-308.752-277.135-44.479L2.714 842.925l-.983 236.058z'
        ></path>
        <rect
          width='84.762'
          height='55'
          x='138.507'
          y='846.038'
          fill='#ff8c42'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='2.075'
          display='inline'
          opacity='0.694'
          ry='1.358'
        ></rect>
        <text
          xmlSpace='preserve'
          x='157.031'
          y='887.739'
          fill='#fff'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='1.546'
          display='inline'
          fontSize='38.933'
          opacity='1'
        >
          <tspan
            x='157.031'
            y='887.739'
            fill='#fff'
            fillOpacity='1'
            strokeWidth='1.546'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            A1
          </tspan>
        </text>
      </g>
      <g
        fillOpacity='1'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(.52)'
        onMouseDown={(e) => setMouseXY([e.clientX, e.clientY])}
        onMouseUp={(e) => {
          if (mouseXY && isMouseShortDistance(mouseXY[0], mouseXY[1], e.clientX, e.clientY)) {
            onClickPlot(building.plots[1].id);
            setMouseXY(null);
          } else {
            setMouseXY(null);
          }
        }}
        onMouseEnter={() => setHoveredPlot(building.plots[1])}
        onMouseLeave={() => setHoveredPlot(undefined)}
        style={{ cursor: 'pointer' }}
      >
        <path
          fill={hoveredPlot === building.plots[1] ? '#ff8c42' : 'url(#pattern2304)'}
          stroke='#ff8c42'
          strokeWidth='4.5'
          d='M186.104 724.32l276.971 45.434 79.51-143.292-175.62-26.212z'
        ></path>
        <rect
          width='84.762'
          height='55'
          x='362.927'
          y='646.545'
          fill='#ff8c42'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='2.075'
          display='inline'
          opacity='0.694'
          ry='1.358'
        ></rect>
        <text
          xmlSpace='preserve'
          x='380.642'
          y='688.492'
          fill='#fff'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='1.546'
          display='inline'
          fontSize='38.933'
        >
          <tspan
            x='380.642'
            y='688.492'
            fill='#fff'
            fillOpacity='1'
            strokeWidth='1.546'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            A2
          </tspan>
        </text>
      </g> */}
      <g
        fillOpacity='1'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(.52)'
        onMouseDown={(e) => setMouseXY([e.clientX, e.clientY])}
        onMouseUp={(e) => {
          if (mouseXY && isMouseShortDistance(mouseXY[0], mouseXY[1], e.clientX, e.clientY)) {
            onClickPlot(building.plots[2].id);
            setMouseXY(null);
          } else {
            setMouseXY(null);
          }
        }}
        onMouseEnter={() => setHoveredPlot(building.plots[2])}
        onMouseLeave={() => setHoveredPlot(undefined)}
        style={{ cursor: 'pointer' }}
      >
        <path
          fill={hoveredPlot === building.plots[2] ? '#ff8c42' : 'url(#pattern2349)'}
          stroke='#ff8c42'
          strokeWidth='4.5'
          d='M372.3 595.68l170.82 29.2 62.78-115.34-116.8-5.84z'
        ></path>
        <rect
          width='84.762'
          height='55'
          x='461.518'
          y='533.916'
          fill='#ff8c42'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='2.075'
          display='inline'
          opacity='0.694'
          ry='1.358'
        ></rect>
        <text
          xmlSpace='preserve'
          x='479.234'
          y='575.864'
          fill='#fff'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='1.546'
          display='inline'
          fontSize='38.933'
        >
          <tspan
            x='479.234'
            y='575.864'
            fill='#fff'
            fillOpacity='1'
            strokeWidth='1.546'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            A3
          </tspan>
        </text>
      </g>
      {/* <g
        fillOpacity='1'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(.52)'
        onMouseDown={(e) => setMouseXY([e.clientX, e.clientY])}
        onMouseUp={(e) => {
          if (mouseXY && isMouseShortDistance(mouseXY[0], mouseXY[1], e.clientX, e.clientY)) {
            onClickPlot(building.plots[3].id);
            setMouseXY(null);
          } else {
            setMouseXY(null);
          }
        }}
        onMouseEnter={() => setHoveredPlot(building.plots[3])}
        onMouseLeave={() => setHoveredPlot(undefined)}
        style={{ cursor: 'pointer' }}
      >
        <path
          fill={hoveredPlot === building.plots[3] ? '#ff8c42' : 'url(#pattern2397)'}
          stroke='#ff8c42'
          strokeWidth='4.5'
          d='M277.833 1078.831l517.867 1.03L731.46 781.1l-270.1-10.22z'
        ></path>
        <rect
          width='84.762'
          height='55'
          x='539.273'
          y='884.668'
          fill='#ff8c42'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='2.075'
          display='inline'
          opacity='0.694'
          ry='1.358'
        ></rect>
        <text
          xmlSpace='preserve'
          x='557.796'
          y='926.368'
          fill='#fff'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='1.546'
          display='inline'
          fontSize='38.933'
        >
          <tspan
            x='557.796'
            y='926.368'
            fill='#fff'
            fillOpacity='1'
            strokeWidth='1.546'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            B1
          </tspan>
        </text>
      </g>
      <g
        fillOpacity='1'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(.52)'
        onMouseDown={(e) => setMouseXY([e.clientX, e.clientY])}
        onMouseUp={(e) => {
          if (mouseXY && isMouseShortDistance(mouseXY[0], mouseXY[1], e.clientX, e.clientY)) {
            onClickPlot(building.plots[4].id);
            setMouseXY(null);
          } else {
            setMouseXY(null);
          }
        }}
        onMouseEnter={() => setHoveredPlot(building.plots[4])}
        onMouseLeave={() => setHoveredPlot(undefined)}
        style={{ cursor: 'pointer' }}
      >
        <path
          fill={hoveredPlot === building.plots[4] ? '#ff8c42' : 'url(#pattern7919)'}
          stroke='#ff8c42'
          strokeWidth='4.5'
          d='M465.552 768.978l264.754 10.412-32.722-154.688-156.176-1.488z'
        ></path>
        <rect
          width='84.762'
          height='55'
          x='578.022'
          y='662.006'
          fill='#ff8c42'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='2.075'
          display='inline'
          opacity='0.694'
          ry='1.358'
        ></rect>
        <text
          xmlSpace='preserve'
          x='594.046'
          y='703.953'
          fill='#fff'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='1.546'
          display='inline'
          fontSize='38.933'
        >
          <tspan
            x='594.046'
            y='703.953'
            fill='#fff'
            fillOpacity='1'
            strokeWidth='1.546'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            B2
          </tspan>
        </text>
      </g>
      <g
        fillOpacity='1'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(.52)'
        onMouseDown={(e) => setMouseXY([e.clientX, e.clientY])}
        onMouseUp={(e) => {
          if (mouseXY && isMouseShortDistance(mouseXY[0], mouseXY[1], e.clientX, e.clientY)) {
            onClickPlot(building.plots[5].id);
            setMouseXY(null);
          } else {
            setMouseXY(null);
          }
        }}
        onMouseEnter={() => setHoveredPlot(building.plots[5])}
        onMouseLeave={() => setHoveredPlot(undefined)}
        style={{ cursor: 'pointer' }}
      >
        <path
          fill={hoveredPlot === building.plots[5] ? '#ff8c42' : 'url(#pattern2409)'}
          stroke='#ff8c42'
          strokeWidth='4.5'
          d='M545.87 623.214h154.688l-25.285-114.528-69.907 1.487z'
        ></path>
        <rect
          width='84.762'
          height='55'
          x='590.693'
          y='543.2'
          fill='#ff8c42'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='2.075'
          display='inline'
          opacity='0.694'
          ry='1.358'
        ></rect>
        <text
          xmlSpace='preserve'
          x='609.216'
          y='584.901'
          fill='#fff'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='1.546'
          display='inline'
          fontSize='38.933'
        >
          <tspan
            x='609.216'
            y='584.901'
            fill='#fff'
            fillOpacity='1'
            strokeWidth='1.546'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            B3
          </tspan>
        </text>
      </g>
      <g
        fillOpacity='1'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(.52)'
        onMouseDown={(e) => setMouseXY([e.clientX, e.clientY])}
        onMouseUp={(e) => {
          if (mouseXY && isMouseShortDistance(mouseXY[0], mouseXY[1], e.clientX, e.clientY)) {
            onClickPlot(building.plots[6].id);
            setMouseXY(null);
          } else {
            setMouseXY(null);
          }
        }}
        onMouseEnter={() => setHoveredPlot(building.plots[6])}
        onMouseLeave={() => setHoveredPlot(undefined)}
        style={{ cursor: 'pointer' }}
      >
        <path
          fill={hoveredPlot === building.plots[6] ? '#ff8c42' : 'url(#pattern2413)'}
          stroke='#ff8c42'
          strokeWidth='4.5'
          d='M733.839 779.704l295.903-66.578 47.262 44.385 1.041 320.534-280.587.52z'
        ></path>
        <rect
          width='84.762'
          height='55'
          x='907.288'
          y='870.278'
          fill='#ff8c42'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='2.075'
          display='inline'
          opacity='0.694'
          ry='1.358'
        ></rect>
        <text
          xmlSpace='preserve'
          x='925.811'
          y='911.978'
          fill='#fff'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='1.546'
          display='inline'
          fontSize='38.933'
        >
          <tspan
            x='925.811'
            y='911.978'
            fill='#fff'
            fillOpacity='1'
            strokeWidth='1.546'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            C1
          </tspan>
        </text>
      </g>
      <g
        fillOpacity='1'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(.52)'
        onMouseDown={(e) => setMouseXY([e.clientX, e.clientY])}
        onMouseUp={(e) => {
          if (mouseXY && isMouseShortDistance(mouseXY[0], mouseXY[1], e.clientX, e.clientY)) {
            onClickPlot(building.plots[7].id);
            setMouseXY(null);
          } else {
            setMouseXY(null);
          }
        }}
        onMouseEnter={() => setHoveredPlot(building.plots[7])}
        onMouseLeave={() => setHoveredPlot(undefined)}
        style={{ cursor: 'pointer' }}
      >
        <path
          fill={hoveredPlot === building.plots[7] ? '#ff8c42' : 'url(#pattern2418)'}
          stroke='#ff8c42'
          strokeWidth='4.5'
          d='M701.847 622.286l31.257 157.702 298.356-71.037-137.812-115.08z'
        ></path>
        <rect
          width='84.762'
          height='55'
          x='794.753'
          y='643.958'
          fill='#ff8c42'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='2.075'
          display='inline'
          opacity='0.694'
          ry='1.358'
        ></rect>
        <text
          xmlSpace='preserve'
          x='813.276'
          y='685.658'
          fill='#fff'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='1.546'
          display='inline'
          fontSize='38.933'
        >
          <tspan
            x='813.276'
            y='685.658'
            fill='#fff'
            fillOpacity='1'
            strokeWidth='1.546'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            C2
          </tspan>
        </text>
      </g>
      <g
        fillOpacity='1'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(.52)'
        onMouseDown={(e) => setMouseXY([e.clientX, e.clientY])}
        onMouseUp={(e) => {
          if (mouseXY && isMouseShortDistance(mouseXY[0], mouseXY[1], e.clientX, e.clientY)) {
            onClickPlot(building.plots[8].id);
            setMouseXY(null);
          } else {
            setMouseXY(null);
          }
        }}
        onMouseEnter={() => setHoveredPlot(building.plots[8])}
        onMouseLeave={() => setHoveredPlot(undefined)}
        style={{ cursor: 'pointer' }}
      >
        <path
          fill={hoveredPlot === building.plots[8] ? '#ff8c42' : 'url(#pattern2422)'}
          stroke='#ff8c42'
          strokeWidth='4.5'
          d='M676.821 507.425l25.944 113.694L892 590.597l-98.433-88.513z'
        ></path>
        <rect
          width='84.762'
          height='55'
          x='718.479'
          y='530.172'
          fill='#ff8c42'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='2.075'
          display='inline'
          opacity='0.694'
          ry='1.358'
        ></rect>
        <text
          xmlSpace='preserve'
          x='737.003'
          y='571.873'
          fill='#fff'
          stroke='none'
          strokeDasharray='none'
          strokeOpacity='1'
          strokeWidth='1.546'
          display='inline'
          fontSize='38.933'
        >
          <tspan
            x='737.003'
            y='571.873'
            fill='#fff'
            fillOpacity='1'
            strokeWidth='1.546'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            C3
          </tspan>
        </text>
      </g> */}
    </svg>
  );
}
