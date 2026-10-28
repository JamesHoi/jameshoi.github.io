# Kenghou Hoi — Academic Homepage

A static academic homepage prepared for GitHub Pages. It uses plain HTML and CSS, so no build step is required.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publication videos

Ten publication videos are included in `assets/videos/`, including FlyHand-WAM, fixed-camera aerial filming, Acting in Meters, and CrossFly. DPNet intentionally remains a “Video coming soon” placeholder.

When the DPNet video is ready, put the optimized MP4 in `assets/videos/dpnet.mp4`, then replace its `.video-placeholder` block in `index.html` with:

```html
<div class="publication-video">
  <video autoplay loop muted playsinline controls preload="metadata">
    <source src="assets/videos/dpnet.mp4" type="video/mp4">
  </video>
</div>
```

Current video filenames:

1. `monocular-aerial-grasping.mp4`
2. `force-aware-grasping.mp4`
3. `onboard-moving-target-grasping.mp4`
4. `flyhand-wam.mp4`
5. `agile-fall-recovery.mp4`
6. `dynamic-obstacle-avoidance.mp4`
7. `dpnet.mp4` — coming soon
8. `safety-shielded-flight.mp4`
9. `fixed-camera-aerial-filming.mp4`
10. `acting-in-meters.mp4`
11. `crossfly.mp4`

The matching video styles are already included in `style.css`.

## Deploy

Push updates to the `academic-page` branch of `JamesHoi/jameshoi.github.io`. GitHub Pages is configured to publish the root of this branch and serves `index.html` directly. The downloadable CV is `assets/cv/Kenghou_Hoi_CV.pdf`.
