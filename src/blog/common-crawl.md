---
layout: default-layout.html
title: "Timestamping a giant record of the Web"
date: 2026-10-07
width: narrow
tags: blog
---

Our latest announcement from Project Timestamper concerns a number whose scale exceeds anything we have worked with before. That number is 330 billion, or 3.3x10<sup>11</sup>.

It happens to be the number of web pages captured by the [Common Crawl](https://commoncrawl.org/) project over the past 18 years. This epic web crawl is one of the most important in the world, perhaps second only in size to the continuous crawl that is performed by Internet Archive's [Wayback Machine](https://web.archive.org/). Common Crawl contains hundreds of billions of snapshots of how web pages looked over time. One might think of it as a recording of a significant part of the collective mind of humanity over the past two decades.

Such a recording is obviously precious to humanity. It would be a shame if anything happened to it. Of course, in the age of AI, how do we know what's original and what is imitation, simulation, confabulation?

So, we're happy to announce, that we cryptographically timestamped the whole thing! Every web page capture has been committed to the Bitcoin blockchain, so there is proof that the captured page (whenever it was captured) existed byte for byte in the Common Crawl as of 2026-09-26.

Ordinarily, the entire collection of individual items would have been prohibitively large for timestamping individual files. Fortunately, Common Crawl had already hashed each page snapshot and collected them in blocks of 3000. We were thus able to hash each of 110 million blocks in just a couple of weeks, and timestamp them in a single batch using the [OpenTimestamps](https://opentimestamps.org/) service.

Our hashes and timestamp attestations are arranged in such a way that verifying any one of these 330 billion snapshots requires just a few seconds and a few hundred KB of downloaded data. Our [verification tool](https://github.com/project-timestamper/stamper) lets you check for a web page's existence in a single command:

```
> npx tsx verify.ts
 --collection common_crawl_blocks --capture 0 https://en.wikipedia.org
```
 with a quick response indicating success or failure:
```
Success! Capture 0 (https://en.wikipedia.org/ at 20260915155254) is in CC-MAIN-2026-39, its CDX block is attested by Bitcoin block 968666 (000000000000000000010fb95a4fa547171edc525077191cbb74dc54acfaf0aa) as of 2026-09-26T09:35:20Z, and the WARC payload SHA-1 matches 3I42H3S6NNFQ2MSVX7XZKYAYSCX5QBYJ
```

We're grateful to the Common Crawl Foundation for their work building and maintaining the web capture collection, and for providing open APIs and open data. We hope to continue to timestamp the data as the crawl continues in the coming months and years.