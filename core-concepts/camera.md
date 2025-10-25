# Camera

In 3D graphics, the **Camera** is your eye into the virtual world. Nothing is visible on your screen until a camera is added to the scene.

Just like a real-world filmmaker, you control *what* the user sees by changing the camera's **position**, **rotation**, and **lens settings**.

## The Camera's Job

A 3D camera's main job is to take a 3D scene and flatten it into a 2D image to be displayed on your screen. This process is called **projection**.

To do this, the camera needs to know three fundamental things:
1.  **Position (`position`):** Where is the camera located in 3D space? (e.g., `X: 0, Y: 5, Z: 10`)
2.  **Target (`lookAt`):** What 3D coordinate is the camera pointing at? (e.g., the center of the scene, `X: 0, Y: 0, Z: 0`)
3.  **Up Vector (`up`):** Which direction is "up" for the camera? This tells the camera how it's oriented and prevents it from being "upside-down." By default, this is almost always the positive Y-axis (`X: 0, Y: 1, Z: 0`).



## Types of Cameras

There are two main types of cameras you will use, each for a different purpose.

### 1. Perspective Camera
This is the most common camera and mimics how the human eye works. Objects that are farther away appear smaller than objects that are close.



A perspective camera has a **frustum**, which is a pyramid-shaped viewing area. Only objects inside this pyramid will be rendered. It is defined by four key properties:

* **Field of View (FOV):** How "wide" is the camera's lens? This is measured in degrees.
    * A **low FOV** (e.g., `25°`) is like a **telephoto lens**. It flattens the scene and zooms in.
    * A **high FOV** (e.g., `90°`) is like a **wide-angle lens**. It shows more of the scene but can distort the edges (a "fisheye" effect).
    * A value of `45°` to `75°` is common for a natural look.
* **Aspect Ratio:** The ratio of the screen's width to its height. You must keep this updated, or your scene will look stretched or squished. (e.g., `1920 / 1080`).
* **Near Clipping Plane:** How close an object can be to the camera before it gets cut off.
* **Far Clipping Plane:** How far away an object can be before it gets cut off.

### 2. Orthographic Camera
This camera renders a scene with **no perspective**. Objects are the same size regardless of whether they are near or far.

This is not useful for realistic 3D scenes but is perfect for:
* 2D games (like platformers).
* UI elements (like a heads-up display).
* Technical or architectural blueprints (like in CAD software) where all measurements must be shown to scale.

## Orbit Controls

You will often hear about **Orbit Controls**. It's important to know that this is **not a type of camera**.

Instead, **Orbit Controls** is a helper script or class that *moves* your existing camera for you. It's a "camera controller" that allows the user to interact with the scene using their mouse:

* **Orbit (Left-click + Drag):** Rotates the camera around a central target point, like a planet orbiting the sun.
* **Pan (Right-click + Drag):** Slides the camera left/right and up/down without changing its rotation.
* **Dolly/Zoom (Mouse Wheel):** Pushes the camera closer to or farther from the target point.

Flow has support for orbit controls which isn't hardcoded and completely optional to include.

When you set up orbit controls, you are essentially "tying" your camera to a target. The controller then does all the math to update the camera's `position` and `rotation` every frame based on the user's mouse input.