# Brett Astro

Astro static site deployed as static assets on the existing Cloudflare Worker.

## Local development

Use Node.js 24 and pnpm 9.12.3, then run:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Cloudflare deployment

`wrangler.jsonc` targets the existing `brettsmith` Worker, keeps its `brettsmith.me` custom domain, and serves the Astro build in `dist/`. The site is fully static, so it does not use the React Router Worker entrypoint.

Connect this GitHub repository from the existing Worker’s **Settings > Builds** page. If it is still connected to the React Router repository, disable its current builds before reconnecting it here. Configure the production branch as `main`, the build command as `pnpm run build`, and the deploy command as `pnpm run deploy`. Workers Builds will use Node.js 24 from `.nvmrc` and the pnpm version pinned in `package.json`.

Wrangler now owns the `brettsmith.me` custom domain route through the config. Existing dashboard variables are retained. The WAF rules are not part of this Worker config and remain attached to the Cloudflare zone.

For local deployment, run `pnpm run build` followed by `pnpm run deploy` after authenticating Wrangler with the correct Cloudflare account.
