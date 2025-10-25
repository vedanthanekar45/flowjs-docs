# Materials and Shaders

To understand how 3D objects get their appearance, we need to look at two parts that work as a team: the **Material** and the **Shader**.

If you think of rendering a 3D object like cooking, then:
* A **Material** is the **recipe card**. It lists all the ingredients and their amounts: "2 cups of red color," "1/2 cup of metalness," "1/4 cup of roughness." It's just a set of data and properties.
* A **Shader** is the **chef in the kitchen (the GPU)**. It's the *program* that reads the recipe card (the Material), looks at the environment (the lights in your scene), and does all the work to *actually cook* the final-colored pixel.

## What is a Material?

A Material is a set of properties that defines how the surface of a 3D model should look. It doesn't do any calculations; it just *describes* the surface.

In modern 3D graphics, we use **Physically-Based Rendering (PBR)**, which means materials are described using properties that mimic the real world. The most important properties are:

* **`color` (or `map`):** The base color of the object, like a paint color. This can also be a **texture map**, which is an image file (like a wood grain or brick pattern) wrapped around the model.
* **`metalness`:** A value from 0.0 to 1.0.
    * `0.0` = A **non-metal** (or *dielectric*), like plastic, wood, or fabric.
    * `1.0` = A **pure metal**, like gold or aluminum.
* **`roughness`:** A value from 0.0 to 1.0. This is the *most* important property for realism.
    * `0.0` = Perfectly **smooth**. It reflects light like a perfect mirror.
    * `1.0` = Completely **rough** (or *diffuse*). It scatters light in all directions, like chalk or soft clay.



By combining just these properties, you can create almost any surface:
* **Shiny Red Plastic:** `color: 'red'`, `metalness: 0.0`, `roughness: 0.1`
* **Matte Gold:** `color: 'gold'`, `metalness: 1.0`, `roughness: 0.8`
* **Rough Wood:** `map: wood_texture.jpg`, `metalness: 0.0`, `roughness: 0.9`


## What is a Shader?

A **Shader** is a small, highly optimized program written in a special language (GLSL) that runs directly on your computer's **GPU (Graphics Card)**.

Its job is to calculate the final color of *every single pixel* of your model, 60 times per second.

There are two main types of shaders that work together:

### 1. The Vertex Shader
This program runs once for *every vertex* (point) in your 3D model. Its main job is to figure out **position**. It answers the question: "Given this 3D point, the camera's angle, and the object's position, where on the 2D screen should I draw this point?"

### 2. The Fragment Shader
This program runs once for *every single pixel* inside the shapes drawn by the Vertex Shader. Its main job is to figure out **color**. This is where your material properties are used.

For every pixel, the Fragment Shader asks:
* "What is the material's `color` at this spot?"
* "What is the `roughness` and `metalness`?"
* "Where are the lights in the scene?"
* "Based on the angle of the surface and the lights, how bright should this pixel be?"
* "Should I show a sharp, shiny highlight or a dull, scattered one?"

It performs all this math and outputs a single, final color for that pixel.

### How `flow-js` Handles Shaders

::: tip You're Always Using Shaders!
The best part is that **you almost never have to write a shader yourself.**

When you use Three.js or `flow-js`, you are using pre-built, standard shaders. When you create a `new FlowJS(...)` scene, you are automatically using a powerful PBR (Physically-Based Rendering) shader.

Your **Material** is just a simple way for you to pass properties *into* that complex, built-in shader.
:::

## How They Work Together

Let's review the full process for a single pixel on a red plastic ball:

1.  **You (CPU):** You tell `flow-js`, "I want a sphere with a material where `color: 'red'`, `metalness: 0.0`, and `roughness: 0.1`."
2.  **`flow-js` (CPU):** It prepares the sphere's vertices and tells the GPU, "Get ready to draw this sphere using your Standard PBR Shader, and here is the 'recipe card' (the Material) to use."
3.  **GPU (Vertex Shader):** The GPU calculates the 2D position of all the sphere's points on your screen.
4.  **GPU (Fragment Shader):** The GPU starts "filling in" the sphere, one pixel at a time. For a pixel near the center, it runs the shader:
    * **Shader:** "What's my recipe?"
    * **Material:** "`color: 'red'`, `metalness: 0.0`, `roughness: 0.1`."
    * **Shader:** "Got it. Where are the lights?"
    * **Scene:** "There's a bright light over here."
    * **Shader:** "Okay. Since `roughness` is low (0.1), I'll make a tight, shiny highlight. Since `metalness` is low (0.0), I'll make the highlight white. The base color is `red`."
5.  **GPU (Output):** The shader calculates the final color (e.g., a bright, shiny red) and draws it to the screen.

This happens millions of times per second to create the final, fully-rendered image.