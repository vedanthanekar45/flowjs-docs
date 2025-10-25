# Changelog

All notable changes to Flow.js will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-10-25

### Added
- 🎉 **Initial Release** of Flow.js
- Seamless Blender to Three.js integration
- Automated scene setup and configuration
- HDRI environment loading and management
- Automatic camera positioning and controls
- Material and lighting preservation from Blender
- Orbit controls with customizable settings
- Model loading with automatic centering
- Support for `.glb`, `.gltf`, and `.fbx` formats
- Built-in render loop management
- Tone mapping and color space management
- TypeScript support with full type definitions
- Comprehensive documentation and examples

### Features
- **Easy Setup**: Single configuration object initialization
- **Asset Loading**: Streamlined model and environment loading
- **Camera System**: Automatic camera setup with manual override options  
- **Lighting**: Preserved Blender lighting with HDRI support
- **Materials**: Automatic material conversion and optimization
- **Controls**: Optional orbit controls with damping and auto-rotation
- **Performance**: Optimized rendering pipeline
- **Cross-browser**: Compatible with modern browsers supporting WebGL 2.0

### Technical Details
- Built on Three.js r150+
- ES6 modules with tree-shaking support
- Zero external dependencies beyond Three.js
- Lightweight bundle size (~15KB gzipped)
- WebGL 2.0 compatible
- Mobile responsive and touch-friendly

### Browser Support
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## [0.9.0-beta] - 2024-09-15

### Added
- Beta release for testing
- Core API stabilization
- Initial documentation

### Fixed
- Asset loading race conditions
- Memory management improvements

## [0.5.0-alpha] - 2024-08-01

### Added
- Alpha release with basic functionality
- Proof of concept implementation
- Limited Blender scene support

---

## Release Notes

### Version 1.0.0 Highlights

This is the first stable release of Flow.js! After months of development and testing, we're excited to provide developers with a streamlined way to bring Blender scenes to the web.

**Key Benefits:**
- **90% Less Boilerplate**: Eliminate repetitive Three.js setup code
- **Direct Blender Integration**: Maintain your artistic vision from Blender to web
- **Performance Optimized**: Built-in optimizations for web delivery
- **Developer Friendly**: Intuitive API with comprehensive TypeScript support

**Migration from Alpha/Beta:**
If you're upgrading from pre-1.0 versions, please check the [Migration Guide](/migration) for breaking changes and upgrade instructions.

**Getting Started:**
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

**Next Steps:**
- Check out the [Getting Started Guide](/getting-started/introduction)
- Explore [Examples](/examples/markdown-examples)
- Join our [Community](https://github.com/AshutoshKhadse23/flow-js/discussions)

---

*For older versions and detailed commit history, see [GitHub Releases](https://github.com/AshutoshKhadse23/flow-js/releases).*