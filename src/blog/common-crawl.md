---
layout: default-layout.html
title: "Timestamping a giant record of the Web"
date: 2026-10-07
width: narrow
tags: blog
---

Our latest announcement from Project Timestamper concerns a number whose scale far exceeds anything we have worked with before. That number is 339 billion, or 3.39×10<sup>11</sup>.

It happens to be the number of web page snapshots captured by the [Common Crawl](https://commoncrawl.org/) project over the past 18 years. This epic web crawl is one of the most important in the world, perhaps second only in size to the continuous crawl that is performed by Internet Archive's [Wayback Machine](https://web.archive.org/). Common Crawl's hundreds of billions of snapshots save web pages precisely as they existed over the years, totalling more than 10 petabytes of snapshot data. One might think of it as a recording of a significant part of the collective thoughts of humanity over the past two decades.

Such a recording is obviously precious to us humans. It would be a shame if anything happened to it! As AI's capability to generate plausible data and hack databases continues to grow, how will we know what's original and what is modification, imitation, confabulation?

So we're happy to announce that we have cryptographically timestamped the whole thing! Every web page capture has been committed via a chain of hashes to the Bitcoin blockchain, so there is proof that each captured page snapshot (whenever it was captured) existed byte for byte in the Common Crawl collection as of 2026-09-26. Any alteration after that date will be detectable.

Ordinarily, timestamping the entire collection of individual snapshots would have been prohibitively slow: there are far too many items to process in a reasonable time. Fortunately, Common Crawl had already hashed all web page snapshots and collected the hashes in blocks of up to 3000 index entries. We were thus able to hash each of about 134 million blocks in just a few weeks, and timestamp those hashes in a single batch using the [OpenTimestamps](https://opentimestamps.org/) service.

Our resulting hashes and timestamp attestations are arranged in such a way that cryptographically verifying any one of these 339 billion snapshots requires just a few seconds and a few hundred KB of downloaded data. Our [verification tool](https://github.com/project-timestamper/stamper) lets you check for a snapshot's existence in a single command:

```
> npx tsx verify.ts --collection common_crawl_blocks --capture 0 https://en.wikipedia.org
```
with a quick response indicating success or failure:
```
Success! Capture 0 (https://en.wikipedia.org/ at 20260915155254) is in CC-MAIN-2026-39, its CDX block is attested by Bitcoin block 968666 (000000000000000000010fb95a4fa547171edc525077191cbb74dc54acfaf0aa) as of 2026-09-26T09:35:20Z, and the WARC payload SHA-1 matches 3I42H3S6NNFQ2MSVX7XZKYAYSCX5QBYJ
```

We're grateful to the Common Crawl Foundation for their work building and maintaining the web capture collection, and for providing open APIs and open data. We hope to keep timestamping new data as the Common Crawl continues in the coming months and years.