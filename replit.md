# Running the portfolio

This is a static HTML, CSS, and JavaScript site. There are no packages to install or environment secrets required to serve it.

Use the **Start application** workflow to preview the site. It runs `python3 -m http.server 5000 --bind 0.0.0.0` from the project root, serving `index.html` and the local `assets/` directory.

The site loads Google Fonts and Ionicons from external CDNs, so those icons and fonts require an internet connection. The contact form is present in the imported site but has no submission service configured; the email link in the sidebar opens the visitor's mail app.