# Working on the TGB website together

This is the source for The Green Branch website — a **Next.js 16** app. Collaboration happens
through **GitHub**: everyone runs their own copy locally and their own Claude Code; the code is
shared and synced via git. Claude Code does not co-edit in real time — git is the sync layer.

- **Repo:** https://github.com/jhietink-dotcom/websiteTGB
- **Main branch:** `main`

---

## What you need (one-time)

- A **GitHub account** — https://github.com/signup
- **Node.js** (LTS) — https://nodejs.org
- **git** — https://git-scm.com
- **Claude Code** and your **own Claude account** (each person signs in separately — there is no shared seat)

---

## Step 1 — Get access to the repo
Ask **Jacob** to add you: on GitHub the repo owner goes to
**Settings → Collaborators → Add people** and invites your GitHub username or email.
You'll get an email invite — accept it.

## Step 2 — Get the code onto your machine
Open a terminal and run:
```bash
git clone https://github.com/jhietink-dotcom/websiteTGB.git
cd websiteTGB
npm install
```

## Step 3 — Run it locally
```bash
npm run dev
```
Open the URL it prints (usually http://localhost:3000). The site reloads as you edit.
Stop it with `Ctrl+C`.

## Step 4 — Open Claude Code in the project
Open Claude Code **in the `websiteTGB` folder** and work exactly as you would normally —
describe the change you want and let it edit the files, or edit them yourself.

---

## The golden workflow (so we don't overwrite each other)

Never edit `main` directly. Work on a **branch**, then open a **Pull Request**.

**Before you start**, get the latest:
```bash
git checkout main
git pull
```

**Make your change on a branch:**
```bash
git checkout -b yourname/what-youre-changing   # e.g. wouter/contact-form
# ...edit / let Claude Code edit...
git add -A
git commit -m "short description of the change"
git push -u origin yourname/what-youre-changing
```

**Open a Pull Request** on GitHub (it will offer a "Compare & pull request" button after you
push). Someone reviews it, then clicks **Merge**. Your change is now on `main` and everyone
can `git pull` it.

> Tip: keep each PR small and about one thing — it's much easier to review and merge.

---

## Recommended: protect `main`
Owner does this once on GitHub: **Settings → Branches → Add branch protection rule** for `main`
→ require a pull request before merging. This prevents anyone (including Claude Code) from
accidentally overwriting the live branch.

---

## Two things specific to this repo

- **The full-resolution source photos are not in git** (they're large and gitignored). Cloning
  gives you the optimised images in `public/img`, which is all the site needs to run. If you need
  the originals, ask for them separately (Drive/Dropbox).
- **Only what's committed and pushed is shared.** So the rule for everyone:
  `git pull` before you start, `commit` + `push` (via a branch/PR) when you're done.

---

## Quick reference
```bash
npm install        # after cloning, or when dependencies change
npm run dev        # run the site locally
git pull           # get everyone's latest changes (do this before starting)
git checkout -b <branch>   # start a new piece of work
git add -A && git commit -m "..."   # save your work
git push           # send it to GitHub, then open a Pull Request
```
