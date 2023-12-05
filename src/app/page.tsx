import Nav from "@/components/nav";
import CustomerReview from "@/sections/customerReview";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import PopularProducts from "@/sections/popularProducts";
import Services from "@/sections/services";
import SpecialOffer from "@/sections/specialOffer";
import Subscribe from "@/sections/subscribe";
import SuperQuality from "@/sections/superQuality";
export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
