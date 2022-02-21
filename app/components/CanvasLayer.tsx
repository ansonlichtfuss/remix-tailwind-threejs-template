import React from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './Box';

const CanvasLayer = () => {
  return (
    <div className="absolute w-full h-full">
      <Canvas>
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default CanvasLayer;
