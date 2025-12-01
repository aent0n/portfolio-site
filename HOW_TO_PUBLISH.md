# How to Publish a New Write-up

This guide explains how to add a new CTF write-up to your portfolio and deploy it to the live site.

## 1. Create the Write-up File

1.  Navigate to the `content/ctf/` directory.
2.  Create a new file with a `.mdx` extension (e.g., `my-new-ctf.mdx`).
3.  Add the required **Frontmatter** at the top of the file:

```yaml
---
title: "Name of the CTF Challenge"
date: "2025-12-01"
description: "A brief summary of the challenge and your solution."
tags: ["Web", "Forensics", "Hard"]
---
```

4.  Write your content below the frontmatter using Markdown/MDX.

## 2. Add Images (Optional)

1.  Place your images in the `public/images/writeups/` folder.
    *   *Tip: Create a subfolder for each CTF to keep things organized (e.g., `public/images/writeups/my-new-ctf/`).*
2.  Reference them in your MDX file using the path starting from `/`:

```markdown
![Screenshot of the flag](/images/writeups/my-new-ctf/flag.png)
```

## 3. Test Locally

1.  Run the development server:
    ```bash
    npm run dev
    ```
2.  Open [http://localhost:3000/writeups](http://localhost:3000/writeups) to verify your new post appears and looks correct.

## 4. Deploy to GitHub

Once you are happy with your changes:

1.  **Stage and Commit**:
    ```bash
    git add .
    git commit -m "Add write-up for My New CTF"
    ```

2.  **Push to Main**:
    ```bash
    git push origin main
    ```

## 5. Automatic Deployment

*   GitHub Actions will automatically detect the push to `main`.
*   It will build your site and deploy it to GitHub Pages.
*   This process usually takes **1-2 minutes**.
*   You can check the status in the **Actions** tab of your GitHub repository.

---

## 6. Obsidian Template (Recommended)

If you use the **Templater** plugin in Obsidian, use this template to automatically generate the correct frontmatter for your write-ups. This ensures perfect compatibility with the sync script.

```markdown
---
title: <% tp.file.title %>
date: '<% tp.file.creation_date("YYYY-MM-DD") %>'
description: >-
  <% tp.system.prompt("Description du Write-Up") %>
tags:
  - <% tp.system.prompt("Tag 1 (ex: Web)") %>
  - <% tp.system.prompt("Tag 2 (ex: Medium)") %>
---

## 1. Contexte et Objectifs

<% tp.file.cursor() %>

## 2. Reconnaissance

## 3. Analyse & Exploitation

## 4. Conclusion
```

**Done!** Your new write-up is now live.
