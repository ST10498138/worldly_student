/*
   WORLDLY STUDENT - SCRIPT.JS
   Management of guides, modals and tools
   */


//  GUIDES Page 

document.addEventListener("DOMContentLoaded", () => {
  const guideForm = document.getElementById("guide-form");
  const formResponse = document.getElementById("form-response");

  if (guideForm) {
    guideForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Réinitialise les erreurs
      document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

      let valid = true;

      // Récupération des champs
      const fullName = guideForm.fullName.value.trim();
      const email = guideForm.email.value.trim();
      const phone = guideForm.phone.value.trim();
      const topic = guideForm.topic.value;
      const message = guideForm.message.value.trim();

      // Validation personnalisée
      if (fullName.length < 3) {
        document.getElementById("fullName-error").textContent = "Your name must be at least 3 characters long.";
        valid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent = "Please enter a valid email address.";
        valid = false;
      }

      if (phone && !/^[0-9+\-\s]{9,15}$/.test(phone)) {
        document.getElementById("phone-error").textContent = "Phone number must contain 9–15 digits.";
        valid = false;
      }

      if (!topic) {
        document.getElementById("topic-error").textContent = "Please select a request type.";
        valid = false;
      }

      if (message.length < 20) {
        document.getElementById("message-error").textContent = "Your message must be at least 20 characters long.";
        valid = false;
      }

      if (!valid) return;

      // Simulation AJAX
      formResponse.style.display = "block";
      formResponse.style.color = "#555";
      formResponse.textContent = "⏳ Sending your message...";

      setTimeout(() => {
        formResponse.textContent = "✅ Thank you! Your enquiry has been submitted successfully.";
        formResponse.style.color = "green";
        guideForm.reset();
      }, 1500);
    });
  }
});


(() => {
  const GUIDES = [
    {
      id: "g1",
      title: "Arrival and Adaptation",
      excerpt: "How to navigate a new environment and start fresh.",
      image: "_images/Ressources_aptation.jpg",
      likes: 15,
      content: `
        <h2>Welcome to the complete guide on arrival and adaptation</h2>
        
        <h3>TIP 1: Local Number </h3>
        <p>Buy a local SIM card immediately. It's the gateway to a bank account, housing, and employment.</p>
        
        <h3>TIP 2: The Essential Lifeline (Residency Permit)</h3>
        <p>Start the registration or residency permit application process without delay. The approval process is often lengthy; you need to begin the procedure as soon as possible.</p>
        
        <h3>TIP 3: Proof of Address</h3>
        <p>Get a letter of accommodation from me right away. It's essential for opening a bank account and moving forward with your other applications.</p>
      `
    },
    {
      id: "g2",
      title: "Administrative Order",
      excerpt: "Essential documents to have and how to obtain them.",
      image: "_images/Ressources_Administrative_order.jpg",
      likes: 8,
      content: `
        <h2>Essential Administrative Documents</h2>
        <p>This guide covers essential administrative documents: visa, residence permit, registration, bank accounts...</p>
        
        <h3>Tip 1: Your Visa is Your Entry Pass</h3>
        <p>Make sure your Long Stay Visa (VLS-TS) is valid (if required for your nationality). Check that it specifies your employment status (Student, Worker, etc.) to determine if you are authorized to work.</p>
        
        <h3>Tip 2: Prepare a Master File</h3>
        <p>Gather all the important documents before you leave: Birth and marriage certificates (if applicable), diplomas – have them translated and certified (apostilled) in your country. You'll need them for everything.</p>
        
        <h3>Tip 3: Validate Your Long-Stay Visa (VLS-TS) Without Delay</h3>
        <p>If your visa requires you to apply for a Residence Permit within two months, make an appointment at the Prefecture immediately, as processing times are long. If you have a Long-Stay Visa (VLS-TS), you must validate it online on the government website within three months of your arrival. This validation is essential for staying legally and traveling.</p>
        
        <h3>Tip 4: A Bank Account is Essential</h3>
        <p>Open an account. You will need a bank statement (RIB - Relevé d'Identité Bancaire) for rent payments, salary payments, and registration with Social Security.</p>
        <p><em>Reminder: A letter of accommodation from me will serve as proof of temporary residence.</em></p>
      `
    },
    {
      id: "g3",
      title: "Avoiding Bad Surprises",
      excerpt: "Tips for dressing well without breaking the bank.",
      image: "_images/Ressources_Tips.jpg",
      likes: 0,
      content: `
        <h2>Practical tips to avoid unpleasant surprises and manage your budget</h2>
        <h3>The Golden Rule: Invest in Key Pieces</h3>
        
        <h3>Tip 1: Quality Over Quantity</h3>
        <p>Focus your spending on five essential pieces (the uniform). A good coat, durable jeans, comfortable and versatile shoes, a white shirt, and a quality sweater. These items can be worn often and will last for years.</p>
        
        <h3>Tip 2: Choose Neutral Colors</h3>
        <p>Opt for black, white, gray, beige, and navy. They are easy to mix and match and never go out of style. You'll feel like you have many more outfits.</p>
        
        <h3>Tip 3: The Power of Secondhand (Thrift Stores)</h3>
        <p>Thrift stores are your best friends here! You can find designer, vintage, or new clothing for a fraction of the price. I'll take you to the best spots in the city.</p>
        
        <h3>Tip 4: Seasonal Sales and Clearance</h3>
        <p>Never buy at full price! Learn about sales cycles (often in January and July) and private sales. Now is the time to invest in a quality piece from Tip 1.</p>
      `
    },
    {
      id: "g4",
      title: "Student Jobs",
      excerpt: "A guide to help you integrate more easily.",
      image: "_images/Ressources_student_jobs.jpg",
      likes: 5,
      content: `
        <h2>How to find a student job, adapt your CV, and manage your schedule</h2>
        
        <h3>Tip 1: Target Key Student Sectors</h3>
        <p>Focus on fields that hire for shift work or weekends: food service (waiter, cook), retail (department stores), tutoring (if you're bilingual), or logistics/delivery.</p>
        
        <h3>Tip 2: The In-Person Candidate Beats the Online Candidate</h3>
        <p>Print your resume and drop it off in person! For cafes, restaurants, and shops, this is often the most effective way to demonstrate your motivation and availability.</p>
        
        <h3>Tip 3: Use University Networks</h3>
        <p>Universities often have a career services office or a job board. This is the number one source for finding jobs that understand the constraints of student life.</p>
      `
    },
    {
      id: "g5",
      title: "Language Improvement",
      excerpt: "A guide to speaking like a native and overcoming language barriers.",
      image: "_images/Ressources_languages.jpg",
      likes: 6,
      content: `
        <h2>Techniques and resources to progress quickly in a foreign language</h2>
        
        <h3>Tip 1: Change the Settings on All Your Devices</h3>
        <p>Set your phone, computer, and social media to the local language. You'll be forced to learn technical vocabulary quickly.</p>
        
        <h3>Tip 2: Language Exchanges (Tandem)</h3>
        <p>Find partners (often through apps or local groups) who want to learn your native language. You spend 30 minutes speaking their language and 30 minutes speaking yours. It's a win-win situation, and you make friends!</p>
        
        <h3>Tip 3: Think in the Foreign Language</h3>
        <p>Try to formulate your thoughts and internal monologues (what you're going to eat, what you need to buy) directly in the new language. This helps you move beyond mental translation.</p>
      `
    },
    {
      id: "g6",
      title: "Financial Management",
      excerpt: "How to effectively manage your student budget.",
      image: "_Images/pexels-rdne-7948104.jpg",
      likes: 6,
      content: `
        <h2>Budgets, useful apps, tips for saving money without sacrificing comfort</h2>
        <h3>Tip 1: Know the Real Cost of Living (The Three Pillars)</h3>
        
        <h4>Housing</h4>
        <p>This is the main expense. Set a realistic maximum (often 30 to 40% of your income) and don't exceed it.</p>
        
        <h4>Transportation</h4>
        <p>Check if a monthly pass is cheaper than individual tickets. It often is.</p>
        
        <h4>Food</h4>
        <p>Set a strict weekly budget for groceries and try to cook at home as much as possible.</p>
      `
    },
    {
      id: "g7",
      title: "Cultural Integration",
      excerpt: "How to get familiar and connect with locals.",
      image: "_images/Cultural_integration.jpg",
      likes: 6,
      content: `
        <h2>Making friends, understanding local customs, avoiding cultural misunderstandings</h2>
        
        <h3>Tip 1: Observe the Forms of Politeness</h3>
        <p>Pay attention to the basic rules: do people kiss each other on the cheek, shake hands, or just greet each other verbally? Do they use vous or tu (the formal you) quickly? Making the effort to respect these customs is greatly appreciated.</p>
        
        <h3>Tip 2: The Concept of Punctuality</h3>
        <p>In some countries, punctuality is sacred (arriving 5-10 minutes early is normal). In others, being 10-15 minutes late is common. Ask me what the custom is here so as not to offend anyone or make them wait unnecessarily.</p>
        
        <h3>Tip 3: Don't Spend Time Only With Foreigners</h3>
        <p>It's tempting, but limit the time you spend with only people from your home country. To improve your language and cultural awareness, make an effort to spend time with locals.</p>
      `
    },
    {
      id: "g8",
      title: "Making the Right Choices",
      excerpt: "Tips for choosing your studies wisely.",
      image: "_Images/pexels-pixabay-267582.jpg",
      likes: 6,
      content: `
        <h2>Tips for choosing a path, validating your options, and preparing your future</h2>
        
        <h3>Tip 1: Align Passion with Market Reality</h3>
        <p>Don't choose based solely on passion or convenience. Research sectors that are hiring in the country. A local degree in a high-demand field (Tech, Healthcare, Engineering, certain Service sector jobs) will greatly facilitate obtaining a work permit after your studies.</p>
        
        <h3>Tip 2: Consider the Recognition System</h3>
        <p>Check how your previous degrees are recognized here. You may need to complete bridging programs or specific preparatory years. Contact the equivalency service or the relevant organization to validate your initial level.</p>
        
        <h3>Tip 3: Prioritize Mobility (if the goal is to stay)</h3>
        <p>If your goal is to settle here, choose a program that offers mandatory internships or apprenticeships/work-study opportunities. Local work experience is the best way to guarantee a job after graduation.</p>
      `
    },
    {
      id: "g9",
      title: "Let's talk about health and well-being",
      excerpt: "the importance of sport",
      image: "_images/guide-sport.jpg",
      likes: 89,
      content: `
        <h2>Tips for choosing a path, validating your options, and preparing your future</h2>
        
        <h3>Tip 1: Align Passion with Market Reality</h3>
        <p>Don't choose based solely on passion or convenience. Research sectors that are hiring in the country. A local degree in a high-demand field (Tech, Healthcare, Engineering, certain Service sector jobs) will greatly facilitate obtaining a work permit after your studies.</p>
        
        <h3>Tip 2: Consider the Recognition System</h3>
        <p>Check how your previous degrees are recognized here. You may need to complete bridging programs or specific preparatory years. Contact the equivalency service or the relevant organization to validate your initial level.</p>
        
        <h3>Tip 3: Prioritize Mobility (if the goal is to stay)</h3>
        <p>If your goal is to settle here, choose a program that offers mandatory internships or apprenticeships/work-study opportunities. Local work experience is the best way to guarantee a job after graduation.</p>
      `
    },
    
  ];

  const containerSelector = ".guides-grid";

  // Helpers localStorage
  function storageKey(id) { return `ws_guide_likes_${id}`; }
  function getStoredLikes(id, fallback) {
    const v = localStorage.getItem(storageKey(id));
    return v !== null ? Number(v) : fallback;
  }
  function setStoredLikes(id, n) {
    localStorage.setItem(storageKey(id), String(n));
  }

  // Render guides
  function renderGuides(guidesToShow) {
    const grid = document.querySelector(containerSelector);
    if (!grid) return;
    
    grid.innerHTML = "";
    guidesToShow.forEach(g => {
      const likes = getStoredLikes(g.id, g.likes);
      const card = document.createElement("div");
      card.className = "guide-card";
      card.dataset.id = g.id;
      card.innerHTML = `
        <img src="${g.image}" alt="${escapeHtml(g.title)}">
        <p class="pub-date">Publication date: 2025</p>
        <h3>${escapeHtml(g.title)}</h3>
        <p class="excerpt">${escapeHtml(g.excerpt)}</p>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;">
          <div class="guide-like">
            <span class="heart">❤️</span>
            <span class="like-count" data-id="${g.id}">${likes}</span>
          </div>
          <div>
            <button class="btn primary open-guide" data-id="${g.id}">Read the article</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    attachCardEventListeners();
  }

  function attachCardEventListeners() {
    document.querySelectorAll(".open-guide").forEach(btn => {
      btn.addEventListener("click", () => openModalForGuide(btn.dataset.id));
    });
    document.querySelectorAll(".like-count").forEach(el => {
      el.addEventListener("click", () => incrementLike(el.dataset.id));
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, m => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"
    }[m]));
  }

  // Modal
  let currentModal = null;
  function openModalForGuide(id) {
    if (currentModal) closeModal(currentModal);
    const g = GUIDES.find(x => x.id === id);
    if (!g) return;

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div class="modal-title-section">
            <strong style="font-size:1.2em;">${escapeHtml(g.title)}</strong>
            <div style="font-size:0.85em;opacity:0.9;margin-top:5px;">${escapeHtml(g.excerpt)}</div>
          </div>
          <div class="modal-actions">
            <button class="like-btn" data-id="${g.id}" type="button">
              ❤️ <span class="count">${getStoredLikes(g.id,g.likes)}</span>
            </button>
            <button class="close-modal" type="button" aria-label="Close">✕</button>
          </div>
        </div>
        <div class="modal-body">
          <img src="${g.image}" alt="${escapeHtml(g.title)}">
          <div class="full-content">${g.content}</div>
          <div class="suggested-guides">
            <h4>You might be interested in these other guides:</h4>
            <div class="suggested-list"></div>
          </div>
        </div>
        <div class="modal-footer">
          <small>Share this helpful guide with a friend</small>
          <div class="modal-footer-buttons">
            <a class="btn primary" href="tools.html" target="_blank">See tools</a>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    
    const modalEl = overlay.querySelector(".modal");
    requestAnimationFrame(() => modalEl.classList.add("show"));

    // Suggested guides
    const suggestedContainer = overlay.querySelector(".suggested-list");
    const suggested = shuffleArray(GUIDES.filter(x => x.id !== g.id)).slice(0,3);
    suggested.forEach(sg => {
      const item = document.createElement("div");
      item.className = "suggested-item";
      item.innerHTML = `<img src="${sg.image}" alt="${escapeHtml(sg.title)}"><h5>${escapeHtml(sg.title)}</h5>`;
      item.addEventListener("click", () => openModalForGuide(sg.id));
      suggestedContainer.appendChild(item);
    });

    // Events
    overlay.querySelectorAll(".close-modal").forEach(b => b.addEventListener("click", () => closeModal(overlay)));
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(overlay); });
    overlay.querySelectorAll(".like-btn").forEach(b => {
      b.addEventListener("click", () => {
        incrementLike(g.id);
        b.querySelector(".count").textContent = getStoredLikes(g.id, g.likes);
        b.classList.add("liked");
      });
    });

    function onKey(e) { if (e.key === "Escape") closeModal(overlay); }
    document.addEventListener("keydown", onKey);
    overlay._onKey = onKey;
    currentModal = overlay;
  }

  function closeModal(overlay) {
    if (!overlay) return;
    const modal = overlay.querySelector(".modal");
    if (modal) modal.classList.remove("show");
    setTimeout(() => {
      if (overlay && overlay.parentNode) overlay.remove();
    }, 300);
    if (overlay._onKey) document.removeEventListener("keydown", overlay._onKey);
    currentModal = null;
  }

  // Likes
  function incrementLike(id) {
    const guide = GUIDES.find(g => g.id === id);
    if (!guide) return;
    const next = getStoredLikes(id, guide.likes) + 1;
    setStoredLikes(id, next);
    document.querySelectorAll(`.like-count[data-id="${id}"]`).forEach(el => el.textContent = next);
    document.querySelectorAll(`.like-btn[data-id="${id}"]`).forEach(btn => {
      const span = btn.querySelector(".count");
      if (span) span.textContent = next;
      btn.classList.add("liked");
    });
    flashCard(id);
  }

  function flashCard(id) {
    const card = document.querySelector(`.guide-card[data-id="${id}"]`);
    if (!card) return;
    card.style.transform = "translateY(-6px)";
    setTimeout(() => card.style.transform = "", 220);
  }

  // Search
  function injectSearchBar() {
    const container = document.querySelector(".guide-intro") || document.querySelector(containerSelector)?.parentElement;
    if (!container) return;
    const wrapper = document.createElement("div");
    wrapper.className = "injected-search";
    wrapper.innerHTML = `<input type="search" placeholder="Search for a guide..."><button>Search</button>`;
    container.insertBefore(wrapper, container.querySelector(containerSelector));
    const input = wrapper.querySelector("input");
    input.addEventListener("input", () => {
      const term = input.value.trim().toLowerCase();
      renderGuides(GUIDES.filter(g => `${g.title} ${g.excerpt} ${g.content}`.toLowerCase().includes(term)));
    });
    wrapper.querySelector("button").addEventListener("click", () => {
      document.querySelector(containerSelector)?.scrollIntoView({behavior:"smooth"});
    });
  }

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function observeCards() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      });
    }, {threshold: 0.12});
    document.querySelectorAll(".guide-card, .card, .tool-item").forEach(el => io.observe(el));
  }

  function init() {
    const grid = document.querySelector(containerSelector);
    if (!grid) return;
    renderGuides(GUIDES);
    injectSearchBar();
    observeCards();
  }

  document.addEventListener("DOMContentLoaded", init);
})();


//  TOOLS Page 

document.addEventListener("DOMContentLoaded", () => {
  const toolItems = document.querySelectorAll(".tool-item");
  if (toolItems.length === 0) return;

  const searchInput = document.querySelector(".search-bar input");
  const searchBtn = document.querySelector(".search-bar button");
  const categoryBtns = document.querySelectorAll(".tool-categories .category-btn");

  let activeToolModal = null;

  // Clean closure of the modal
  function closeToolModal() {
    if (!activeToolModal || !activeToolModal.parentNode) return;
    
    const modal = activeToolModal.querySelector(".modal");
    if (modal) modal.style.opacity = "0";
    
    setTimeout(() => {
      if (activeToolModal && activeToolModal.parentNode) {
        activeToolModal.remove();
      }
      activeToolModal = null;
    }, 200);
  }

  // Opening of the modal
  function openToolModal(tool) {
    // Close any existing modal first
    if (activeToolModal) {
      closeToolModal();
      // Wait until the closure is complete
      setTimeout(() => createModal(tool), 250);
    } else {
      createModal(tool);
    }
  }

  function createModal(tool) {
  const title = tool.querySelector("h3")?.textContent || "Untitled Tool";
  const desc = tool.querySelector("p")?.textContent || "No description available.";
  const img = tool.querySelector("img")?.src || "";

  
  const category = tool.dataset.category || "BOOk";
  const author = tool.dataset.author || "RUE";

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay tool-modal-overlay";
  overlay.innerHTML = `
    <div class="modal tool-modal">
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="close-modal" type="button" aria-label="Close">✕</button>
      </div>
      <div class="modal-body">
        ${img ? `<img src="${img}" alt="${title}">` : ''}
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Author:</strong> ${author}</p>
        <p>${desc}</p>
      </div>
      <div class="modal-footer">
        <button class="btn primary download-btn" type="button">📥 Download</button>
      </div>
    </div>
  `;

    document.body.appendChild(overlay);
    activeToolModal = overlay;

    const modal = overlay.querySelector(".modal");
    const closeBtn = overlay.querySelector(".close-modal");
    const downloadBtn = overlay.querySelector(".download-btn");

    // Entrance animation
    requestAnimationFrame(() => {
      modal.style.opacity = "1";
    });

    // Closing
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeToolModal();
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeToolModal();
      }
    });

    modal.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // Download
    let isDownloading = false;
    downloadBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (isDownloading) return;
      isDownloading = true;

      downloadBtn.disabled = true;
      downloadBtn.innerHTML = `<span class="spinner"></span> Downloading...`;
      downloadBtn.classList.add("loading");

      setTimeout(() => {
        if (!activeToolModal) return;
        downloadBtn.innerHTML = "✅ Download complete!";
        downloadBtn.style.backgroundColor = "#2ecc71";
        downloadBtn.classList.remove("loading");

        setTimeout(() => closeToolModal(), 1500);
      }, 2500);
    });

    // ESC key
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeToolModal();
        document.removeEventListener("keydown", handleEsc);
      }
    };
    document.addEventListener("keydown", handleEsc);
  }

  // Click handlers
  toolItems.forEach(item => {
    const link = item.querySelector("a");
    if (link) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openToolModal(item);
      });
    }
  });

  // Search
  function searchTools() {
    const term = searchInput?.value.toLowerCase().trim() || "";
    toolItems.forEach(tool => {
      tool.style.display = tool.innerText.toLowerCase().includes(term) ? "" : "none";
    });
  }

  if (searchInput) searchInput.addEventListener("input", searchTools);
  if (searchBtn) searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchTools();
  });

  // Categories
  categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.textContent.toLowerCase();
      categoryBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      toolItems.forEach(tool => {
        const catText = tool.querySelector("strong:first-of-type")?.textContent.toLowerCase() || "";
        tool.style.display = catText.includes(category) ? "" : "none";
      });
    });
  });

  // Scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  toolItems.forEach(card => {
    card.classList.add("fade-in");
    observer.observe(card);
  });
});



// INJECTED CSS STYLES

const styles = document.createElement("style");
styles.textContent = `
  /* Spinner */
  .spinner {
    border: 2px solid #fff;
    border-top: 2px solid transparent;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Modal base (backup si pas dans CSS) */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    backdrop-filter: blur(4px);
  }

  .modal {
    background: #fff;
    border-radius: 12px;
    max-width: 600px;
    width: 90%;
    max-height: 85vh;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Tool modal specific */
  .tool-modal .modal-body {
    padding: 20px;
    overflow-y: auto;
    max-height: 60vh;
  }

  .tool-modal .modal-body img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .tool-modal .modal-header {
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  .tool-modal .modal-header h3 {
    margin: 0;
    font-size: 1.3em;
  }

  .tool-modal .modal-footer {
    padding: 15px 20px;
    border-top: 1px solid #e0e0e0;
    text-align: right;
    background: #f9f9f9;
  }

  .tool-modal .close-modal {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    font-size: 1.5em;
    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .tool-modal .close-modal:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }

  .download-btn.loading {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
document.head.appendChild(styles);

  // COMMUNITY
document.addEventListener("DOMContentLoaded", () => {
  const mainPost = document.querySelector("#main-post");
  const commentSection = document.querySelector("#comment-section");
  const emptyCommunity = document.querySelector(".empty-community");
  const filterBtns = document.querySelectorAll(".community-filters button");
  const likeDisplay = document.querySelector(".like-count");
  const addQuestionBtn = document.querySelector(".post-actions button");

  // Like status of the main post
  let liked = false;
  let likeCount = 12;

  // Added the Like button to the main post
  if (mainPost) {
    const likeBtn = document.createElement("button");
    likeBtn.className = "like-btn";
    likeBtn.innerHTML = "❤️ Like";
    mainPost.querySelector(".post-reactions").appendChild(likeBtn);

    likeBtn.addEventListener("click", () => {
      liked = !liked;
      likeCount += liked ? 1 : -1;
      likeDisplay.textContent = `❤️ ${likeCount} reactions`;
      likeBtn.style.color = liked ? "red" : "";
      likeBtn.textContent = liked ? "❤️ Unlike" : "❤️ Like";
    });
  }

  //community posts
  const fakePosts = [
    {
      id: 1,
      author: "Naru Uzumaki",
      text: "Does anyone know how to improve focus during exams?",
      likes: 8,
      subscribers: 3,
      time: Date.now() - 1000 * 60 * 15, 
    },
    {
      id: 2,
      author: "Eren Yeager",
      text: "Just published my new study method — ‘Attack Your Notes’!",
      likes: 21,
      subscribers: 10,
      time: Date.now() - 1000 * 60 * 50, 
    },
    {
      id: 3,
      author: "Kei Nagai",
      text: "I find that morning study sessions are more effective.",
      likes: 5,
      subscribers: 2,
      time: Date.now() - 1000 * 60 * 5, 
    },
  ];

  const commentContainer = commentSection?.querySelector(".comment-container");

  function renderPosts(posts) {
    if (!commentContainer) return;
    commentContainer.innerHTML = "";
    posts.forEach((p) => {
      const div = document.createElement("div");
      div.className = "comment-item";
      div.innerHTML = `
        <div class="comment-author">
          <div class="comment-avatar"></div>
          <div class="author-details">
            <h4>${p.author}</h4>
            <p>${Math.round((Date.now() - p.time) / 60000)} min ago</p>
          </div>
        </div>
        <div class="comment-text">
          <p>${p.text}</p>
        </div>
        <div class="comment-meta">
          <span class="meta-like">❤️ ${p.likes}</span>
          <span class="meta-sub">👥 ${p.subscribers} subs</span>
        </div>
      `;
      commentContainer.appendChild(div);
    });
  }


  renderPosts(fakePosts.sort((a, b) => b.time - a.time));

  // dynamic filters
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      let sortedPosts = [...fakePosts];
      const filter = btn.textContent.toLowerCase();

      if (filter.includes("recent")) sortedPosts.sort((a, b) => b.time - a.time);
      else if (filter.includes("liked")) sortedPosts.sort((a, b) => b.likes - a.likes);
      else if (filter.includes("subscriber")) sortedPosts.sort((a, b) => b.subscribers - a.subscribers);

      renderPosts(sortedPosts);
    });
  });

  // adding user comment
  if (commentSection) {
    const addCommentForm = document.createElement("form");
    addCommentForm.className = "add-comment-form";
    addCommentForm.innerHTML = `
      <textarea placeholder="Write your comment..." required></textarea>
      <button type="submit">Post comment</button>
    `;
    commentSection.appendChild(addCommentForm);

    addCommentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = addCommentForm.querySelector("textarea").value.trim();
      if (!text) return;

      const newPost = {
        id: fakePosts.length + 1,
        author: "You",
        text,
        likes: 0,
        subscribers: 0,
        time: Date.now(),
      };
      fakePosts.push(newPost);
      renderPosts(fakePosts.sort((a, b) => b.time - a.time));
      addCommentForm.reset();
    });
  }

  //  empty community
  const hasPosts = mainPost && mainPost.querySelector(".post-content");
  if (!hasPosts) {
    if (commentSection) commentSection.style.display = "none";
    if (emptyCommunity) emptyCommunity.style.display = "block";
  } else {
    if (emptyCommunity) emptyCommunity.style.display = "none";
    if (commentSection) commentSection.style.display = "block";
  }
});


// CONTACT US LOGIC
document.addEventListener("DOMContentLoaded", () => {
  const mapDiv = document.getElementById("map");
  if (!mapDiv) return;

  // Création de la carte centrée sur Johannesburg
  const map = L.map("map").setView([-26.2041, 28.0473], 12);

  // Fond de carte
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Informations du bureau
  const location = {
    coords: [-26.2041, 28.0473],
    popup: `
      <div style="text-align:center">
        <h3 style="margin-bottom:5px;">Worldly Student HQ</h3>
        <p><i class="fas fa-map-marker-alt"></i> 123 International Street, Johannesburg</p>
        <p><i class="fas fa-phone"></i> +27 890 436 234</p>
        <p><i class="fas fa-envelope"></i> <a href="mailto:info@worldlystudent.com">info@worldlystudent.com</a></p>
        <div style="margin-top:8px;">
          <a href="#" style="color:#3b5998; margin-right:8px;"><i class="fab fa-facebook"></i></a>
          <a href="#" style="color:#E1306C; margin-right:8px;"><i class="fab fa-instagram"></i></a>
          <a href="#" style="color:#0077B5; margin-right:8px;"><i class="fab fa-linkedin"></i></a>
          <a href="#" style="color:#FF0000;"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    `
  };

  // Marqueur + popup
  const marker = L.marker(location.coords).addTo(map).bindPopup(location.popup);

  // Interaction : clic sur l’adresse dans le HTML
  const addressElement = document.querySelector(".contact-right h3 + p");
  if (addressElement) {
    addressElement.style.cursor = "pointer";
    addressElement.title = "Click to locate on the map";
    addressElement.addEventListener("click", () => {
      map.setView(location.coords, 15, { animate: true });
      marker.openPopup();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formResponse = document.getElementById("formResponse");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validation simple
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formResponse.textContent = "Please fill out all required fields.";
      formResponse.style.color = "red";
      return;
    }

    // Simule une requête AJAX
    formResponse.textContent = "Sending message...";
    formResponse.style.color = "#555";

    setTimeout(() => {
      formResponse.textContent = "✅ Your message has been sent successfully!";
      formResponse.style.color = "green";
      contactForm.reset();
    }, 1500);
  });
});


document.addEventListener("DOMContentLoaded", () => {

  /*  HOME PAGE  */

  // Smooth appearance of Our Mission cards
  const missionSection = document.querySelector(".info-section h2");
  const cards = document.querySelector(".cards");

  if (missionSection && cards) {
    missionSection.addEventListener("click", () => {
      cards.classList.toggle("visible");
      missionSection.classList.toggle("open");
    });
  }

  // Stats Section counter
  const counters = document.querySelectorAll(".stat span");
  const statsSection = document.querySelector(".stats");
  let active = false;

  function animateCounters() {
    counters.forEach(counter => {
      const text = counter.textContent;
      const number = parseInt(text.replace(/\D/g, ""));
      const symbol = text.replace(/[0-9]/g, "");
      let count = 0;
      const step = number > 500 ? 50 : number > 50 ? 5 : 1;

      const interval = setInterval(() => {
        count += step;
        if (count >= number) {
          clearInterval(interval);
          counter.textContent = `${symbol}${number}`;
        } else {
          counter.textContent = `${symbol}${count}`;
        }
      }, 30);
    });
  }

  if (statsSection) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !active) {
          animateCounters();
          active = true;
          setTimeout(() => active = false, 2000);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
  }

  // Our Vision fade-in
  const visionSection = document.querySelector(".vision-section");
  if (visionSection) {
    const visionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visionSection.classList.add("visible");
        }
      });
    }, { threshold: 0.5 });
    visionObserver.observe(visionSection);
  }

  /*  GALLERY  */

  const galleryImages = document.querySelectorAll(".gallery img");
  if (galleryImages.length > 0) {
    const modal = document.createElement("div");
    modal.id = "imageModal";
    modal.innerHTML = `
      <span class="close-modal">&times;</span>
      <img class="modal-content" id="modalImage">
      <div id="caption"></div>
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = modal.querySelector(".close-modal");

    galleryImages.forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        captionText.textContent = img.alt;
        document.body.style.overflow = "hidden";
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }

  /* ABOUT PAGE  */

  const aboutSections = document.querySelectorAll(".about-container, .about-section, .about-quote");
  if (aboutSections.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-visible");
        }
      });
    }, { threshold: 0.2 });

    aboutSections.forEach(section => observer.observe(section));
  }

  // Animation du titre “About Our Story”
  const title = document.querySelector(".about-text h1");
  if (title) {
    const words = title.textContent.split(" ");
    title.textContent = "";

    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.classList.add("animate-title");
      span.style.animationDelay = `${i * 0.15}s`;
      title.appendChild(span);
    });
  }
});
