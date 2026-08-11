# sofia-links

Sofía's creator portfolio / link-in-bio page. Static site (no build step), hosted on GitHub Pages.

## Editing content

Everything editable lives at the top of [script.js](script.js):

- `FEATURED_REELS` — the 4 featured reels (most-engaged first). Add a `thumbnail: "images/reel-1.jpg"` field to any entry once you have an exported cover frame; without one, a styled placeholder card is used.
- `SOCIAL_LINKS`, `generalLinks()` — link cards and social icons.
- `I18N` — English/French text. Add a key here and a matching `data-i18n="key"` attribute in [index.html](index.html) for any new translatable text.
- `BLOG_POSTS` / `SHOW_BLOG` — set `SHOW_BLOG = true` and fill in posts to bring the Blog section back.
- `STATS_FALLBACK` — shown only if `data/stats.json` fails to load.

## Stats automation setup

The stats strip reads `data/stats.json`, refreshed daily by [.github/workflows/update-stats.yml](.github/workflows/update-stats.yml) via [scripts/update-stats.mjs](scripts/update-stats.mjs). Until you add the secrets below, the workflow runs but skips both platforms and the page keeps showing the last committed numbers — nothing breaks.

**Instagram follower count** (requires an Instagram **Business or Creator** account):

1. Go to [developers.facebook.com](https://developers.facebook.com) → create an app (type: "Business").
2. Add the **Instagram Graph API** product, connect the Facebook Page linked to your Instagram account.
3. Under Graph API Explorer, generate a User Access Token with the `instagram_basic` permission, then exchange it for a long-lived token (60 days) via `GET /oauth/access_token?grant_type=fb_exchange_token...` — see [Meta's long-lived token docs](https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/get-started).
4. Find your Instagram Business Account ID (via `GET /me/accounts` then `?fields=instagram_business_account`).
5. In the GitHub repo: Settings → Secrets and variables → Actions, add:
   - `INSTAGRAM_ACCESS_TOKEN`
   - `INSTAGRAM_USER_ID`
6. Long-lived tokens expire after 60 days and need periodic manual renewal (Meta has no permanent server-to-server token for personal accounts) — put a reminder on your calendar, or refresh via the token-refresh endpoint before it lapses.

**Pinterest follower count:**

1. Go to [developers.pinterest.com](https://developers.pinterest.com) → create an app.
2. Complete the OAuth flow for your account with the `user_accounts:read` scope to get an access token.
3. Add the token as a repo secret: `PINTEREST_ACCESS_TOKEN`.

Once the secrets exist, the next scheduled run (or a manual "Run workflow" from the Actions tab) fetches real follower counts and commits the update automatically. `totalViews` in `data/stats.json` stays a manually-edited combined figure across platforms since neither API exposes a simple cross-platform views counter.

## Local preview

Any static file server works, e.g.:

```
npx serve .
```
