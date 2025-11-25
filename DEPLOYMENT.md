# Deployment Guide - GitHub Pages

This guide will walk you through deploying your Antigravity Workout Timer to GitHub Pages for free.

## Prerequisites

- A GitHub account (create one at https://github.com/signup if needed)
- Git installed on your computer (download from https://git-scm.com if needed)

## Step 1: Initialize Git Repository

Open a terminal in your project directory and run:

```bash
git init
git add .
git commit -m "Initial commit: Antigravity Workout Timer"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Enter a repository name (e.g., `antigravity-workout-timer`)
3. Choose "Public" (required for free GitHub Pages)
4. **Do NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 3: Push to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Click "Pages" (left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select `main` and `/ (root)`
6. Click "Save"

## Step 5: Access Your Live Site

After a few minutes, your site will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

GitHub will show you the URL in the Pages settings once deployment is complete.

## Updating Your Site

Whenever you make changes to your workout timer:

```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically redeploy your site within a few minutes.

## Troubleshooting

### Site not loading?
- Wait 2-5 minutes after enabling GitHub Pages
- Check that your repository is public
- Verify the branch is set to `main` in Pages settings

### Audio files not playing?
- Ensure all `.wav` files are committed and pushed
- Check browser console for errors
- Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Changes not appearing?
- Wait a few minutes for GitHub Pages to rebuild
- Clear your browser cache
- Check that you pushed your commits (`git push`)

## Custom Domain (Optional)

If you want to use your own domain:

1. Add a `CNAME` file to your repository with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. See GitHub's documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or open an issue in your repository.
