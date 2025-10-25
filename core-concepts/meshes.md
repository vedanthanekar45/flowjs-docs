# Meshes and Vertices

In 3D graphics, everything you see, from a simple cube to a detailed human model: is built out of **meshes**.
A mesh is the digital skeleton of a 3D object. It defines *shape*, not color or texture. You can think of it as a wireframe model, made of points and the connections between them.

## What Is a Mesh?

A **mesh** is made up of **vertices** (points in space) and the **faces** that connect them.
Each face is usually a **triangle**, because triangles are the simplest shapes that can form any surface. When thousands of these triangles are connected, they create the illusion of a smooth, solid object, even though it’s really a patchwork of tiny flat surfaces.

You can imagine a mesh like a net or lattice stretched around an invisible volume.
If the material is the skin, then the mesh is the bone structure underneath it.

## Vertices

A **vertex** (plural: **vertices**) is just a single point in 3D space.
Every vertex has three main coordinates:

* **X**: position left or right
* **Y**: position up or down
* **Z**: position forward or backward

Together, these define where that point exists in the virtual world.

But in practice, a vertex often carries more than just position. To make lighting and textures work, each vertex can also store:

* **Normal:** The direction that the surface is facing at that point (used to calculate lighting and shading).
* **UV Coordinates:** A 2D mapping that tells the renderer how to wrap an image (a texture) over the surface.
* **Color:** A base color for that point (used for vertex coloring).

Think of each vertex as a small data packet that describes one corner of your object, not just where it is, but how it should look when light hits it.

## Why Triangles?

Almost every 3D model is built out of triangles. That’s because:

* Three points always define a flat surface, never bent or twisted.
* GPUs are optimized to process triangles extremely fast.
* Any shape, no matter how complex, can be broken down into triangles (a process called *tessellation*).

So when you see a detailed 3D character, what’s really happening is that your computer is drawing thousands or even millions of tiny triangles every frame.

## How It All Comes Together

When a 3D model is rendered, here’s what happens behind the scenes:

1. The mesh defines **where** the object’s surfaces are.
2. The **vertices** of that mesh are sent to the GPU.
3. The GPU uses math (called transformations) to figure out where those vertices should appear on your screen.
4. The **triangles** between those vertices are filled in with color, texture, and lighting.

All this happens dozens of times per second, creating smooth animation and motion.

## Efficiency and Reuse

In large scenes, like forests, cities, or games, you often need many copies of the same mesh (for example, hundreds of trees).
Instead of sending the same vertex data to the GPU again and again, the renderer can **reuse** a single mesh and just change its position, rotation, or size.
This technique, called **instancing**, helps the browser draw more objects faster.
