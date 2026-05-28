import { createFileRoute } from "@tanstack/react-router";

const HERO_IMG = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/856283034.jpg?k=16381c4e203051cacfe284077e99d1f3842624b10e0c248052b95874ca5e01a2&o=";
const BATH_IMG = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/856284368.jpg?k=896e79f70c6d6d3a1ab9eb6a8296cd64d25746f133b719061f0f96add3b90626&o=";
const POOL_IMG = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/856317542.jpg?k=6065f449b3f49c1a511d90caf8fd508deaaab99b18ec3eabeb84457c79af9d62&o=";
const VILLA_IMG = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/856284250.jpg?k=d7b9851ddf95dc2c07197a02be4cd27e05f5336f4cdbe334c8514f9acfe29ff6&o=";
const BAR_IMG = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/856296908.jpg?k=6231582c1930e0491eae1dbe45217d69da0da72cb2e10c4219c7068ad5c18bbe&o=";
const ROOM2_IMG = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/856284264.jpg?k=88ac36a9d2b4cc92af1f00e18e44ff92f4ad65501faaa8749d81f1e9c7ad3ec4&o=";
const SHOWER_IMG = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/856284347.jpg?k=65a6652bb13763c7ee3d368339f32f40ccb4069a66a35b8b2be7620fe3894540&o=";
const RELAX_IMG = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/856284299.jpg?k=562b87308ab42d7ac85e7ee3166926b7dcdc94906eb1ec9ce56857c94a3b81c4&o=";

const WHATSAPP_NUMBER = "27826764239";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Matjulu Kruger Lodge, I'd like to book a stay. Could you share availability and rates?"
)}`;
const BOOKING_URL = WHATSAPP_URL;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matjulu Kruger Lodge — Luxury stays near Kruger National Park" },
      { name: "description", content: "A boutique lodge in Matsulu, South Africa — infinity pool, spa, and mountain-view suites moments from Kruger National Park." },
      { property: "og:title", content: "Matjulu Kruger Lodge" },
      { property: "og:description", content: "Boutique lodge with infinity pool, spa & mountain-view suites near Kruger National Park." },
      { property: "og:image", content: HERO_IMG },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Home,
});

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between py-6 text-primary-foreground">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-serif text-xl tracking-wide md:text-2xl">Matjulu</span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.3em] opacity-80 md:inline">Kruger Lodge</span>
        </a>
        <ul className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] md:flex">
          <li><a href="#stay" className="opacity-80 transition hover:opacity-100">Stay</a></li>
          <li><a href="#experience" className="opacity-80 transition hover:opacity-100">Experience</a></li>
          <li><a href="#gallery" className="opacity-80 transition hover:opacity-100">Gallery</a></li>
          <li><a href="#contact" className="opacity-80 transition hover:opacity-100">Contact</a></li>
        </ul>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="border border-primary-foreground/60 px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] transition hover:bg-primary-foreground hover:text-primary"
        >
          Reserve
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img src={HERO_IMG} alt="Suite at Matjulu Kruger Lodge" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
      <Nav />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end container-px pb-20 pt-32 text-primary-foreground md:pb-28">
        <span className="eyebrow text-gold">Mpumalanga · South Africa</span>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]">
          Where the bushveld<br />meets quiet luxury.
        </h1>
        <p className="mt-6 max-w-xl text-base/relaxed text-primary-foreground/85 md:text-lg">
          A boutique lodge at the foothills of the Drakensberg escarpment — minutes from the gates of Kruger National Park.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-accent px-7 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-accent-foreground transition hover:bg-accent/90"
          >
            Reserve your stay
          </a>
          <a href="#stay" className="px-2 py-4 text-[0.72rem] uppercase tracking-[0.28em] underline-offset-8 opacity-90 hover:underline">
            Discover the lodge →
          </a>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="container-px mx-auto grid max-w-7xl gap-14 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-5">
          <span className="eyebrow">A retreat in the lowveld</span>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            Slow mornings, golden hours, untamed views.
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-2">
          <p className="text-lg leading-relaxed text-foreground/80">
            Tucked into the hillside of Matsulu, Matjulu Kruger Lodge is a small collection of mountain-view suites
            built for travellers who want the wild on their doorstep — and a soft place to land at the end of it.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Wake to the sound of birdsong, swim in the infinity pool as the mist lifts off the ridge, and end your
            day with cocktails as the sun drops behind the bush.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8 text-sm">
            <div>
              <dt className="eyebrow text-muted-foreground">From</dt>
              <dd className="mt-2 font-serif text-2xl">R850<span className="text-sm text-muted-foreground">/night</span></dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">To Kruger</dt>
              <dd className="mt-2 font-serif text-2xl">24<span className="text-sm text-muted-foreground"> mi</span></dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Suites</dt>
              <dd className="mt-2 font-serif text-2xl">4<span className="text-sm text-muted-foreground"> types</span></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

type Room = { name: string; size: string; bed: string; price: string; img: string; tag: string };
const ROOMS: Room[] = [
  { name: "Suite with Mountain View", tag: "Most loved", bed: "1 queen bed", size: "388 ft²", price: "R950", img: HERO_IMG },
  { name: "Deluxe Suite", tag: "Spacious", bed: "Queen bed · terrace", size: "388 ft²", price: "R1 050", img: BATH_IMG },
  { name: "Single Mountain Suite", tag: "For solo travellers", bed: "Twin bed", size: "320 ft²", price: "R850", img: ROOM2_IMG },
  { name: "Premier Single Suite", tag: "Quiet wing", bed: "Twin bed · garden", size: "340 ft²", price: "R950", img: RELAX_IMG },
];

function Rooms() {
  return (
    <section id="stay" className="bg-secondary/50 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">The Suites</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Rooms with a view.</h2>
          </div>
          <p className="max-w-md text-foreground/70">
            Each suite features mountain views, air-conditioning, a freestanding tub or rain shower, and a private terrace.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {ROOMS.map((r) => (
            <article key={r.name} className="group bg-card">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={r.img}
                  alt={r.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 bg-background/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-foreground">
                  {r.tag}
                </span>
              </div>
              <div className="flex items-start justify-between gap-6 p-6 md:p-8">
                <div>
                  <h3 className="font-serif text-2xl">{r.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.bed} · {r.size}</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-2xl">{r.price}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">per night</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const AMENITIES = [
  { t: "Infinity pool", d: "Edge-to-edge horizon over the valley." },
  { t: "Spa & wellness", d: "Treatments rooted in African botanicals." },
  { t: "Restaurant & bar", d: "Full English breakfast and Cocktail Fridays." },
  { t: "Airport shuttle", d: "Complimentary transfers from KMIA." },
  { t: "Free Wi-Fi", d: "Throughout the property and in every suite." },
  { t: "Private parking", d: "On-site, secure and complimentary." },
];

function Experience() {
  return (
    <section id="experience" className="bg-background py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">The experience</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">A lodge, not a hotel.</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Everything you need to slow down, gather, and head out into the wild — without anything you don't.
            </p>
            <div className="mt-10 overflow-hidden">
              <img src={POOL_IMG} alt="Infinity pool" className="aspect-[4/5] w-full object-cover" />
            </div>
          </div>

          <ul className="grid gap-px self-start bg-border lg:col-span-7 sm:grid-cols-2">
            {AMENITIES.map((a) => (
              <li key={a.t} className="bg-background p-8">
                <div className="mb-4 h-px w-8 bg-accent" />
                <h3 className="font-serif text-2xl">{a.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="relative overflow-hidden bg-primary py-28 text-primary-foreground md:py-36">
      <img src={VILLA_IMG} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="container-px relative z-10 mx-auto max-w-4xl text-center">
        <span className="eyebrow text-gold">Kruger, on the doorstep</span>
        <p className="mt-6 font-serif text-3xl leading-snug md:text-5xl">
          “The bush starts where the road ends — and the road ends at Matjulu.”
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-block border border-primary-foreground/70 px-8 py-4 text-[0.72rem] uppercase tracking-[0.28em] transition hover:bg-primary-foreground hover:text-primary"
        >
          Check availability
        </a>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: VILLA_IMG, alt: "Villas with private pools and hillside views", span: "md:col-span-2 md:row-span-2" },
  { src: BAR_IMG, alt: "Cocktail Fridays at the lodge bar" },
  { src: SHOWER_IMG, alt: "Walk-in shower with dark marble" },
  { src: ROOM2_IMG, alt: "Lounge area with sliding doors to balcony" },
  { src: BATH_IMG, alt: "Freestanding bathtub by floor-to-ceiling windows" },
];

function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="eyebrow">Inside the lodge</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">A closer look.</h2>
          </div>
        </div>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {GALLERY.map((g) => (
            <div key={g.src} className={`overflow-hidden ${g.span ?? ""}`}>
              <img src={g.src} alt={g.alt} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-secondary/50 py-24 md:py-32">
      <div className="container-px mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
        <div>
          <span className="eyebrow">Plan your stay</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Reserve a suite, plan a safari, or just say hello.
          </h2>
          <p className="mt-6 max-w-md text-foreground/75">
            Our team will help you arrange transfers, game drives, and dinner reservations.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block bg-primary px-7 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-primary-foreground transition hover:bg-primary/90"
          >
            Book on WhatsApp
          </a>
        </div>

        <dl className="grid grid-cols-1 gap-y-8 border-t border-border pt-8 sm:grid-cols-2">
          <div>
            <dt className="eyebrow text-muted-foreground">Address</dt>
            <dd className="mt-3 font-serif text-xl leading-snug">1203 Matjulu Street<br />Matsulu, South Africa</dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">Nearest airport</dt>
            <dd className="mt-3 font-serif text-xl leading-snug">Kruger Mpumalanga<br />Intl. (KMIA) — 24 mi</dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">Check-in</dt>
            <dd className="mt-3 font-serif text-xl">From 14:00</dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">Check-out</dt>
            <dd className="mt-3 font-serif text-xl">Until 11:00</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="eyebrow text-muted-foreground">WhatsApp & calls</dt>
            <dd className="mt-3 font-serif text-xl">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                +27 82 676 4239
              </a>
              <span className="block text-sm font-sans text-muted-foreground mt-1">
                matjulukrugerlodge@gmail.com
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary py-10 text-primary-foreground">
      <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] opacity-80 md:flex-row">
        <p className="font-serif text-base normal-case tracking-normal">Matjulu Kruger Lodge</p>
        <p>© {new Date().getFullYear()} · Matsulu, South Africa</p>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Intro />
      <Rooms />
      <Experience />
      <Quote />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
