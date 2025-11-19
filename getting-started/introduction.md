# Introduction

## Overview

Creating interactive 3D content for the web often requires developers to manually export models from 3D softwares like Blender or Cinema4D, import them into Three.js, and configure materials, lighting, and environments. 

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

const canvas = document.querySelector('#scene-container');

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

  // Orbit controls enable click and drag rotation and are completely optional
  controls: {
    enableDamping: true,
    autoRotate: true,
  },
};

const scene = new FlowJS(config);

async function loadAssets() {
  try {
    await scene.loadHDRI('/path/to/your/environment.hdr');
    const model = await scene.loadGLTF('/path/to/your/model.glb');
    scene.centerObject(model);
    scene.start();
  } catch (error) {
    console.error('Error loading assets:', error);
  }
}

loadAssets();
```
If you still find the code a lot to take in, don't worry! This guide will take you step by step through the library and your 3D object will be up and running on your application in no time!

If you would like to review some must know and core 3D concepts, we have made you another comprehensive guide over [here](/core-concepts/3d-work.md).