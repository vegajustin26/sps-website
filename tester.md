---
layout: featured
featured-img: /assets/background.jpg
featured-header: Society of Physics Students
featured-subheader: Meetings on Wednesdays at Noon in 206 Egan
title: Gang Shit
---
# About

{{ page.title }}

<hr />

## Welcome to our pages!

<ul>
{%- for page in site.pages -%}
    {%- if page.title.size -%}
        <li>{{ page.title | escape | strip }} (size {{ page.title.size }})</li>
    {%- else -%}
        {%- continue -%}
    {%- endif -%}
    
{%- endfor -%}
</ul>