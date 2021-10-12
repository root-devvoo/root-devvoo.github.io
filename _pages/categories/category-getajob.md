---
title: "취업을 준비하기 위한 자료 및 노트"
layout: archive
permalink: categories/getajob
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.['취업'] %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
