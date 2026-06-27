const siteContent = {
  name: "Letriq",
  email: "letriqYT@gmail.com",
  discord: "notletriq",
  discordUrl: "https://discord.com/",
  discordAvatar: "assets/discord-avatar.png",
  robloxUrl: "https://www.roblox.com/",
  stats: {
    projects: "12+",
    years: "3+",
    specialties: "6",
    response: "24h",
  },
  availability: {
    title: "Open for new Roblox commissions.",
    copy: "Currently taking on short systems work, gameplay polish, and selected larger projects.",
    status: "Available this month",
    detail: "Best for 1-3 week scopes",
  },
  capabilities: [
    {
      icon: "S",
      title: "Scripting & Systems",
      text: "Datastores, shops, quests, rounds, progression, combat logic, admin tools, and scalable gameplay loops.",
    },
    {
      icon: "G",
      title: "Gameplay Polish",
      text: "Player feedback, balancing, camera feel, effects timing, onboarding, and the small details that make systems readable.",
    },
    {
      icon: "U",
      title: "UI Implementation",
      text: "Responsive Roblox interfaces, menus, inventory screens, shop flows, HUDs, and clean client-server behavior.",
    },
    {
      icon: "P",
      title: "Prototyping",
      text: "Fast playable builds for new mechanics, monetization concepts, tycoon loops, simulators, obbies, and minigames.",
    },
    {
      icon: "O",
      title: "Optimization",
      text: "Performance reviews, lag reduction, replication cleanup, memory checks, and script structure improvements.",
    },
    {
      icon: "L",
      title: "Launch Support",
      text: "Bug fixing, feature cleanup, pre-release checks, update support, and practical handoff documentation.",
    },
  ],
  works: [
    {
      title: "Anime Pulse Tower Defense Setup",
      description: "Anime Pulse clip showing tower defense settings, unit setup, and the player-facing configuration flow.",
      video: "https://youtu.be/S0q7UuuPW18",
      tags: ["Anime Pulse", "Tower Defense", "Units"],
    },
    {
      title: "Combat Mechanics Test",
      description: "Combat test showing melee mechanics, timing, hit feedback, and the feel of the core combat loop.",
      video: "https://youtu.be/m7pZJbzlLj0",
      tags: ["Combat", "Mechanics", "Hit Feedback"],
    },
    {
      title: "Sniper Gun System",
      description: "Sniper weapon system showing aiming feel, firing feedback, HUD behavior, and player-facing gun mechanics.",
      video: "https://youtu.be/zigIRwqCTKs",
      tags: ["Gun System", "Sniper", "Combat"],
    },
    {
      title: "AK Gun System",
      description: "Automatic rifle system showing weapon handling, firing flow, reload-style feedback, and combat UI support.",
      video: "https://youtu.be/2spQo-1RqzQ",
      tags: ["Gun System", "AK", "Combat"],
    },
    {
      title: "Placement System",
      description: "Placement workflow showing preview behavior, positioning feedback, and player-controlled build interaction.",
      video: "https://youtu.be/V1JkN4IotAs",
      tags: ["Placement", "Build Mode", "UX"],
    },
    {
      title: "Price Variation System",
      description: "Economy UI demonstrating price variation, item values, purchase states, and clear player decision feedback.",
      video: "https://youtu.be/VK_yxDhgrRE",
      tags: ["Economy", "Pricing", "UI"],
    },
  ],
  contributions: [
    {
      game: "Anime Pulse",
      role: "Systems, interface flow, tower defense setup, units, pricing, and gameplay feature contribution",
      year: "2026",
      url: "https://www.roblox.com/games/78003352287107/Anime-Pulse",
      placeId: "78003352287107",
      image: "assets/anime-pulse-banner.png",
      stats: "Featured Roblox contribution",
      tags: ["Roblox", "Systems", "UI", "Units"],
    },
  ],
  pricing: [
    {
      name: "Quick Fix",
      price: "$25+",
      detail: "Small scripts, bug fixes, and targeted improvements.",
      featured: false,
      features: ["Clear scope before work starts", "Best for single features", "Fast handoff"],
    },
    {
      name: "Feature Build",
      price: "$100+",
      detail: "A complete Roblox system or polished gameplay feature.",
      featured: true,
      features: ["Planning and implementation", "Testing pass included", "Basic documentation"],
    },
    {
      name: "Prototype",
      price: "$300+",
      detail: "Playable prototype, core loop, or multi-system build.",
      featured: false,
      features: ["Milestone-based delivery", "Multiple connected systems", "Post-build support window"],
    },
  ],
};

const getYouTubeId = (value) => {
  if (!value) return "";
  const trimmed = value.trim();
  const directId = /^[a-zA-Z0-9_-]{11}$/.test(trimmed);
  if (directId) return trimmed;

  try {
    const url = new URL(trimmed);
    if (url.hostname.includes("youtu.be")) return url.pathname.replace("/", "");
    if (url.searchParams.has("v")) return url.searchParams.get("v");
    const embedMatch = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    return embedMatch ? embedMatch[1] : "";
  } catch {
    return "";
  }
};

const makeTag = (tag) => `<span class="tag">${tag}</span>`;

const renderVideo = (video, title) => {
  const id = getYouTubeId(video);
  const isLocalVideo = /\.(mp4|webm|ogg)$/i.test(video || "");

  if (isLocalVideo) {
    return `
      <div class="video-shell">
        <video controls preload="metadata" aria-label="${title}">
          <source src="${video}" />
        </video>
      </div>
    `;
  }

  if (!id) {
    return `
      <div class="video-shell">
        <div class="video-placeholder" aria-label="Video placeholder for ${title}">
          <div>
            <span class="play-mark">▶</span>
            <strong>Video Slot</strong>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="video-shell">
      <iframe
        src="https://www.youtube.com/embed/${id}"
        title="${title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>
  `;
};

const setText = (selector, text) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
};

const renderCapabilities = () => {
  const root = document.querySelector("[data-capabilities]");
  root.innerHTML = siteContent.capabilities
    .map(
      (item) => `
        <article class="capability-card">
          <span class="capability-icon">${item.icon}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
};

const renderWorks = () => {
  const root = document.querySelector("[data-work-grid]");
  root.innerHTML = siteContent.works
    .map(
      (item, index) => `
        <article class="work-card${index < 2 ? " featured-work" : ""}">
          ${renderVideo(item.video, item.title)}
          <div class="work-body">
            ${index < 2 ? '<span class="priority-badge">Featured</span>' : ""}
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="tag-row">${item.tags.map(makeTag).join("")}</div>
          </div>
        </article>
      `,
    )
    .join("");
};

const renderContributions = () => {
  const root = document.querySelector("[data-contribution-list]");
  root.innerHTML = siteContent.contributions
    .map(
      (item) => `
        <article class="game-showcase-card">
          <a class="game-art" href="${item.url}" target="_blank" rel="noreferrer" aria-label="Open ${item.game} on Roblox" data-place-id="${item.placeId}">
            <span class="game-art-glow"></span>
            <img class="game-thumbnail" src="${item.image || ""}" alt="" data-game-thumbnail />
            <span class="game-art-title">${item.game}</span>
            <span class="game-art-meta">${item.stats}</span>
          </a>
          <div class="game-showcase-body">
            <p class="eyebrow">Featured Contribution</p>
            <h3><a href="${item.url}" target="_blank" rel="noreferrer">${item.game}</a></h3>
            <p>${item.role}</p>
            <div class="tag-row">${item.tags.map(makeTag).join("")}</div>
          </div>
        </article>
      `,
    )
    .join("");
};

const renderPricing = () => {
  const root = document.querySelector("[data-pricing-grid]");
  root.innerHTML = siteContent.pricing
    .map(
      (item) => `
        <article class="price-card${item.featured ? " featured" : ""}">
          <h3>${item.name}</h3>
          <p>${item.detail}</p>
          <div class="price">${item.price} <small>starting</small></div>
          <ul class="feature-list">
            ${item.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
};

const renderContact = () => {
  document.querySelector(".brand-text").textContent = siteContent.name;
  document.querySelector("[data-footer-name]").textContent = siteContent.name;
  document.querySelector("[data-email-link]").textContent = siteContent.email;
  document.querySelector("[data-email-link]").href = `mailto:${siteContent.email}`;
  document.querySelector("[data-roblox-link]").href = siteContent.robloxUrl;
  document.querySelector("[data-discord-link]").textContent = siteContent.discord;
  document.querySelector("[data-discord-link]").href = siteContent.discordUrl;
  const discordAvatar = document.querySelector("[data-discord-avatar]");
  if (discordAvatar) discordAvatar.src = siteContent.discordAvatar;
  const discordName = document.querySelector("[data-discord-name]");
  if (discordName) discordName.textContent = siteContent.discord;
};

const hydrateRobloxThumbnails = async () => {
  const cards = document.querySelectorAll("[data-place-id]");
  await Promise.all(
    [...cards].map(async (card) => {
      const placeId = card.dataset.placeId;
      const image = card.querySelector("[data-game-thumbnail]");
      if (!placeId || !image) return;
      if (image.getAttribute("src")) {
        image.hidden = false;
        card.classList.add("has-thumbnail");
        return;
      }

      try {
        const response = await fetch(
          `https://thumbnails.roblox.com/v1/places/gameicons?placeIds=${placeId}&size=512x512&format=Png&isCircular=false`,
        );
        const payload = await response.json();
        const thumbnail = payload?.data?.[0]?.imageUrl;
        if (thumbnail) {
          image.src = thumbnail;
          image.hidden = false;
          card.classList.add("has-thumbnail");
        }
      } catch {
        image.hidden = true;
      }
    }),
  );
};

const wireContactForm = () => {
  const form = document.querySelector("[data-contact-form]");
  if (!form || form.action.includes("formsubmit.co")) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Roblox development inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nContact: ${data.get("contact")}\nProject type: ${data.get(
        "projectType",
      )}\n\nBrief:\n${data.get("brief")}`,
    );
    window.location.href = `mailto:${siteContent.email}?subject=${subject}&body=${body}`;
  });
};

const wireNavigation = () => {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const button = document.querySelector("[data-menu-button]");

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    header.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
    button.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      header.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      button.setAttribute("aria-label", "Open navigation");
    });
  });

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
};

const init = () => {
  setText("[data-stat-projects]", siteContent.stats.projects);
  setText("[data-stat-years]", siteContent.stats.years);
  setText("[data-stat-specialties]", siteContent.stats.specialties);
  setText("[data-stat-response]", siteContent.stats.response);
  setText("[data-availability-title]", siteContent.availability.title);
  setText("[data-availability-copy]", siteContent.availability.copy);
  setText("[data-availability-status]", siteContent.availability.status);
  setText("[data-availability-detail]", siteContent.availability.detail);
  setText("[data-current-year]", new Date().getFullYear());

  renderCapabilities();
  renderWorks();
  renderContributions();
  renderPricing();
  renderContact();
  hydrateRobloxThumbnails();
  wireContactForm();
  wireNavigation();
};

init();
