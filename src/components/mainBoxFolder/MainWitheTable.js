import React from 'react';
import ChartBlock from '../ChartBlock';
import Table from '../table/Table';
import YaMap from '../YaMap';

export default function MainWitheTable({ scriptIndex }) {
  return (
    <div className="flex-box">
      <div className="left-box">
        <div>
          <ChartBlock scriptIndex={scriptIndex} />
        </div>
        <Table scriptIndex={scriptIndex} />
      </div>
      <YaMap scriptIndex={scriptIndex} />
    </div>
  );
}
