---
title: "Ruby, Jekyll 기반 Github 블로그 커스터마이징"
layout: archive
permalink: categories/githublog
author_profile: true
sidebar_main: true
---

***

<!-- 공백이나 한글 포함되어 있는 카테고리 이름의 경우 site.categories['블라블라'] 이런 형태로! -->
{% assign posts = site.categories.Githublog %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}