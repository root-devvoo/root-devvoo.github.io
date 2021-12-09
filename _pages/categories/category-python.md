---
title: "Python 프로그래밍"
layout: archive
permalink: categories/python
author_profile: true
sidebar_main: true
---

***

<!-- 공백이 포함되어 있는 카테고리 이름의 경우 site.categories['a b c'] 이런 형태로! -->
{% assign posts = site.categories.Python %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}