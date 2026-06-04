---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 1
description:
_styles: >
  /* ---------- intro ---------- */
  .project-intro {
    line-height: 1.7;
    color: var(--global-text-color);
    margin-bottom: 2.5rem;
  }

  /* ---------- project cards ---------- */
  /* Layout: image on the left, text on the right.
     Stacks vertically on narrow screens. */
  .project-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.8rem;
  }
  .project-card {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1.6rem;
  }
  .project-card-img {
    flex: 0 0 50%;
    width: 50%;
    max-width: 50%;
  }
  .project-card-img img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.08);
    display: block;
  }
  .project-card-body {
    flex: 1 1 auto;
    min-width: 0;
  }
  @media (max-width: 576px) {
    .project-card { flex-direction: column; gap: 0.85rem; }
    .project-card-img { flex-basis: auto; width: 100%; max-width: 100%; }
  }
  .project-card-title {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 0 0.25rem;
    color: var(--global-text-color);
  }
  .project-card-title a {
    color: inherit;
    border-bottom: 1px dotted transparent;
    transition: border-color 0.15s ease;
  }
  .project-card-title a:hover {
    border-bottom-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }
  .project-card-meta {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    margin-bottom: 0.6rem;
  }
  .project-card-desc {
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--global-text-color);
    margin: 0;
  }
  .project-empty {
    color: var(--global-text-color-light);
    font-style: italic;
    font-size: 0.9rem;
  }
---

<!-- prettier-ignore-start -->

<div class="project-list">
  {% for project in site.data.portfolio.projects %}
    <article class="project-card">
      {% if project.image %}
        <div class="project-card-img">
          {% if project.url %}<a href="{{ project.url }}" target="_blank" rel="noopener">{% endif %}
          <img
            src="{{ '/assets/img/projects/' | append: project.image | relative_url }}"
            alt="{{ project.title | escape }}"
            loading="lazy"
          />
          {% if project.url %}</a>{% endif %}
        </div>
      {% endif %}

      <div class="project-card-body">
        <h2 class="project-card-title">
          {% if project.url %}
            <a href="{{ project.url }}" target="_blank" rel="noopener">{{ project.title }}</a>
          {% else %}
            {{ project.title }}
          {% endif %}
        </h2>

        {% if project.meta %}
          <div class="project-card-meta">{{ project.meta }}</div>
        {% endif %}

        <p class="project-card-desc">{{ project.description }}</p>
      </div>
    </article>
  {% else %}
    <p class="project-empty">Projects coming soon.</p>
  {% endfor %}
</div>

<!-- prettier-ignore-end -->
