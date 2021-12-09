---
title: "취업을 준비하기 위한 자료 및 노트"
layout: archive
permalink: categories/getajob
author_profile: true
sidebar_main: true
---

***

<!-- 공백이나 한글 포함되어 있는 카테고리 이름의 경우 site.categories['블라블라'] 이런 형태로! -->
{% assign posts = site.categories.['취업'] %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}