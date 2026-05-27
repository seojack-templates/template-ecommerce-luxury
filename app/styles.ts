/**
 * Scoped CSS for the ecommerce-luxury template.
 * EVERY selector must be prefixed with ".ecommerce-luxury-demo" so the styles
 * cannot leak (this matters when the source is seeded into the builder).
 */
export const ECOMMERCE_LUXURY_CSS = `
.ecommerce-luxury-demo {
    --ink: #14141a;
    --paper: #ffffff;
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    color: var(--ink);
    background: var(--paper);
}
.ecommerce-luxury-demo * { box-sizing: border-box; }
.ecommerce-luxury-demo h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin: 0 0 1rem; }
`;