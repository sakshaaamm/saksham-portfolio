// ─────────────────────────────────────────────
//  BACKGROUND COLOR — tweak the whole site's background tint here
// ─────────────────────────────────────────────

// Shifts the original orange background media (video + photos) to blue / light blue.
// hue-rotate: 185deg turns orange (~25°) into azure (~210°). Change it to move the shade:
//   ~160deg = more cyan / teal,  ~200deg = deeper blue,  ~230deg = blue-violet
// saturate / brightness keep the glow soft and light.
export const BG_TINT = "hue-rotate(185deg) saturate(1.1) brightness(1.12)";

// Colors for the generated (shader) backgrounds on the Contact and Coming Soon pages.
export const BG_BLUE_HEX = "#3b82f6";                  // blue
export const BG_LIGHT_BLUE_HEX = "#7dd3fc";            // light blue
export const BG_BLUE_RGB = [0.23, 0.51, 0.96];         // same blue as 0–1 floats
