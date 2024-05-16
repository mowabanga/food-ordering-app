import Link from "next/link";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader="Our story" mainHeader="About us" />
        <div className=" text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            nesciunt in delectus quibusdam illum id commodi fugit voluptatum
            laborum. Provident esse ex placeat non alias est, dolor perspiciatis
            pariatur vero.
          </p>
          <p>
            Velit iusto perferendis recusandae expedita nam reiciendis ullam!
            Doloremque excepturi harum cum id necessitatibus reiciendis vero
            libero labore!
          </p>
          <p>
            Facilis aliquam ipsum, rerum ad repellat porro tenetur quidem odit
            soluta commodi.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader="Don't hesitate" mainHeader="Contact us" />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+25471225121"
          >
            +254 712 251 21
          </a>
        </div>
      </section>
      <section className="border-t p-8 text-center text-gray-600">
        &copy; 2024 All rights Reserved
      </section>
    </>
  );
}
