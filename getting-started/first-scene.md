# Making Your First Scene

Now that you've installed the library in your project, let's create a very simple 3D scene using plain HTML and JavaScript.

## Create your HTML file

Your HTML file may look something like this. Your scene will render in the `<canvas>` element.

``` html [HTML]
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FlowJS Quick Start</title>
    <style>
      body {
        margin: 0;
      }
      canvas {
        display: block;
      }
    </style>
  </head>

  <body>
    <canvas id="scene-container"></canvas>
    <script type="module" src="/main.js"></script> <!-- Import your JavaScript file -->
  </body>

</html>
```

## Create your JavaScript file

Next, create a `main.js` file in the same directory. This is where the magic happens.

::: info You will need a 3D model and an HDRI environment file for this example. You can find free assets online at places like [Poly Haven](https://polyhaven.com/)
:::

### Import the main Flow class

``` javascript [JavaScript]
import FlowJS from 'flowjs3d';
```

### Get your canvas element

``` javascript [JavaScript]
const canvas = document.querySelector('#scene-container');
```

### Configure your scene

``` javascript [JavaScript]
const config = {
  canvas: canvas,  // Tell Flow which canvas to use

  renderer: {
    antialias: true,
    toneMapping: 'ACESFilmic', // For realistic lighting
    outputEncoding: 'sRGB',
  },

  camera: {
    fov: 45,
    position: [0, 2, 8], // Set the position with respect to X, Y and Z axes
  },

  // Enable orbit controls (optional)
  controls: {
    enableDamping: true,
    autoRotate: true,
  },
};
```
To learn more about the config properties, refer to the API documentation.

### Create your scene

``` javascript [JavaScript]
const scene = new FlowJS(config);
```

### Load your assets

``` javascript [JavaScript]
async function loadAssets() {
  try {
    await scene.loadHDRI('/path/to/your/environment.hdr'); // If you have an HDRI envirnoment with you
    const model = await scene.loadGLTF('/path/to/your/model.glb'); // Load your model
    scene.centerObject(model);
    scene.start(); // Starts the render loop
  } catch (error) {
    console.error('Error loading assets:', error);
  }
}

loadAssets();
```

::: info 3D assets take a longer time to load due to their huge size and more detail, it is recommended to load them asynchronously in the background for a better experience.
:::

## Run your project

To run this, you need a local server (you can't open the index.html file directly due to browser security rules for module imports).

If you are using Vite, you can just put these files in the public directory and run your dev server.

A simpler way is to use the serve package:

``` bash
npx serve
```

Now, open your browser to the local development address, and you should see your 3D model rendering and rotating in the scene!

## Next Steps
And voila! You've successfully created your first scene! Now you're ready to explore what else Flow can do.

- [Core Concepts](/core-concepts/3d-work.md): Learn about basic 3D concepts like meshes, lighting and materials.

- Guides: Go through the functions, classes and their properties that are required to make your scene come to life.

- API Reference: Check out the for a detailed dictionary of every class and method.

- [Examples](/examples/markdown-examples.md): Visit the gallery to see live demos and get inspiration.