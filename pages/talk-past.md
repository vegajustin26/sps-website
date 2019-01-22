---
layout: page
title: Past Co-op Talks
permalink: /talks/past/
tags: talks
---

{% for talk in site.data.past-talks %}

#### {{ talk.name }}

{{ talk.summary }}
{% endfor %}