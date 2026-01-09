---
title: Project Timestamper Blog
layout: default-layout.html
width: narrow
---

<ul class='blog-posts'>
{% for post in collections.blog | reverse %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
     &nbsp; <time class="post-date" datetime="{{ post.date }}">{{ post.date | date: "%B %e, %Y" }}</time>
  </li>
{% endfor %}
</ul>
