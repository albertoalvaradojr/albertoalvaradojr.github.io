---
name: Mockup sandbox setup
description: Dependency installation timing and working-directory requirements for the isolated mockup preview artifact.
---

A newly created mockup sandbox can be registered before its dependencies are ready. If its workflow reports `vite: not found`, check for `node_modules` inside `artifacts/mockup-sandbox` and install from that artifact directory, not the workspace root.

**Why:** The artifact-creation result reported installation started, but the managed preview workflow launched while the sandbox still had no installed modules.

**How to apply:** Before retrying a failed mockup preview workflow, verify the sandbox-local Vite binary exists. If it does not, run the sandbox's package installation in `artifacts/mockup-sandbox`, then restart its managed workflow.