---
layout: page
title: New to the Physics Major?
permalink: /freshman-faqs/
tags: resources
---

### Freshman FAQS

{%- include faq-autogen.html -%}

### People and Places to Know
[//]: # (Note for editors: the following is auto-generated from faculty.yml and places.yml)
[//]: # (Also did you know this is how you can do a comment in markdown?)
Your shortlist destination for the must-know people and places as a physics major.

#### The People

The following people can be great sources of information! Of course, there are many great people to talk to in the physics department. For a full list of administrators, faculty, and more, [click here!](https://cos.northeastern.edu/physics/people/)

{% for person in site.data.faculty %}
* {{ person.name }} - {{ person.title }} - <a href="mailto:{{ person.email }}">{{ person.email }}</a>
    
    {{ person.blurb }}

{% endfor %}

#### The Places

Here are some places you'll run into a lot.

{% for place in site.data.places %}
* {{ place.name }} - {{ place.location }}
    
    {{ place.blurb }}

{% endfor %}

