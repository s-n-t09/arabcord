# GitHub Pages and build-security sources

## Official GitHub Pages custom workflow

Source: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

Key points used for ArabCord:

- A custom workflow can build and deploy a GitHub Pages site.
- Use `actions/configure-pages@v5` before preparing the Pages artifact.
- Use `actions/upload-pages-artifact@v4` to package the static output.
- Use a separate deployment job with `actions/deploy-pages@v4`.
- The deployment job needs at least `pages: write` and `id-token: write` permissions.
- The deployment job should target the `github-pages` environment and depend on the build job.

## Artifact provenance attestations

Source: https://docs.github.com/en/actions/security-for-github-actions/using-artifact-attestations/using-artifact-attestations-to-establish-provenance-for-builds

Key points used for ArabCord:

- GitHub Actions can generate artifact attestations that establish build provenance.
- A binary attestation uses `actions/attest@v4` with `subject-path` pointing to the built artifact.
- The workflow requires `id-token: write`, `contents: read`, and `attestations: write` for this step.
- Attestations can be verified with GitHub CLI using `gh attestation verify`.

## Official Pages actions

- Upload action: https://github.com/actions/upload-pages-artifact
- Deploy action: https://github.com/actions/deploy-pages

The workflow will publish only the generated Pages directory, not the repository source tree or `node_modules`.
