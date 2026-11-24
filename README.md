# makefun-post-promote

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/hypno982/makefun-post-promote/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/hypno982/makefun-post-promote/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for make.fun's bounty that asks entrants to promote make.fun's
make-your-own-bounty post on X. The entry is the post itself: one post quoting
make.fun's announcement, carrying a photo of its own and this entry's play code.
This repository only publishes the post's address where the gate reads it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` reads `POST.json` from the bot directory, proves it names an X post
(x.com or twitter.com with a numeric id of at least fifteen digits), and copies
it to `MAKEFUN_OUTPUT_DIR` — `/output` inside the grader's container. It reads
no clock, opens no socket and writes exactly one file, so the grader's two runs
write identical bytes. The post's replies, reposts and quotes are read from X by
the house; nothing the program writes about the post is scored.

## Layout

```
main.ts                 the program the grader runs
POST.json               the post's address on X
package.json            type: module
LICENSE                 MIT
```

## Licence

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=fttdhcaf&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
