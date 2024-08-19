import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const data = [
  {
    id: 'java',
    label: 'java',
    value: 355,
    color: 'hsl(25, 70%, 50%)'
  },
  {
    id: 'python',
    label: 'python',
    value: 210,
    color: 'hsl(109, 70%, 50%)'
  },
  {
    id: 'go',
    label: 'go',
    value: 119,
    color: 'hsl(305, 70%, 50%)'
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 290,
    color: 'hsl(86, 70%, 50%)'
  },
];

function PieChart () {return(
  <div style={{ height: 400 }}>
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: 'nivo' }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    //   radialLabelsSkipAngle={10}
    //   radialLabelsTextXOffset={6}
    //   radialLabelsTextColor="#333333"
    //   radialLabelsLinkOffset={0}
    //   radialLabelsLinkDiagonalLength={16}
    //   radialLabelsLinkHorizontalLength={24}
    //   radialLabelsLinkStrokeWidth={1}
    //   radialLabelsLinkColor={{ from: 'color' }}
    //   slicesLabelsSkipAngle={10}
    //   slicesLabelsTextColor="#333333"
      animate={true}
    //   motionStiffness={90}
    //   motionDamping={15}
    />
  </div>
)};

export default PieChart;
