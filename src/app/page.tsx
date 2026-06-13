import WebnoxLogoAnimation from "./components/WebnoxLogoAnimation";

export const metadata = {
  title: "Webnox Technologies Pvt Ltd",
  description:
    "Webnox Technologies Pvt Ltd — Innovative software solutions, web development, and digital transformation services.",
};

export default function Home() {
  return (
    <main id="home" className="splash-page">
      <section className="splash-center" aria-label="Webnox Technologies Logo Animation">
        <WebnoxLogoAnimation />
      </section>
    </main>
  );
}
