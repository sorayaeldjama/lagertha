import { extendTheme, PaletteRange } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface ColorPalettePropOverrides {
    // apply to all Joy UI components that support `color` prop
    primary: true;
  }

  interface Palette {
    // add `lime` to theme palette and allow it to be configured in extendTheme
    primary: PaletteRange;
  }
}

// Required to add the same token keys to light & dark color schemes, but values can be different.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#f7fee7",
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
          800: "#3f6212",
          900: "#365314",
          solidBg: "var(--joy-palette-lime-400)",
          solidActiveBg: "var(--joy-palette-lime-500)",
          outlinedBorder: "var(--joy-palette-lime-500)",
          outlinedColor: "var(--joy-palette-lime-700)",
          outlinedActiveBg: "var(--joy-palette-lime-100)",
          softColor: "var(--joy-palette-lime-800)",
          softBg: "var(--joy-palette-lime-200)",
          softActiveBg: "var(--joy-palette-lime-300)",
          plainColor: "var(--joy-palette-lime-700)",
          plainActiveBg: "var(--joy-palette-lime-100)"
        }
      }
    },
    dark: {
      palette: {
        primary: {
          50: "#f7fee7",
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
          800: "#3f6212",
          900: "#365314",
          solidBg: "var(--joy-palette-lime-400)",
          solidActiveBg: "var(--joy-palette-lime-500)",
          outlinedBorder: "var(--joy-palette-lime-700)",
          outlinedColor: "var(--joy-palette-lime-600)",
          outlinedActiveBg: "var(--joy-palette-lime-900)",
          softColor: "var(--joy-palette-lime-500)",
          softBg: "var(--joy-palette-lime-900)",
          softActiveBg: "var(--joy-palette-lime-800)",
          plainColor: "var(--joy-palette-lime-500)",
          plainActiveBg: "var(--joy-palette-lime-900)"
        }
      }
    }
  }
});

export default theme;
