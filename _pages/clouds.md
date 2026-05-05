---
layout: page
title: cloud collection
permalink: /clouds/
nav: false
description:
_styles: >
  /* ---------- language toggle ---------- */
  .cloud-lang-toggle {
    display: flex;
    gap: 0.4rem;
    justify-content: flex-end;
    margin: -0.5rem 0 1.5rem;
    font-size: 0.85rem;
  }
  .cloud-lang-toggle button {
    background: none;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    padding: 0.2rem 0.85rem;
    cursor: pointer;
    color: var(--global-text-color);
    transition: all 0.15s ease-in-out;
  }
  .cloud-lang-toggle button.active {
    background: var(--global-theme-color);
    color: var(--global-bg-color);
    border-color: var(--global-theme-color);
  }
  /* default state: hide English so the no-JS fallback shows Chinese */
  .lang-en { display: none; }
  /* in EN mode: hide Chinese, show English with explicit display per element type */
  body.lang-en .lang-zh { display: none; }
  body.lang-en span.lang-en,
  body.lang-en a.lang-en { display: inline; }
  body.lang-en p.lang-en,
  body.lang-en div.lang-en,
  body.lang-en h1.lang-en,
  body.lang-en h2.lang-en,
  body.lang-en h3.lang-en,
  body.lang-en h4.lang-en,
  body.lang-en h5.lang-en,
  body.lang-en h6.lang-en,
  body.lang-en section.lang-en,
  body.lang-en article.lang-en,
  body.lang-en li.lang-en { display: block; }

  /* ---------- preface ---------- */
  .cloud-preface {
    line-height: 1.7;
    color: var(--global-text-color);
    margin-bottom: 2.5rem;
  }

  /* ---------- table of contents ---------- */
  .cloud-toc {
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    padding: 1.2rem 1.5rem;
    margin-bottom: 3rem;
    background: var(--global-card-bg-color, transparent);
  }
  .cloud-toc h2 {
    font-size: 1.1rem;
    margin: 0 0 0.4rem;
    border: none;
    padding: 0;
  }
  .cloud-toc .cloud-toc-hint {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    margin-bottom: 0.85rem;
  }
  .cloud-toc ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.35rem 1.5rem;
  }
  @media (min-width: 600px) {
    .cloud-toc ol { grid-template-columns: 1fr 1fr; }
  }
  .cloud-toc li {
    font-size: 0.93rem;
  }
  .cloud-toc a {
    color: var(--global-text-color);
    text-decoration: none;
    border-bottom: 1px dotted transparent;
    transition: border-color 0.15s ease;
  }
  .cloud-toc a:hover {
    border-bottom-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }
  .cloud-toc .toc-num {
    color: var(--global-text-color-light);
    margin-right: 0.4rem;
    font-variant-numeric: tabular-nums;
  }

  /* ---------- sections ---------- */
  .cloud-section {
    margin-top: 3.5rem;
    scroll-margin-top: 80px;
  }
  .cloud-section h2.cloud-section-title {
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 0.4rem;
    margin-bottom: 1.6rem;
    font-size: 1.35rem;
    font-weight: 500;
  }
  .cloud-section .section-num {
    color: var(--global-text-color-light);
    margin-right: 0.5rem;
    font-variant-numeric: tabular-nums;
  }
  .cloud-section-empty {
    color: var(--global-text-color-light);
    font-style: italic;
    font-size: 0.9rem;
  }

  /* ---------- cloud cards ---------- */
  .cloud-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .cloud-card { display: flex; flex-direction: column; }
  .cloud-card img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.08);
  }
  .cloud-card-title {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0.85rem 0 0.25rem;
    color: var(--global-text-color);
  }
  .cloud-card-meta {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem 0.8rem;
    margin-bottom: 0.6rem;
  }
  .cloud-card-meta .sep {
    color: var(--global-divider-color);
  }
  .cloud-card-desc {
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--global-text-color);
    margin: 0;
  }

  /* back-to-top inside section */
  .cloud-back-to-toc {
    display: inline-block;
    margin-top: 1rem;
    font-size: 0.8rem;
    color: var(--global-text-color-light);
    text-decoration: none;
  }
  .cloud-back-to-toc:hover { color: var(--global-theme-color); }
---

<!-- prettier-ignore-start -->

<div class="cloud-lang-toggle" role="group" aria-label="language toggle">
  <button type="button" id="cloud-lang-en" onclick="setCloudLang('en')">EN</button>
  <button type="button" id="cloud-lang-zh" class="active" onclick="setCloudLang('zh')">中</button>
</div>

<!-- ============== PREFACE ============== -->
<section class="cloud-preface" id="preface">
  <h2 class="lang-en">Preface</h2>
  <h2 class="lang-zh">前言</h2>
  <p class="lang-en">Placeholder for now.</p>
  <p class="lang-zh">placeholder for now</p>
</section>

<!-- ============== TABLE OF CONTENTS ============== -->
<nav class="cloud-toc" id="toc" aria-label="cloud collection contents">
  <h2 class="lang-en">Contents</h2>
  <h2 class="lang-zh">目录</h2>
  <p class="cloud-toc-hint lang-en">Click a section to jump.</p>
  <p class="cloud-toc-hint lang-zh">点击可以跳转到对应章节</p>
  <ol>
    {% for section in site.data.clouds.sections %}
      <li>
        <a href="#section-{{ forloop.index }}">
          <span class="toc-num">{{ forloop.index | prepend: '00' | slice: -2, 2 }}</span><span class="lang-en">{{ section.title_en }}</span><span class="lang-zh">{{ section.title_zh }}</span>
        </a>
      </li>
    {% endfor %}
  </ol>
</nav>

<!-- ============== SECTIONS ============== -->
{% for section in site.data.clouds.sections %}
  {% assign n = forloop.index %}
  <section class="cloud-section" id="section-{{ n }}">
    <h2 class="cloud-section-title">
      <span class="section-num">Section {{ n }}:</span><span class="lang-en">{{ section.title_en }}</span><span class="lang-zh">{{ section.title_zh }}</span>
    </h2>

    {% if section.clouds and section.clouds.size > 0 %}
      <div class="cloud-list">
        {% for cloud in section.clouds %}
          <article class="cloud-card">
            {% if cloud.image %}
              <img
                src="{{ '/assets/img/clouds/' | append: cloud.image | relative_url }}"
                alt="{{ cloud.title_en | default: cloud.title_zh | escape }}"
                loading="lazy"
              />
            {% endif %}

            <h3 class="cloud-card-title">
              <span class="lang-en">{{ cloud.title_en | default: cloud.title_zh }}</span>
              <span class="lang-zh">{{ cloud.title_zh | default: cloud.title_en }}</span>
            </h3>

            <div class="cloud-card-meta">
              <span>
                <span class="lang-en">{{ cloud.location_en | default: cloud.location_zh }}</span>
                <span class="lang-zh">{{ cloud.location_zh | default: cloud.location_en }}</span>
              </span>
              <span class="sep">·</span>
              <span>
                <span class="lang-en">{{ cloud.time_en | default: cloud.time_zh }}</span>
                <span class="lang-zh">{{ cloud.time_zh | default: cloud.time_en }}</span>
              </span>
              {% if cloud.rarity_zh or cloud.rarity_en %}
                <span class="sep">·</span>
                <span>
                  <span class="lang-en">{{ cloud.rarity_en | default: cloud.rarity_zh }}</span>
                  <span class="lang-zh">{{ cloud.rarity_zh | default: cloud.rarity_en }}</span>
                </span>
              {% endif %}
            </div>

            <p class="cloud-card-desc">
              <span class="lang-en">{{ cloud.description_en | default: cloud.description_zh }}</span>
              <span class="lang-zh">{{ cloud.description_zh | default: cloud.description_en }}</span>
            </p>
          </article>
        {% endfor %}
      </div>
    {% else %}
      <p class="cloud-section-empty">
        <span class="lang-en">Coming soon.</span>
        <span class="lang-zh">敬请期待。</span>
      </p>
    {% endif %}

    <a class="cloud-back-to-toc" href="#toc">
      <span class="lang-en">↑ Back to contents</span>
      <span class="lang-zh">↑ 返回目录</span>
    </a>
  </section>
{% endfor %}

<script>
  (function () {
    var BLOCK_TAGS = {
      DIV: 1, P: 1, H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1,
      SECTION: 1, ARTICLE: 1, LI: 1
    };
    function naturalDisplay(el) {
      return BLOCK_TAGS[el.tagName] ? 'block' : 'inline';
    }
    window.setCloudLang = function (lang) {
      // Toggle body class to match the active language (default = Chinese).
      document.body.classList.toggle('lang-en', lang === 'en');
      document.body.classList.toggle('lang-zh', lang === 'zh');
      // JS safety net: explicitly set inline display on every i18n element
      // so visibility never depends on tricky CSS keywords like `revert`.
      document.querySelectorAll('.lang-en').forEach(function (el) {
        el.style.display = (lang === 'en') ? naturalDisplay(el) : 'none';
      });
      document.querySelectorAll('.lang-zh').forEach(function (el) {
        el.style.display = (lang === 'zh') ? naturalDisplay(el) : 'none';
      });
      var enBtn = document.getElementById('cloud-lang-en');
      var zhBtn = document.getElementById('cloud-lang-zh');
      if (enBtn) enBtn.classList.toggle('active', lang === 'en');
      if (zhBtn) zhBtn.classList.toggle('active', lang === 'zh');
      try { localStorage.setItem('cloudLang', lang); } catch (e) {}
    };
    // Default to Chinese; honor the user's last explicit choice if they've toggled.
    var initial = 'zh';
    try {
      var saved = localStorage.getItem('cloudLang');
      if (saved === 'zh' || saved === 'en') initial = saved;
    } catch (e) {}
    window.setCloudLang(initial);
  })();
</script>

<!-- prettier-ignore-end -->
