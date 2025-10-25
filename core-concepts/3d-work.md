# How Does 3D Work in a Browser?

3D rendering in a browser is made possible through **WebGL**, a low-level graphics API that provides access to the system’s GPU for real-time graphics rendering. It allows JavaScript to send instructions directly to the GPU, enabling complex visualizations like 3D scenes, animations, and shaders, all within the browser’s sandbox.

## Rendering Pipeline Overview

Every 3D frame rendered in a browser passes through a graphics pipeline, a sequence of programmable and fixed-function stages that transform 3D data into pixels on the screen.

1. **Geometry Definition:**
   3D models are built from vertices. Each vertex represents a point in 3D space with attributes such as position, normal, and texture coordinates.

2. **Vertex Processing:**
   Vertex shaders run on the GPU and transform vertex positions from **model space** to **screen space** using matrix multiplications (model, view, and projection matrices).

3. **Primitive Assembly & Rasterization:**
   Vertices are grouped into primitives (usually triangles), which are then rasterized into fragments (potential pixels).

4. **Fragment Shading:**
   Fragment shaders calculate the final color of each pixel based on lighting models, materials, and textures.

5. **Framebuffer Output:**
   The resulting image is written to a framebuffer and displayed on the screen. This happens 30–60 times per second for smooth motion.

## The Role of WebGL

WebGL (and WebGL2) exposes an OpenGL ES-like API to the browser. It’s **stateless**, **low-level**, and **imperative**, meaning you must manage shaders, buffers, and render states manually.

You typically:

* Create and compile GLSL shader programs.
* Upload vertex data to GPU buffers.
* Configure attributes and uniforms.
* Issue draw calls using `gl.drawArrays()` or `gl.drawElements()`.

This gives full control but requires significant boilerplate.


## Abstraction Libraries (e.g. Three.js)

High-level libraries like **Three.js**, **Babylon.js**, or **PlayCanvas** abstract away the boilerplate and expose a **scene-graph-based API**.

Instead of writing shader code directly, you work with objects like:

```js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
renderer.render(scene, camera);
```

Internally, Three.js translates these objects into WebGL buffers, shaders, and draw calls. It also manages things like lighting calculations, shadow mapping, frustum culling, and material systems.

## Key Concepts

* **Scene Graph:**
  A hierarchical structure that defines how objects are related and transformed in the scene.

* **Camera:**
  Defines the point of view and projection (perspective or orthographic).

* **Light:**
  Simulates illumination. Common types include directional, point, and ambient lights.

* **Material:**
  Defines how an object interacts with light, using shaders, textures, and reflectivity parameters.

* **Renderer:**
  Converts the scene graph and camera data into WebGL draw calls and outputs a frame to the screen.


## Modern Alternatives

Beyond WebGL, newer standards like **WebGPU** aim to provide a more modern, performant, and explicit API, closer to Vulkan or DirectX 12, allowing for better parallelization and lower overhead. WebGPU is designed to eventually replace WebGL for advanced 3D rendering and GPU computing.