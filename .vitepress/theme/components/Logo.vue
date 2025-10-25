<template>
  <div class="custom-logo-wrapper">
    <Icon 
      icon="streamline-flex:3d-coordinate-axis" 
      width="24" 
      height="24" 
      class="logo-icon"
      :fallback="fallbackSvg"
    />
    <span class="logo-text">Flow.js</span>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

// Fallback SVG if the Streamline icon doesn't load
const fallbackSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M12 12L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M12 12L18 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <circle cx="12" cy="12" r="2" fill="currentColor"/>
</svg>`
</script>

<style scoped>
.custom-logo-wrapper {
  display: flex;
  align-items: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.logo-icon {
  margin-right: 10px;
  color: var(--vp-c-brand-1);
}

.logo-text {
  color: inherit;
}

/* Ensure it works on hover */
.custom-logo-wrapper:hover .logo-text {
  color: var(--vp-c-brand-1);
}
</style>