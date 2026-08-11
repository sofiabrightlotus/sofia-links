#!/usr/bin/env node
// Fetches current follower counts from Instagram and Pinterest and writes
// data/stats.json. Requires INSTAGRAM_ACCESS_TOKEN + INSTAGRAM_USER_ID and/or
// PINTEREST_ACCESS_TOKEN as env vars (set as GitHub Actions secrets). A
// platform without credentials is skipped and its last known value is kept —
// see README.md "Stats automation setup" for how to obtain these.

import { readFile, writeFile } from "node:fs/promises";

const STATS_PATH = new URL("../data/stats.json", import.meta.url);

async function fetchInstagramFollowers() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  if (!token || !userId) {
    console.log("Skipping Instagram: INSTAGRAM_ACCESS_TOKEN / INSTAGRAM_USER_ID not set.");
    return null;
  }
  const url = `https://graph.facebook.com/v19.0/${userId}?fields=followers_count&access_token=${token}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error("Instagram API error:", res.status, await res.text());
    return null;
  }
  const data = await res.json();
  return typeof data.followers_count === "number" ? data.followers_count : null;
}

async function fetchPinterestFollowers() {
  const token = process.env.PINTEREST_ACCESS_TOKEN;
  if (!token) {
    console.log("Skipping Pinterest: PINTEREST_ACCESS_TOKEN not set.");
    return null;
  }
  const res = await fetch("https://api.pinterest.com/v5/user_account", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    console.error("Pinterest API error:", res.status, await res.text());
    return null;
  }
  const data = await res.json();
  return typeof data.follower_count === "number" ? data.follower_count : null;
}

async function main() {
  const current = JSON.parse(await readFile(STATS_PATH, "utf8"));

  const [igFollowers, pinFollowers] = await Promise.all([
    fetchInstagramFollowers(),
    fetchPinterestFollowers(),
  ]);

  if (igFollowers === null && pinFollowers === null) {
    console.log("No credentials configured yet — leaving data/stats.json unchanged.");
    return;
  }

  const next = {
    ...current,
    instagramFollowers: igFollowers ?? current.instagramFollowers,
    pinterestFollowers: pinFollowers ?? current.pinterestFollowers,
    updatedAt: new Date().toISOString(),
  };

  await writeFile(STATS_PATH, JSON.stringify(next, null, 2) + "\n");
  console.log("Updated data/stats.json:", next);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
