# Garmin GPS Help Center — GitHub Pages

A static HTML/CSS/JavaScript website containing 100 Garmin GPS update and troubleshooting articles.

## Files and folders

- `index.html` — simple home page
- `article.html` — searchable article directory (does not list titles on the home page)
- `support.html` — support information page
- `style.css` — shared responsive styling
- `script.js` — article-directory search
- `articles/` — 100 topic folders; each contains `article.html`

## Publish with GitHub Pages

1. Extract this ZIP file.
2. Upload the contents of the extracted folder to the root of your GitHub repository. Upload the files and folders themselves, not the ZIP.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to finish publishing and open the Pages URL shown in repository settings.

## Navigation

Every page includes these navigation targets:
- Home: `/`
- Article: `/article.html`
- Support: `/support.html`

The article pages are stored in `articles/<topic-slug>/article.html`. Article URLs do not contain serial numbers.

**Project-site note:** The requested `/` home link points to the domain root. If the site is published as a project site at `username.github.io/repository/`, the domain-root link may lead outside the repository. For a project site, replace `/` with the repository base path if you want Home to remain inside that project. The other navigation links use root-relative paths as requested.

## Important

This is an independent informational resource and is not affiliated with Garmin. Update availability and steps vary by model. Use official, model-specific documentation for device operations.
