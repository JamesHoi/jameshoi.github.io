# Kenghou Hoi — Academic Homepage

A static academic homepage prepared for GitHub Pages. It uses plain HTML and CSS, so no build step is required.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publication videos

Videos 1–5 and 7 are already included in `assets/videos/`. Publication 6 (DPNet) intentionally remains a “Video coming soon” placeholder.

When the DPNet video is ready, put the optimized MP4 in `assets/videos/dpnet.mp4`, then replace its `.video-placeholder` block in `index.html` with:

```html
<div class="publication-video">
  <video autoplay loop muted playsinline controls preload="metadata">
    <source src="assets/videos/dpnet.mp4" type="video/mp4">
  </video>
</div>
```

Current filenames, in publication order:

1. `monocular-aerial-grasping.mp4`
2. `force-aware-grasping.mp4`
3. `onboard-moving-target-grasping.mp4`
4. `agile-fall-recovery.mp4`
5. `dynamic-obstacle-avoidance.mp4`
6. `dpnet.mp4` — coming soon
7. `safety-shielded-flight.mp4`

The matching video styles are already included in `style.css`.

## Deploy

Push the directory to the `main` branch of a repository named `JamesHoi.github.io`. GitHub Pages will serve `index.html` directly.
