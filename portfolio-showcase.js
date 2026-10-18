(() => {
    const videos = window.portfolioVideos || [];
    const showcases = document.querySelectorAll("[data-portfolio-categories]");
    if (!showcases.length) return;

    const modal = document.createElement("div");
    modal.className = "service-reel-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
        <div class="service-reel-dialog" role="dialog" aria-modal="true" aria-label="เล่นคลิป Facebook Reel">
            <button class="service-reel-close" type="button" aria-label="ปิดวิดีโอ">
                <i class="fas fa-xmark" aria-hidden="true"></i>
            </button>
            <div class="service-reel-frame">
                <iframe title="Facebook Reel" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>
            </div>
            <a class="service-reel-fallback" href="#" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook" aria-hidden="true"></i> หากเล่นไม่ได้ เปิดดูบน Facebook
            </a>
        </div>
    `;
    document.body.append(modal);

    const frame = modal.querySelector("iframe");
    const fallback = modal.querySelector(".service-reel-fallback");
    const closeButton = modal.querySelector(".service-reel-close");
    let previousFocus = null;

    function openPlayer(video, button) {
        previousFocus = button;
        fallback.href = video.url;
        frame.src = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=267&height=476`;
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        closeButton.focus();
    }

    function closePlayer() {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        frame.src = "about:blank";
        document.body.style.overflow = "";
        if (previousFocus) previousFocus.focus();
    }

    closeButton.addEventListener("click", closePlayer);
    modal.addEventListener("click", event => {
        if (event.target === modal) closePlayer();
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.classList.contains("open")) closePlayer();
    });

    showcases.forEach(showcase => {
        const categoryIds = (showcase.dataset.portfolioCategories || "")
            .split(",")
            .map(category => category.trim())
            .filter(Boolean);
        const matchingVideos = videos.filter(video => categoryIds.some(category =>
            video.category === category ||
            (category === "cleaning" && video.category.startsWith("clean-"))
        ));

        if (!matchingVideos.length) {
            showcase.hidden = true;
            return;
        }

        const grid = showcase.querySelector(".service-reel-grid");
        grid.innerHTML = matchingVideos.map((video, index) => `
            <article class="service-reel-card">
                <button class="service-reel-cover-button" type="button" data-index="${index}"
                    aria-label="เล่นคลิป ${video.title} บนเว็บไซต์">
                    ${video.thumbnail ? `<img src="${video.thumbnail}" alt="ภาพปก ${video.title}" loading="lazy">` : ""}
                    <span class="service-reel-play"><i class="fas fa-play" aria-hidden="true"></i></span>
                </button>
                <div class="service-reel-info">
                    <h3>${video.title}</h3>
                    <p>${video.description || "ชมผลงานจริงจากทีมช่างศิวกรแอร์ เซอร์วิส"}</p>
                    <a class="service-reel-link" href="${video.url}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-facebook" aria-hidden="true"></i> เปิดบน Facebook
                        <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                </div>
            </article>
        `).join("");

        grid.querySelectorAll(".service-reel-cover-button").forEach(button => {
            button.addEventListener("click", () => {
                openPlayer(matchingVideos[Number(button.dataset.index)], button);
            });
        });
    });
})();
