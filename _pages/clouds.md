---
layout: page
title: cloud collection
permalink: /clouds/
nav: false
description: A slowly growing archive of clouds I've noticed.
_styles: >
  .cloud-lang-toggle {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }
  .cloud-lang-toggle button {
    background: none;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    padding: 0.25rem 0.9rem;
    cursor: pointer;
    color: var(--global-text-color);
    transition: all 0.15s ease-in-out;
  }
  .cloud-lang-toggle button.active {
    background: var(--global-theme-color);
    color: var(--global-bg-color);
    border-color: var(--global-theme-color);
  }
  .cloud-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  @media (min-width: 768px) {
    .cloud-grid { grid-template-columns: 1fr 1fr; }
  }
  .cloud-card {
    display: flex;
    flex-direction: column;
  }
  .cloud-card img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  }
  .cloud-meta {
    margin-top: 0.6rem;
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .cloud-caption {
    margin-top: 0.4rem;
    font-style: italic;
    line-height: 1.45;
  }
  .lang-zh { display: none !important; }
  body.lang-zh .lang-en { display: none !important; }
  body.lang-zh .lang-zh { display: revert !important; }
---

<div class="cloud-lang-toggle" role="group" aria-label="language toggle">
  <button type="button" id="cloud-lang-en" class="active" onclick="setCloudLang('en')">EN</button>
  <button type="button" id="cloud-lang-zh" onclick="setCloudLang('zh')">中</button>
</div>

<p class="lang-en">
  Clouds I've stopped to look at, with a note on where and when. The list grows slowly.
</p>
<p class="lang-zh">
  我停下来仰望的云，附上时间与地点。这份清单生长得很慢。
</p>

<div class="cloud-grid">
  {% for cloud in site.data.clouds %}
    <div class="cloud-card">
      <img
        src="{{ '/assets/img/clouds/' | append: cloud.image | relative_url }}"
        alt="{{ cloud.caption_en | escape }}"
        loading="lazy"
      />
      <div class="cloud-meta">
        <span>{{ cloud.date | date: "%B %-d, %Y" }}</span>
        <span class="lang-en">{{ cloud.location_en }}</span>
        <span class="lang-zh">{{ cloud.location_zh }}</span>
      </div>
      <div class="cloud-caption">
        <span class="lang-en">{{ cloud.caption_en }}</span>
        <span class="lang-zh">{{ cloud.caption_zh }}</span>
      </div>
    </div>
  {% endfor %}
</div>

<script>
  function setCloudLang(lang) {
    document.body.classList.toggle('lang-zh', lang === 'zh');
    document.getElementById('cloud-lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('cloud-lang-zh').classList.toggle('active', lang === 'zh');
    try { localStorage.setItem('cloudLang', lang); } catch (e) {}
  }
  (function () {
    var saved = null;
    try { saved = localStorage.getItem('cloudLang'); } catch (e) {}
    if (saved === 'zh') setCloudLang('zh');
  })();
</script>
