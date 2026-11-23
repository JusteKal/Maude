(() => {
	const nav = document.querySelector(".nav");
	const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
	window.addEventListener("scroll", onScroll, { passive: true });
	onScroll();

	const menu = document.getElementById("menuButton");
	const links = document.getElementById("navLinks");
	const setMenu = (open) => {
		links.classList.toggle("open", open);
		menu.setAttribute("aria-expanded", String(open));
		menu.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
	};
	menu.addEventListener("click", () => setMenu(!links.classList.contains("open")));
	for (const link of links.querySelectorAll("a")) link.addEventListener("click", () => setMenu(false));

	const video = document.getElementById("heroVideo");
	const sound = document.getElementById("soundButton");
	const label = document.getElementById("soundLabel");
	const waves = document.getElementById("soundWaves");
	sound.addEventListener("click", () => {
		video.muted = !video.muted;
		if (!video.muted) {
			video.currentTime = 0;
			video.play();
		}
		sound.setAttribute("aria-pressed", String(!video.muted));
		label.textContent = video.muted ? "Activer le son" : "Couper le son";
		waves.setAttribute("d", video.muted ? "M16 9l5 6M21 9l-5 6" : "M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12");
	});

	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
	if (reduceMotion.matches) video.removeAttribute("autoplay");
	if (reduceMotion.matches) video.pause();
})();
