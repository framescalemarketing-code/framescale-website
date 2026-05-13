/**
 * Run the Next.js CLI with cwd set to the repository root (next to package.json).
 * Use this so `npm run dev` works even if the shell cwd is wrong (e.g. under src/app).
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextArgs = process.argv.slice(2);
if (nextArgs.length === 0) {
  console.error("Usage: node scripts/next-from-root.mjs <next-cli-args…>");
  console.error('Example: node scripts/next-from-root.mjs dev');
  process.exit(1);
}

const cmd = process.platform === "win32" ? "npx.cmd" : "npx";
const result = spawnSync(cmd, ["next", ...nextArgs], {
  cwd: root,
  stdio: "inherit",
  shell: true,
  env: { ...process.env },
});

process.exit(result.status ?? (result.error ? 1 : 0));
