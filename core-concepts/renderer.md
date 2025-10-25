# Renderer

The **Renderer** is the engine of your 3D application. It's the "master component" that brings everything else together.

If your `Scene` is the movie set, your `Models` are the actors, your `Lights` are the crew, and your `Camera` is the director's viewfinder, then the **Renderer** is the entire production studio. It's the part that actually "shoots" the film, processes it, and puts the final 2D image on your screen.

The Renderer is the component that:
1.  Takes your `Scene` and `Camera` as input.
2.  Communicates directly with the browser's WebGL API.
3.  Manages the GPU to execute the entire **Render Pipeline** (running the shaders, performing depth tests, etc.).
4.  Draws the final, colored pixels to the HTML `<canvas>` element you provide.

---

## The Render Loop and Frame Rate (FPS)

A 3D scene is not a static picture; it's a movie. To create the illusion of smooth motion, the renderer must draw a new, complete image (a **frame**) over and over again, many times per second.

This continuous cycle of `draw -> update -> draw -> update` is called the **Render Loop** or "game loop."

### Frames Per Second (FPS)
The speed of this loop is measured in **Frames Per Second (FPS)**.
* **1 FPS:** You would see a new static image once per second. This is a slideshow.
* **30 FPS:** This is the minimum for motion to look somewhat smooth (common for old video games).
* **60 FPS:** This is the target for modern web and game applications. At 60 FPS, the motion looks incredibly fluid and realistic.

To achieve 60 FPS, the renderer must do *all* the work—calculate all vertex positions, run all fragment shaders for every pixel, and draw the final image—in **less than 16.67 milliseconds** ($1000 \text{ ms} / 60 \text{ frames} \approx 16.67 \text{ ms/frame}$).

### `requestAnimationFrame` and VSync
In the browser, we don't just use a simple `setInterval` to create this loop. We use a special function called `requestAnimationFrame`.

This function is a "smart" loop. It synchronizes your render loop with your monitor's **refresh rate**. Almost all monitors refresh at 60Hz (60 times per second). `requestAnimationFrame` tells the browser: "Just before you refresh the screen, please run my 'draw' function."

This is also known as **VSync** (Vertical Sync). It's incredibly efficient and prevents a visual bug called "screen tearing," where you see a mix of two different frames at the same time.

---

## Key Renderer Settings

When you create a renderer, you typically configure a few key settings that have a big impact on performance and quality.

### 1. The Canvas
The renderer needs to know *where* to draw. This is the first thing you give it: a reference to an HTML `<canvas>` element on your page.

### 2. Anti-Aliasing (AA)
This is one of the most important settings for visual quality.

Pixels on your screen are a perfect square grid. When you try to draw a smooth, diagonal 3D edge on this grid, you get a "staircase" effect. These jagged, blocky edges are called **aliasing** or "jaggies."



**Anti-aliasing** is the technique the renderer uses to fix this. It cleverly blends the colors of the pixels along these jagged edges, tricking your eye into seeing a much smoother line. Turning this on (e.g., `antialias: true`) is essential for a professional, clean look.



### 3. Tone Mapping and Color
This is a more advanced concept, but it's critical for realistic lighting.

The 3D renderer performs its lighting calculations in **High Dynamic Range (HDR)**, allowing for brightness values far beyond what your monitor can show. (Just like an HDRI file).

Your monitor, however, is **Low Dynamic Range (LDR)**.

**Tone Mapping** is the process of "compressing" or converting that HDR image into an LDR image that looks good on your screen. Without it, bright lights would just "blow out" to pure white, and you'd lose all the beautiful detail in the highlights. A good tone mapping algorithm (like `ACESFilmic`) makes your 3D scene look rich and cinematic, not like a flat, washed-out video game.