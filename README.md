# Harbor Point Medicare Guidance Static Site

Very simple static website template for a local Medicare insurance representative. The site is built with plain HTML, CSS, and JavaScript and is ready to host on GitHub Pages.

## Files

- `index.html` - very short homepage
- `about.html` - short advisor page
- `medicare.html` - short Medicare overview
- `contact.html` - contact form and booking page
- `styles.css` - shared minimalist styles
- `content-config.js` - central place to edit site details and all page text
- `script.js` - shared header/footer rendering, text binding, mobile nav, and Calendly behavior
- `assets/` - placeholder favicon and image assets to replace

## Replace Before Launch

Update `content-config.js`:

- `agentName`
- `agencyName`
- `cityState`
- `serviceArea`
- `phoneDisplay`
- `phoneHref`
- `textHref`
- `email`
- `emailHref`
- `calendlyUrl`
- `formEndpoint`
- `licenseInfo`
- `disclaimerShort`
- `disclaimerLong`
- `officeHours`
- image paths if you rename files in `assets/`
- all page copy in the `pages` object
- all meta titles and descriptions in the `meta` object

Also replace:

- Page titles and meta descriptions if you want final market-specific wording
- The JSON-LD schema block in `index.html`
- Placeholder copy in About, Medicare, and Contact sections that references compliance review
- The placeholder SVG images in `assets/` with real photos or optimized branded graphics

## Calendly Setup

1. Open `content-config.js`.
2. Replace `calendlyUrl` with your real Calendly event URL.
3. The Contact page button will open Calendly in a popup when clicked.

## GitHub Pages Deployment

1. Push these files to a GitHub repository.
2. In GitHub, open `Settings -> Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select the branch containing this site, usually `main`.
5. Set the folder to `/ (root)`.
6. Save the settings and wait for GitHub Pages to publish the site.

If you use a project site instead of a custom domain, these relative links will still work as-is.

## Customization Notes

- The shared header and footer are injected by `script.js`, but the actual editable copy now lives in `content-config.js`.
- The design uses `Fraunces` and `Source Sans 3` from Google Fonts.
- Review all compliance language, carrier references, license disclosures, and any compensation-related wording before launch.
