import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import siteHtml from "../site/suman.html?raw";

const TITLE = "Suman Industries - Engineering & Installation for Oil and Gas";
const DESCRIPTION =
  "Suman Industries, Vadodara: ISO 9001:2015 certified engineering, fabrication and installation services for the oil & gas industry — gas manifolds, hydrotesting equipment, pigtails and CGA fittings.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css",
      },
      { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
      { rel: "stylesheet", href: "/css/style.css" },
      { rel: "icon", href: "/images/fav.webp", type: "image/webp" },
    ],
  }),
  component: Index,
});

const SCRIPTS = [
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js",
  "https://unpkg.com/aos@2.3.1/dist/aos.js",
  "/js/custom.js",
];

function loadScript(src: string) {
  return new Promise<void>((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[data-si="${src}"]`);
    if (existing) return resolve();
    const el = document.createElement("script");
    el.src = src;
    el.async = false;
    el.dataset["si"] = src;
    el.onload = () => resolve();
    el.onerror = () => resolve();
    document.body.appendChild(el);
  });
}

function Index() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const src of SCRIPTS) {
        if (cancelled) return;
        await loadScript(src);
      }
      const aos = (window as unknown as { AOS?: { init: (o?: unknown) => void } }).AOS;
      aos?.init();
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Static clone has no PHP backend: send the enquiry through the visitor's mail client.
  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>('form[action="contact-process.php"]');
    if (!form) return;
    const onSubmit = (e: Event) => {
      e.preventDefault();
      const data = new FormData(form);
      const get = (k: string) => String(data.get(k) ?? "");
      const body = `Name: ${get("name")}\nEmail: ${get("email")}\nPhone: ${get("phone")}\n\n${get("message")}`;
      window.location.href = `mailto:info@sumanindustries.in.net?subject=${encodeURIComponent(
        get("subject") || "Website enquiry",
      )}&body=${encodeURIComponent(body)}`;
    };
    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: siteHtml }} />;
}
