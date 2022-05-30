import { log } from './deps.ts'
import type { ReleaseConfig } from "./config.ts";
import type { ReleaseType } from "./cli.ts";
import type { Repo } from "./src/repo.ts";

export type { ReleaseConfig } from "./config.ts";
export type { ReleaseType } from "./cli.ts";
export type { Repo } from "./src/repo.ts";
export type { Tag } from "./src/tags.ts";
export type { Commit } from "./src/commits.ts";

export interface ReleasePlugin<T = unknown> {
  name: string;
  setup?: (logs: typeof log) => Promise<void>;
  preCommit?: (
    repo: Repo,
    releaseType: ReleaseType,
    from: string,
    to: string,
    config: ReleaseConfig<T>,
    logger: typeof log
  ) => Promise<void>;
  postCommit?: (
    repo: Repo,
    releaseType: ReleaseType,
    from: string,
    to: string,
    config: ReleaseConfig<T>,
    logger: typeof log
  ) => Promise<void>;
}
