---
title: "엔코아 플레이데이터 알고리즘 특강 학습노트"
layout: archive
permalink: categories/playdatalgo
author_profile: true
sidebar_main: true
---

***

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=iceman-brandon&repo=TIL&theme=tokyonight)](https://github.com/iceman-brandon/TIL)

<!-- 공백이 포함되어 있는 카테고리 이름의 경우 site.categories['a b c'] 이런 형태로! -->
{% assign posts = site.categories.['Playdata Algo'] %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}