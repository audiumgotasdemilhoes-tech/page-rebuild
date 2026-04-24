export function initializeAudimaxInteractions(root: ParentNode = document) {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const today = new Date();
  const formattedDate = `${today.getDate()} de ${months[today.getMonth()]} de ${today.getFullYear()}`;
  root.querySelectorAll<HTMLElement>("#topdate").forEach((element) => {
    element.textContent = formattedDate;
  });

  const units = String(Math.floor(Math.random() * 7) + 13);
  root.querySelectorAll<HTMLElement>("#units,#units2").forEach((element) => {
    element.textContent = units;
  });

  let total = 7200 + Math.floor(Math.random() * 1800);
  const setTimerText = (id: string, value: number) => {
    const element = root.querySelector<HTMLElement>(`#${id}`);
    if (element) element.textContent = String(value).padStart(2, "0");
  };
  const tick = () => {
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    setTimerText("th", hours);
    setTimerText("tm", minutes);
    setTimerText("ts", seconds);
    if (total > 0) total -= 1;
  };
  tick();
  const intervalId = window.setInterval(tick, 1000);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
  );

  const revealElements = Array.from(root.querySelectorAll<HTMLElement>(".r,.r-left,.r-right,.r-scale"));
  revealElements.forEach((element) => observer.observe(element));

  const faqButtons = Array.from(root.querySelectorAll<HTMLElement>(".faq-q"));
  const onFaqClick = (event: Event) => {
    const question = event.currentTarget as HTMLElement;
    const item = question.parentElement;
    if (!item) return;

    const isOpen = item.classList.contains("open");
    root.querySelectorAll<HTMLElement>(".faq-item").forEach((faqItem) => {
      faqItem.classList.remove("open");
      faqItem.querySelector<HTMLElement>(".faq-q")?.setAttribute("aria-expanded", "false");
      faqItem.querySelector<HTMLElement>(".faq-a")?.setAttribute("hidden", "");
    });

    if (!isOpen) {
      item.classList.add("open");
      question.setAttribute("aria-expanded", "true");
      item.querySelector<HTMLElement>(".faq-a")?.removeAttribute("hidden");
    }
  };

  faqButtons.forEach((button) => button.addEventListener("click", onFaqClick));

  const testimonialVideos = Array.from(root.querySelectorAll<HTMLVideoElement>(".testi-video video"));
  const onVideoPlay = (event: Event) => {
    const currentVideo = event.currentTarget as HTMLVideoElement;
    testimonialVideos.forEach((video) => {
      if (video !== currentVideo && !video.paused) video.pause();
    });
  };
  const onVideoWrapperClick = (event: Event) => {
    const target = event.target as HTMLElement | null;
    const video = target?.closest(".testi-video")?.querySelector<HTMLVideoElement>("video");
    if (!video || target?.tagName === "VIDEO") return;

    testimonialVideos.forEach((item) => {
      if (item !== video && !item.paused) item.pause();
    });

    if (video.paused) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  };
  testimonialVideos.forEach((video) => {
    video.controls = true;
    video.setAttribute("controlsList", "nodownload noplaybackrate noremoteplayback");
    video.setAttribute("disablePictureInPicture", "true");
    video.addEventListener("contextmenu", (event) => event.preventDefault());
    video.addEventListener("play", onVideoPlay);
    video.closest(".testi-video")?.addEventListener("click", onVideoWrapperClick);
  });

  return () => {
    window.clearInterval(intervalId);
    observer.disconnect();
    faqButtons.forEach((button) => button.removeEventListener("click", onFaqClick));
    testimonialVideos.forEach((video) => {
      video.removeEventListener("play", onVideoPlay);
      video.closest(".testi-video")?.removeEventListener("click", onVideoWrapperClick);
    });
  };
}
