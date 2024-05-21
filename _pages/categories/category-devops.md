---
title: "DevOps에 관련된 전반적인 노트"
layout: archive
permalink: categories/devops
author_profile: true
sidebar_main: true
---

***

{% assign posts = site.categories.DevOps %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}