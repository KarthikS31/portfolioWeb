<h1 align="center">Portfolio — KarthikS31</h1>

<p align="center">
  A personal portfolio website built with React, showcasing my skills, projects, and experience.
</p>

<p align="center">
  <a href="https://karthiks31.github.io/portfolioWeb/#/"><strong>🌐 View Live Website</strong></a>
</p>

<br/>

<p align="center">
  <img width="1000" alt="Portfolio Preview" src="https://github.com/user-attachments/assets/318752dd-746a-4cc3-a9ca-c537f8a70366" />
</p>

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/Built_with-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="Built with React">
  <img src="https://img.shields.io/badge/State-Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
  <img src="https://img.shields.io/badge/Tooling-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Deployed_on-GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
</p>

<p align="center">
  🔹 <a href="https://github.com/KarthikS31/portfolioWeb/issues">Report Bug</a> &nbsp;&nbsp;&nbsp; 🔹 <a href="https://github.com/KarthikS31/portfolioWeb/issues">Request Feature</a>
</p>

---

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

## Show me your support

Give a ⭐ if you like this website!
