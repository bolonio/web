import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "*": {
      color: `#485a64`,
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, Open Sans, sans-serif !important",
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      color: "inherit",
      textDecoration: `none`,
      boxShadow: `0 3px 0 0 #0c1e29`,
    },
    "a:hover": {
      // boxShadow: `none`,
      // backgroundImage: `linear-gradient(180deg,transparent 70%,rgba(35, 51, 61, .5) 0);`,
      boxShadow: `0 3px 0 0 #0c1e29`,
    },
    "a:focus": {
      boxShadow: `none`,
      outline: `3px solid #0c1e29`,
      outlineOffset: `.5rem`,
    },
    h1: {
      color: `#0c1e29`,
      fontWeight: 600,
      lineHeight: 1,
      fontSize: `3rem`,
    },
    h2: {
      color: `#0c1e29`,
      fontWeight: 600,
      lineHeight: 1.25,
      fontSize: `2.5rem`,
    },
    h3: {
      color: `#0c1e29`,
      fontWeight: 400,
      lineHeight: 1.25,
      fontSize: `2rem`,
    },
    h4: {
      color: `#0c1e29`,
      fontWeight: 400,
      lineHeight: 1.25,
      fontSize: `1.75rem`,
      letterSpacing: `inherit`,
      textTransform: `inherit`,
    },
    h5: {
      color: `#0c1e29`,
      fontWeight: 400,
      lineHeight: 1.25,
      fontSize: `1.5rem`,
    },
    p: {
      color: `#485a64`,
      fontSize: `1.25rem`,
      fontWeight: 300,
      lineHeight: 1.5,
      // "-webkit-font-smoothing": "antialiased",
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
