# Portfolio & CTF Write-ups Website

A professional portfolio and CTF write-up blog built with **Next.js 15**, **Tailwind CSS v4**, and **MDX**. Featuring a custom Obsidian sync workflow and multi-language support.

## 🛠️ Technical Stack

### Core Framework
-   **Next.js 15 (App Router)**: React framework for production.
-   **React 19**: UI library.
-   **TypeScript**: Static typing for robustness.

### Styling & UI
-   **Tailwind CSS v4**: Utility-first CSS framework (using the new `@theme` and `@plugin` syntax).
-   **Framer Motion**: Production-ready animation library for React.
-   **Lucide React**: Beautiful, consistent icons.
-   **Catppuccin Theme**: Custom implementation of Latte (Light), Macchiato (Dark), and a custom "Efrei" (Slate) theme.
-   **Tailwind Typography**: For beautiful Markdown rendering (`.prose`).

### Content Management (MDX)
-   **MDX (next-mdx-remote)**: Markdown with JSX components.
-   **gray-matter**: Frontmatter parsing.
-   **rehype-slug**: Auto-generated IDs for headers.
-   **rehype-highlight**: Syntax highlighting for code blocks (`highlight.js`).

### Features
-   **🌍 Internationalization (i18n)**: Custom React Context implementation for FR/EN/DE.
-   **🔄 Obsidian Sync**: Custom Node.js script (`scripts/sync-obsidian.js`) to:
    -   Sync `.md` files from an Obsidian vault.
    -   Handle images (copy & resize).
    -   Convert Obsidian syntax (Callouts, WikiLinks) to standard Markdown.
    -   Sanitize descriptions for preview cards.
-   **📱 Responsive Design**: Mobile-first approach.
-   **🚀 Deployment**: Static Export (`output: 'export'`) hosted on GitHub Pages via GitHub Actions.

## 🚀 Getting Started

### Prerequisites
-   Node.js 18+
-   npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-site.git

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Obsidian Workflow

To publish a new write-up:

1.  Write your content in Obsidian.
2.  Run the sync script:
    ```bash
    npm run sync "C:\Path\To\Your\Vault"
    ```
3.  The script will:
    -   Process the markdown.
    -   Copy images to `public/images/writeups`.
    -   Generate the `.mdx` file in `content/ctf`.

## 🌍 Deployment

The site is configured for **GitHub Pages**.
Pushing to the `main` branch triggers the `.github/workflows/deploy.yml` workflow.

```bash
git push origin main
```

## 📄 License

MIT

