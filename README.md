# make.fun post entry — make your own bounty

[![Competition](https://make.fun/badge/competition/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![Rank](https://make.fun/badge/rank/post-x-promote-make-your-own-bounty-01/hypno982/makefun-post-promote.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![Reward](https://make.fun/badge/reward/post-x-promote-make-your-own-bounty-01/hypno982/makefun-post-promote.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for [make.fun's make-your-own-bounty post bounty](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01):
one post on X that quotes make.fun's make-your-own-bounty announcement, carries
a photo of its own, and names the entry's play code.

- Post: see `POST.json`
- Program: `main.ts` (Node 22, standard library only)

## What the program does

`main.ts` reads `POST.json` from the bot directory, proves it names an X post
(x.com or twitter.com, a numeric id of at least fifteen digits), and copies the
file to `MAKEFUN_OUTPUT_DIR` — `/output` inside the grader's container. The gate
reads that file; the post's replies, reposts and quotes are read from X by the
house, so nothing the program writes is scored.

It reads no clock, opens no socket, and writes exactly one file, so the grader's
two runs produce identical bytes.

## Running it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then `out/POST.json` holds a copy of the entry's manifest.

## Layout

```
main.ts                 the program the grader runs
POST.json               the post's address on X
package.json            type: module
LICENSE                 MIT
```

## Licence

MIT — see `LICENSE`.
