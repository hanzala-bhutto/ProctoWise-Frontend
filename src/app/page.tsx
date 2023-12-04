import Footer from "@/components/Footer";
import CustomerReview from "@/components/customerReview";
import SpecialOffer from "@/components/specialOffer";
import Services from "@/components/Services";
import SuperQuality from "@/components/SuperQuality";
import PopularProducts from "@/components/PopularProducts";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Subscribe from "@/components/Subscribe";

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
