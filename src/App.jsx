import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    src: "/assets/gallery1.webp",
    alt: "Aku Aspila gallery image 1",
    className: "",
  },
  {
    src: "/assets/gallery2.webp",
    alt: "Aku Aspila gallery image 2",
    className: "",
  },
  {
    src: "/assets/gallery3.JPG.webp",
    alt: "Aku Aspila gallery image 3",
    className: "",
  },
  {
    src: "/assets/gallery4.JPG.webp",
    alt: "Aku Aspila gallery image 4",
    className: "",
  },
];

const partnerList = [
  "Mountain brands",
  "Editorial teams",
  "Film crews",
  "Expedition partners",
];

const services = ["Brand partnerships", "Photo & film", "Expeditions"];

function SectionHeading({ title, subtitle }) {
  return (
    <div className="space-y-4 text-center">
      {subtitle ? (
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-muted">
          {subtitle}
        </p>
      ) : null}
      <div className="flex items-center justify-center gap-3 sm:gap-5">
        <img
          src="/assets/Heading decoration.svg"
          alt=""
          aria-hidden="true"
          className="h-5 w-auto shrink-0 opacity-95"
        />
        <h2 className="font-display text-[2.1rem] uppercase leading-none tracking-[-0.03em] text-text sm:text-[2.7rem]">
          {title}
        </h2>
        <img
          src="/assets/Heading decoration.svg"
          alt=""
          aria-hidden="true"
          className="h-5 w-auto shrink-0 scale-x-[-1] opacity-95"
        />
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="py-8 sm:py-10">
      <img
        src="/assets/Divider.svg"
        alt=""
        aria-hidden="true"
        className="mx-auto h-auto w-full max-w-[34rem] opacity-85"
      />
    </div>
  );
}

function RevealSection({
  as: Tag = "section",
  children,
  className = "",
  root,
  ...props
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.24,
    margin: "-10% 0px -10% 0px",
    root,
  });

  const initial = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 };
  const animate = isInView ? { opacity: 1, y: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag className={className} {...props}>
        {children}
      </Tag>
    </motion.div>
  );
}

function App() {
  const scrollRef = useRef(null);
  const year = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-dvh overflow-hidden bg-background text-text">
      <div className="fixed left-1/2 top-1/2 h-[calc(100dvh-1.25rem)] w-[calc(100vw-1.25rem)] max-w-[760px] -translate-x-1/2 -translate-y-1/2 sm:h-[calc(100dvh-2rem)] sm:w-[min(760px,calc(100vw-2rem))]">
        <div className="h-full rounded-[26px] border-2 border-[rgba(122,59,42,0.85)] bg-[rgba(243,231,215,0.95)] p-[7px] shadow-frame">
          <div className="relative h-full rounded-[20px] border border-[rgba(122,59,42,0.45)] bg-surface paper-grain">
            <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(243,231,215,0)_22%,rgba(180,74,46,0.06))]" />
            <div className="pointer-events-none absolute inset-[10px] rounded-[14px] border border-[rgba(122,59,42,0.38)]" />

            <div
              ref={scrollRef}
              className="relative h-full overflow-y-auto scroll-smooth px-5 py-6 sm:px-8 sm:py-8"
            >
              <motion.section
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                className="flex min-h-[calc(100dvh-5rem)] flex-col justify-center gap-7 pb-4 pt-6 text-center sm:min-h-[760px] sm:gap-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src="/assets/Free the heels.svg"
                      alt="Free the heels"
                      className="w-full max-w-[11rem] opacity-95 sm:max-w-[12rem]"
                    />
                    <span className="hidden font-display text-[1.2rem] uppercase tracking-[0.06em] text-text sm:inline">
                      Free the spirit
                    </span>
                  </div>

                  <img
                    src="/assets/Heading decoration.svg"
                    alt=""
                    aria-hidden="true"
                    className="mx-auto h-4 w-auto opacity-80"
                  />

                  <img
                    src="/assets/Hero.svg"
                    alt="Aku Aspila illustration"
                    className="mx-auto w-full max-w-[18rem] opacity-95 sm:max-w-[20rem]"
                  />

                  <div className="space-y-4">
                    <h1 className="font-display text-[3.85rem] uppercase leading-[0.9] tracking-[-0.06em] text-accent sm:text-[5.9rem]">
                      Aku Aspila
                    </h1>
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.33em] text-muted sm:text-[0.82rem]">
                      Telemark skier & alpine mountaineer
                    </p>
                  </div>

                  <motion.a
                    href="#about"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.64, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto inline-flex rounded-full border border-[rgba(122,59,42,0.55)] px-6 py-2 font-display text-[1.05rem] uppercase tracking-[0.02em] text-accent transition-colors hover:bg-[rgba(196,74,42,0.08)]"
                  >
                    About Me
                  </motion.a>
                </div>
              </motion.section>

              <SectionDivider />

              <RevealSection
                root={scrollRef}
                className="space-y-6"
                id="intro"
              >
                <SectionHeading title="Welcome To My World" subtitle="Mountain Content" />
                <div className="mx-auto max-w-[32rem] space-y-4 text-center text-base leading-relaxed text-text sm:text-[1.08rem]">
                  <p>Creating authentic mountain content.</p>
                  <p>Pushing equipment in real alpine conditions.</p>
                </div>
              </RevealSection>

              <SectionDivider />

              <RevealSection
                root={scrollRef}
                className="space-y-8"
                id="gallery"
              >
                <SectionHeading title="Gallery" subtitle="Field Notes" />
                <div className="columns-1 gap-4 sm:columns-2 sm:gap-5">
                  {galleryImages.map((image) => (
                    <figure
                      key={image.src}
                      className={`gallery-figure mb-4 break-inside-avoid sm:mb-5 ${image.className}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full"
                      />
                    </figure>
                  ))}
                </div>
              </RevealSection>

              <SectionDivider />

              <RevealSection
                root={scrollRef}
                className="space-y-6"
                id="about"
              >
                <SectionHeading title="About Me" subtitle="Condensed Bio" />
                <div className="mx-auto max-w-[33rem] space-y-5 text-center text-base leading-relaxed text-text sm:text-[1.06rem]">
                  <p>
                    Aku Aspila creates mountain imagery from the inside of the day:
                    long approaches, shifting snow, cold transitions, and equipment
                    tested where it is actually meant to be used.
                  </p>
                  <p>
                    The work sits between telemark skiing, alpine travel, and human
                    powered expedition storytelling, with a focus on authenticity
                    over polish.
                  </p>
                </div>
              </RevealSection>

              <SectionDivider />

              <RevealSection
                root={scrollRef}
                className="space-y-6"
                id="work"
              >
                <SectionHeading title="Work With Me" subtitle="Collaborations" />
                <div className="mx-auto max-w-[28rem] space-y-4 text-center">
                  {services.map((service) => (
                    <div
                      key={service}
                      className="border-b border-[rgba(122,59,42,0.25)] pb-3"
                    >
                      <span className="font-display text-2xl text-text sm:text-[2rem]">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </RevealSection>

              <SectionDivider />

              <RevealSection
                root={scrollRef}
                className="space-y-6"
                id="partners"
              >
                <SectionHeading title="Partners" subtitle="Text List" />
                <div className="mx-auto max-w-[29rem] space-y-3 text-center text-lg leading-tight">
                  {partnerList.map((partner) => (
                    <p key={partner} className="font-display text-[1.9rem] text-text">
                      {partner}
                    </p>
                  ))}
                </div>
              </RevealSection>

              <SectionDivider />

              <RevealSection
                root={scrollRef}
                className="space-y-6"
                id="contact"
              >
                <SectionHeading title="Contact" subtitle="Reach Out" />
                <div className="mx-auto max-w-[24rem] space-y-4 text-center">
                  {["Email", "Instagram"].map((item) => (
                    <div
                      key={item}
                      className="border-b border-[rgba(122,59,42,0.25)] pb-3"
                    >
                      <span className="font-display text-3xl text-text">{item}</span>
                    </div>
                  ))}
                </div>
              </RevealSection>

              <SectionDivider />

              <RevealSection
                root={scrollRef}
                as="footer"
                className="pb-4 pt-2"
              >
                <p className="text-center text-sm uppercase tracking-[0.24em] text-muted">
                  Aku Aspila © {year}
                </p>
              </RevealSection>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
