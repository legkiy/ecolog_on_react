import React from 'react';
import MainOnlyMap from './MainOnlyMap';
import MainWitheTable from './MainWitheTable';

export default function MainBox({ scriptIndex }) {
  if (scriptIndex < 3) {
    return <MainWitheTable scriptIndex={scriptIndex} />;
  }
  return <MainOnlyMap scriptIndex={scriptIndex} />;
}
