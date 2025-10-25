# Lighting

In 3D graphics, a scene is born in complete darkness. Without a light source, your screen would be pitch black.

Lighting is the art and science of adding light to a scene to make objects visible. But it does much more than that. It defines an object's form, reveals its texture, creates shadows, and sets the entire mood of your scene. A bright, harsh light feels different from a soft, dim light.

## How Lighting Works

3D lighting is a simulation of real-world physics. A "light" object in a 3D scene works by casting rays. When these rays hit a 3D model, the rendering engine runs complex calculations (using **shaders**) to determine the final color of that pixel. It asks:

* How bright is the light?
* What's the light's color?
* At what angle is the light hitting this surface?
* Is the surface rough or smooth? (e.g., a smooth surface will have a bright, sharp highlight, while a rough one won't).

## Common Light Types

You can add several different types of lights to your scene, each with its own properties and real-world analogy.

### 1. Ambient Light
An Ambient Light is a soft, global light that illuminates all objects in the scene **equally**.

* **Analogy:** A heavily overcast, cloudy day. The light comes from *everywhere* at once.
* **Key Properties:** It has a **color** and an **intensity**, but it has **no direction** and **cannot cast shadows**.
* **Use Case:** Its main purpose is to fill in shadows. In the real world, shadows are never 100% black because light bounces around. Ambient light simulates this "bounced" light, making your scene look more realistic and less harsh.

### 2. Directional Light
A Directional Light emits rays that are parallel to each other, as if coming from an infinitely distant source.

* **Analogy:** The **Sun**. 
* **Key Properties:** It has a **direction** (and color/intensity), but it has **no position**. Because it's "infinitely" far away, it doesn't matter where you place it in your scene; only its rotation matters.
* **Use Case:** This is the #1 choice for simulating sunlight. It's perfect for creating bright, outdoor scenes with strong, parallel shadows.

### 3. Point Light
A Point Light emits light in **all directions** from a single point in space. The light's intensity fades as it gets farther from the source (a process called "attenuation").

* **Analogy:** A bare **lightbulb**, a candle, or a magic orb. 

[Image of a point light source]

* **Key Properties:** It has a **position** and a **range** (how far the light reaches).
* **Use Case:** Ideal for local light sources, like placing a lamp in a room, a torch on a wall, or an explosion.

### 4. Spot Light
A Spot Light works just like a Point Light, but it emits light in a **cone** shape instead of in all directions.

* **Analogy:** A **flashlight**, a car headlight, or a theater spotlight.
* **Key Properties:** It has a **position**, a **direction** (where the cone is pointing), and an **angle** (how wide or narrow the cone is).
* **Use Case:** Perfect for focusing the viewer's attention. You can use it to highlight a specific character, a product on a pedestal, or to simulate a flashlight in a dark scene.

## Shadows

Shadows are not always automatic. They are computationally "expensive," meaning they require a lot of processing power from the GPU.

In most 3D systems, you must explicitly *enable* shadows on:
1.  **The Light:** The light (e.g., a Directional Light or Spot Light) must be told to "cast shadows."
2.  **The Objects:** The 3D models must be told to both "cast shadows" (on other objects) and "receive shadows" (from other objects).