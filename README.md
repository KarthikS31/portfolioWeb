# Portfolio — KarthikS31

A personal portfolio website built with React, showcasing my skills, projects, and experience.

---

<img width="1895" height="815" alt="image" src="https://github.com/user-attachments/assets/c9456132-2a1f-4cdc-8146-0f9e1c919e1c" />


## Tech Stack

- **React** — UI library
- **Redux** — state management
- **Vite** — build tool
- **CSS** — custom styling
- **GitHub Pages** — deployment

## Pages

- **Home** — introduction and overview
- **About** — background and experience
- **Skills** — technical skills
- **Projects** — work and projects

## Data Source — Google Sheets

All portfolio content (skills, projects, etc.) is fetched dynamically from a Google Sheet via Redux actions.

To understand how the data fetching works, refer to `src/utils/actions.js` — it fetches data from a published Google Sheet URL defined in `src/utils/config.js`.

### Setting up your own Google Sheet

1. Create a Google Sheet with your portfolio data
2. Go to **File → Share → Publish to web**
3. Select the sheet and choose **CSV** format, then click **Publish**
4. Copy the published URL and paste it in `src/utils/config.js`:

```js
export const SHEET_URL = "your_published_google_sheet_url";
```

5. Make sure your sheet columns match what the actions expect — check `src/utils/actions.js` for the exact structure

## Getting Started

```bash
# Clone the repo
git clone https://github.com/KarthikS31/portfolioWeb.git
cd portfolioWeb

# Install dependencies
npm install

# Run locally
npm run dev
```

## Deployment

The site is deployed via GitHub Pages using:

```bash
npm run build
npm run deploy
```

## License

MIT © KarthikS31
