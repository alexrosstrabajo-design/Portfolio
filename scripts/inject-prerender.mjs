// Copies the HTML that vite-plugin-ssg pre-rendered (dist/static/index.html)
// into the real homepage (dist/index.html), so search engines see the full
// page content instead of an empty <div id="root">. main.jsx then hydrates it.
import { readFileSync, writeFileSync } from "node:fs";

const staticHtml = readFileSync("dist/static/index.html", "utf8");
const start = staticHtml.indexOf('<div id="root">');
const end = staticHtml.lastIndexOf("</div>", staticHtml.lastIndexOf("</body>"));
if (start === -1 || end === -1) throw new Error("Pre-rendered root not found");

const inner = staticHtml
  .slice(start + '<div id="root">'.length, end)
  .replace(/^<!--\$-->/, "")
  .replace(/<!--\/\$-->$/, "");

const indexPath = "dist/index.html";
const index = readFileSync(indexPath, "utf8");
if (!index.includes('<div id="root"></div>')) throw new Error("Empty root not found in dist/index.html");
writeFileSync(indexPath, index.replace('<div id="root"></div>', `<div id="root">${inner}</div>`));
console.log(`[prerender] Injected ${inner.length} chars into dist/index.html`);
