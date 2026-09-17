---
layout: default-layout.html
title: "Protecting our knowledge of human genetic diversity"
date: 2026-09-16
width: narrow
tags: blog
---

Last month [we announced](/blog/genomes) the completion of an effort to timestamp millions of genomes of all kinds of organisms: animals, plants, bacteria and more. That effort did include the human genome. But, being humans ourselves, we wanted to go further to cryptographically secure authentic human genetic variations before AI (or anyone) has the capacity to muddy the record.

We chose to work with a collection of 2,504 human genomes published by the modestly named 1000 Genomes Project, a collaboration between many major research institutions around the world. These genomes were collected from individuals who were chosen to represent humans from a variety of places and ethnicities, together reflecting the genetic diversity of our species.

Just as we did for the genomes of millions of organisms, we wanted to "lock in" human genome variation by committing the existence of the sequences in this collection, in their current form, to the Bitcoin blockchain. Biomedical researchers, anthropologists, and science historians in the future will be able to rely on this source of genetic diversity with the same level of confidence as we do in 2026.

The human genome itself is approximately 3 billion bases, including 23 chromosomes (two copies of each) whose data in binary format could fit approximately on one CD ROM (remember those?). Because all humans have 99.9% identical DNA sequences, the genomes belonging to various individuals in this project were recorded as variants: that is, a variant file records not the whole genome sequence but instead just the differences between the individuals' genome sequence and a reference human genome, stored elsewhere. The advantage of this approach is not only that it saves data storage space: it also makes it easy to study human genetic diversity for any particular gene or region of the genome.

The minute variations in the DNA sequence revealed by such genome variants have high relevance for physiological differences between people, for explaining variations in health outcomes, and for the potential for individualized medical treatment. The diversity in genome variants also reveals information about the evolution of humans from earlier primates and the patterns of ancient human migration out of Africa to all continents.

We hashed each variant file in the collection, as well as numerous supporting files that allow the variant files to be correctly interpreted. These hashes were fed to an OpenTimestamps server to stamp proof of their existence forever on the Bitcoin blockchain.

We're glad to have secured the integrity of this database: it's a key resource for all of humanity and deserves to be protected from new "mutations" *in silico*.