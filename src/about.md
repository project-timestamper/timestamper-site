---
layout: default-layout.html
title:  "About Project Timestamper"
width: narrow
---

Project Timestamper is an open-source effort to protect the integrity of humanity’s informational heritage in the age of generative AI. In this project, we are cryptographically timestamping valuable historical content onto the Bitcoin blockchain, thereby creating permanent proof of the existence of content as of the mid 2020s. We are creating these timestamps and sharing them with the public to ensure that human-generated content of the past can be clearly identified even after AI-generated content comes to dominate our culture.

So far, we have timestamped:

 * Millions of fiction and nonfiction books
 * Millions of audio music tracks
 * Millions of research papers
 * Nearly a million movies and TV shows

(We didn't need to download these materials -- instead, digests were already publicly availble for timestamping.)

In addition, we have created a service that automatically timestamps the database dumps of Wikipedia and other Wikimedia Foundation sites, including Wiktionary, Wikibooks, Wikiquote, Wikinews, Wikispecies, Wikiversity and Wikivoyage. We have also timestamped all visual art in WikiArt's archive.

In the near future we hope to timestamp more collections, including newspaper archives, sequenced genomes, patents, web archives, etc. And we encourage institutions that run important archival projects, such as the Internet Archive, Open Library, YouTube, and Google Books, to regularly timestamp the content in their databases as well.

Furthermore, we hope to make it easy for individuals to timestamp YouTube videos, web pages, social media posts, and other historical content that is of value to someone who wants to preserve the integrity of that content for future generations.

We also hope to make these timestamps easy for the public to find and verify, using a browser extension.

We appreciate all support! Code contributions, cooperation and other forms of support are gratefully accepted.

### Technical details

Our automated timestamping procedure works conceptually as follows:

![Timestamping workflow](/img/timestamping-flow_BW.png)

1. We select a collection of historical digital files to be timestamped. These files can be text, images, PDFs, database dumps, web pages, or any other digital content.
2. We use a secure hash algorithm (such as SHA-256) to produce a digest for each file.
3. We submit the digests to the OpenTimestamps service using an [opentimestamps client](https://www.npmjs.com/package/opentimestamps), which timestamps the digests onto the bitcoin blockchain. We save the timestamp record file that is returned.
4. We publish the digests and timestamp records so that anyone in the future can verify that the files existed on today’s date.


#### Acknowledgments

We are extremely grateful to the [OpenTimestamps project](https://opentimestamps.org/), founded by Peter Todd, for providing the software libraries and calendar services that make this project possible. Peter showed the way by [timestamping 750M objects in the Internet Archive](https://petertodd.org/2017/carbon-dating-the-internet-archive-with-opentimestamps) in 2017.

We also wish to express our gratitude to the many people who, sometimes at significant personal risk, have been involved in digitizing, curating, hosting, seeding, and otherwise making available millions of digital files that comprise much of humanity's important cultural and scientific heritage.
