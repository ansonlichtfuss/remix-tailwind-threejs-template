import React from 'react';
import CanvasLayer from '~/components/CanvasLayer';

export default function Index() {
  return (
    <>
      <CanvasLayer />
      <h1 className="fixed top-12 right-12 uppercase font-thin text-xl">
        Remix
        <br />
        ThreeJS
        <br />
        Tailwind
      </h1>
    </>
  );
}
