# Introduction

## Overview

Creating interactive 3D content for the web often requires developers to manually export models from Blender, import them into Three.js, and configure materials, lighting, and environments. 

This process can be time consuming because of separate setups for each component and also error-prone due to the complex and verbose nature of Three.js syntax, which requires complete understanding of the 3D scene structure and components. 

Flow is a library that aims to simplify and automate this pipeline by allowing users to seamlessly integrate complete Blender scenes into web applications using Three.js. The method abstracts away repetitive tasks such as 
- Setting up cameras
- Render loops 
- Mesh imports
- Material definitions 
- Lighting setups
- HDRI-based environments

## Installation

Just like any library in the JavaScript ecosystem, Flow can be installed using a single command using your desired package manager.

::: code-group

```bash [npm]
npm install flowjs3d
```

```bash [bun]
bun install flowjs3d
```

```bash [yarn]
yarn add flowjs3d
```

:::

## Sample Scene

::: code-group

```javascript [JavaScript]
import FlowJS from 'flowjs3d';

const canvas = document.querySelector('your-scene-class-or-id-or-whatever');

const config = {
  canvas: canvas,
  renderer: {
    antialias: true,
    toneMapping: 'ACESFilmic',
    outputEncoding: 'sRGB',
  },

  camera: {
    fov: 45,
    position: [0, 2, 8],
  },

  // Orbit controls are completely optional
  controls: {
    enableDamping: true,
    autoRotate: true,
  },
};

const scene = new FlowJS(config);

async function loadAssets() {
  try {
    await scene.loadHDRI('/path/to/your/environment.hdr');
    const model = await scene.loadModel('/path/to/your/model.glb');
    scene.centerObject(model);
    scene.start();
  } catch (error) {
    console.error('Error loading assets:', error);
  }
}

loadAssets();
```

:::

