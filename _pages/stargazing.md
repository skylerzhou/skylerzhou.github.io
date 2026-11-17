---
layout: page
title: Stargazing
permalink: /stargazing/
nav: false
description:
_styles: >
  /* Same look as the cloud collecting page (_pages/clouds.md), with a
     gear line under each card's meta row and support for video clips. */

  /* ---------- language toggle ---------- */
  .star-lang-toggle {
    display: flex;
    gap: 0.4rem;
    justify-content: flex-end;
    margin: -0.5rem 0 1.5rem;
    font-size: 0.85rem;
  }
  .star-lang-toggle button {
    background: none;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    padding: 0.2rem 0.85rem;
    cursor: pointer;
    color: var(--global-text-color);
    transition: all 0.15s ease-in-out;
  }
  .star-lang-toggle button.active {
    background: var(--global-theme-color);
    color: var(--global-bg-color);
    border-color: var(--global-theme-color);
  }
  /* default state: hide Chinese so the no-JS fallback shows English */
  .lang-zh { display: none; }
  /* in ZH mode: hide English, show Chinese with explicit display per element type */
  body.lang-zh .lang-en { display: none; }
  body.lang-zh span.lang-zh,
  body.lang-zh a.lang-zh { display: inline; }
  body.lang-zh p.lang-zh,
  body.lang-zh div.lang-zh,
  body.lang-zh h1.lang-zh,
  body.lang-zh h2.lang-zh,
  body.lang-zh h3.lang-zh,
  body.lang-zh h4.lang-zh,
  body.lang-zh h5.lang-zh,
  body.lang-zh h6.lang-zh,
  body.lang-zh section.lang-zh,
  body.lang-zh article.lang-zh,
  body.lang-zh li.lang-zh { display: block; }

  /* ---------- preface ---------- */
  .star-preface {
    line-height: 1.7;
    color: var(--global-text-color);
    margin-bottom: 2.5rem;
  }

  /* ---------- table of contents ---------- */
  .star-toc {
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    padding: 1.2rem 1.5rem;
    margin-bottom: 3rem;
    background: var(--global-card-bg-color, transparent);
  }
  .star-toc h2 {
    font-size: 1.1rem;
    margin: 0 0 0.4rem;
    border: none;
    padding: 0;
  }
  .star-toc .star-toc-hint {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    margin-bottom: 0.85rem;
  }
  .star-toc ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.35rem 1.5rem;
  }
  @media (min-width: 600px) {
    .star-toc ol { grid-template-columns: 1fr 1fr; }
  }
  .star-toc li {
    font-size: 0.93rem;
  }
  .star-toc a {
    color: var(--global-text-color);
    text-decoration: none;
    border-bottom: 1px dotted transparent;
    transition: border-color 0.15s ease;
  }
  .star-toc a:hover {
    border-bottom-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }
  .star-toc .toc-num {
    color: var(--global-text-color-light);
    margin-right: 0.4rem;
    font-variant-numeric: tabular-nums;
  }

  /* ---------- sections ---------- */
  .star-section {
    margin-top: 3.5rem;
    scroll-margin-top: 80px;
  }
  .star-section h2.star-section-title {
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 0.4rem;
    margin-bottom: 1.6rem;
    font-size: 1.35rem;
    font-weight: 500;
  }
  .star-section .section-num {
    color: var(--global-text-color-light);
    margin-right: 0.5rem;
    font-variant-numeric: tabular-nums;
  }
  .star-section-empty {
    color: var(--global-text-color-light);
    font-style: italic;
    font-size: 0.9rem;
  }

  /* ---------- cards ---------- */
  /* Layout: photo or clip on the left, text on the right.
     Stacks vertically on narrow screens. */
  .star-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.2rem;
  }
  .star-card {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1.4rem;
  }
  .star-card-img {
    flex: 0 0 60%;
    width: 60%;
    max-width: 60%;
  }
  .star-card-img img,
  .star-card-img video {
    width: 100%;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.08);
    display: block;
  }
  .star-card-img video { background: #000; }
  .star-card-body {
    flex: 1 1 auto;
    min-width: 0;
  }
  @media (max-width: 576px) {
    .star-card { flex-direction: column; gap: 0.85rem; }
    .star-card-img { flex-basis: auto; width: 100%; max-width: 100%; }
  }
  .star-card-title {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0 0 0.25rem;
    color: var(--global-text-color);
  }
  .star-card-meta {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem 0.8rem;
    margin-bottom: 0.25rem;
  }
  .star-card-meta .sep {
    color: var(--global-divider-color);
  }
  .star-card-gear {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    margin: 0;
  }
  .star-card-desc {
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--global-text-color);
    margin: 0.6rem 0 0;
  }

  /* back-to-top inside section */
  .star-back-to-toc {
    display: inline-block;
    margin-top: 1rem;
    font-size: 0.8rem;
    color: var(--global-text-color-light);
    text-decoration: none;
  }
  .star-back-to-toc:hover { color: var(--global-theme-color); }
---

<!-- prettier-ignore-start -->

<div class="star-lang-toggle" role="group" aria-label="language toggle">
  <button type="button" id="star-lang-en" class="active" onclick="setStarLang('en')">EN</button>
  <button type="button" id="star-lang-zh" onclick="setStarLang('zh')">中</button>
</div>

<!-- ============== PREFACE ============== -->
<section class="star-preface" id="preface">
  <h2 class="lang-en">Preface</h2>
  <h2 class="lang-zh">前言</h2>
  <p class="lang-en">{{ site.data.stargazing.preface_en }}</p>
  <p class="lang-zh">{{ site.data.stargazing.preface_zh }}</p>
</section>

<!-- ============== TABLE OF CONTENTS ============== -->
<nav class="star-toc" id="toc" aria-label="stargazing contents">
  <h2 class="lang-en">Contents</h2>
  <h2 class="lang-zh">目录</h2>
  <p class="star-toc-hint lang-en">Click a section to jump.</p>
  <p class="star-toc-hint lang-zh">点击可以跳转到对应章节</p>
  <ol>
    {% for section in site.data.stargazing.sections %}
      <li>
        <a href="#section-{{ forloop.index }}">
          <span class="toc-num">{{ forloop.index }}</span><span class="lang-en">{{ section.title_en }}</span><span class="lang-zh">{{ section.title_zh }}</span>
        </a>
      </li>
    {% endfor %}
  </ol>
</nav>

<!-- ============== SECTIONS ============== -->
{% for section in site.data.stargazing.sections %}
  {% assign n = forloop.index %}
  <section class="star-section" id="section-{{ n }}">
    <h2 class="star-section-title">
      <span class="section-num">Section {{ n }}:</span><span class="lang-en">{{ section.title_en }}</span><span class="lang-zh">{{ section.title_zh }}</span>
    </h2>

    {% if section.items and section.items.size > 0 %}
      <div class="star-list">
        {% for item in section.items %}
          <article class="star-card">
            {% if item.video %}
              <div class="star-card-img">
                <video
                  controls loop muted playsinline preload="metadata"
                  aria-label="{{ item.title_en | default: item.title_zh | escape }}"{% if item.poster %}
                  poster="{{ '/assets/img/stargazing/' | append: item.poster | relative_url }}"{% endif %}
                >
                  <source src="{{ '/assets/img/stargazing/' | append: item.video | relative_url }}" type="video/mp4" />
                </video>
              </div>
            {% elsif item.image %}
              <div class="star-card-img">
                <img
                  src="{{ '/assets/img/stargazing/' | append: item.image | relative_url }}"
                  alt="{{ item.title_en | default: item.title_zh | escape }}"
                  loading="lazy"
                />
              </div>
            {% endif %}

            <div class="star-card-body">
              <h3 class="star-card-title">
                <span class="lang-en">{{ item.title_en | default: item.title_zh }}</span>
                <span class="lang-zh">{{ item.title_zh | default: item.title_en }}</span>
              </h3>

              <div class="star-card-meta">
                <span>
                  <span class="lang-en">{{ item.location_en | default: item.location_zh }}</span>
                  <span class="lang-zh">{{ item.location_zh | default: item.location_en }}</span>
                </span>
                <span class="sep">·</span>
                <span>
                  <span class="lang-en">{{ item.time_en | default: item.time_zh }}</span>
                  <span class="lang-zh">{{ item.time_zh | default: item.time_en }}</span>
                </span>
              </div>

              {% if item.gear_zh or item.gear_en %}
                <p class="star-card-gear">
                  <span class="lang-en">{{ item.gear_en | default: item.gear_zh }}</span>
                  <span class="lang-zh">{{ item.gear_zh | default: item.gear_en }}</span>
                </p>
              {% endif %}

              <p class="star-card-desc">
                <span class="lang-en">{{ item.description_en | default: item.description_zh }}</span>
                <span class="lang-zh">{{ item.description_zh | default: item.description_en }}</span>
              </p>
            </div>
          </article>
        {% endfor %}
      </div>
    {% else %}
      <p class="star-section-empty">
        <span class="lang-en">To be photographed…</span>
        <span class="lang-zh">待拍摄……</span>
      </p>
    {% endif %}

    <a class="star-back-to-toc" href="#toc">
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
    // Same storage key as the cloud collecting page, so the choice carries across both.
    var LANG_KEY = 'siteLang';
    function applyLang(lang) {
      // Toggle body class to match the active language (default = English).
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
      var enBtn = document.getElementById('star-lang-en');
      var zhBtn = document.getElementById('star-lang-zh');
      if (enBtn) enBtn.classList.toggle('active', lang === 'en');
      if (zhBtn) zhBtn.classList.toggle('active', lang === 'zh');
    }
    // The EN / 中 buttons call this: switch, and remember the choice.
    window.setStarLang = function (lang) {
      applyLang(lang);
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    };
    // Default to English; honor the visitor's last click on the toggle.
    var initial = 'en';
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved === 'zh' || saved === 'en') initial = saved;
    } catch (e) {}
    applyLang(initial);

    // Clips play (muted, looping) only while they are on screen.
    // Skipped when the visitor has asked their device to reduce motion;
    // the player controls still work either way.
    var clips = document.querySelectorAll('.star-card-img video');
    var reduceMotion = false;
    try {
      reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}
    if (clips.length === 0 || reduceMotion || !('IntersectionObserver' in window)) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var clip = entry.target;
        if (entry.isIntersecting) {
          var started = clip.play();
          if (started !== undefined) started.catch(function () {});
        } else {
          clip.pause();
        }
      });
    }, { threshold: 0.5 });
    clips.forEach(function (clip) { observer.observe(clip); });
  })();
</script>

<!-- prettier-ignore-end -->
