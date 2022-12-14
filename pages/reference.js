import { useState } from "react";
import Image from "next/image";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import foodref from "../public/assets/foodref.png";
import appref from "../public/assets/appref.png";
import apiref from "../public/assets/apiref.png";

export default function Reference() {
  let [modalTitle, setModalTitle] = useState("");
  let [modalMessage, setModalMessage] = useState("");
  let [modalOpened, setModalOpened] = useState(false);

  function openModal(title, message) {
    setModalTitle(title);
    setModalMessage(message);
    setModalOpened(true);
  }

  return (
    <div>
      <Meta title="Low Carb Recipes: Reference" />

      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div
              className="hover:cursor-pointer sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-200 text-green-500 flex-shrink-0"
              onClick={() =>
                openModal(
                  "Food Reference",
                  "Food Reference on this Low Carb Recipes Application is using Wikipedia. Wikipedia is a multilingual free online encyclopedia written and maintained by a community of volunteers through open collaboration and a wiki-based editing system. Its editors are known as Wikipedians. Wikipedia is the largest and most-read reference work in history. It is consistently one of the 10 most popular websites ranked by Similarweb."
                )
              }
            >
              <Image src={foodref} alt="foodref" width="80" height="80" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                Food Reference
              </h2>
              <p className="leading-relaxed text-base">
                Food Reference on this Low Carb Recipes Application is using
                Wikipedia.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                Application Reference
              </h2>
              <p className="leading-relaxed text-base">
                Application Reference on this Low Carb Recipes Application is
                using Next.js and Vercel.
              </p>
            </div>
            <div
              className="hover:cursor-pointer sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-200 text-green-500 flex-shrink-0"
              onClick={() =>
                openModal(
                  "Application Reference",
                  "Application Reference on this Low Carb Recipes Application is using Next.js and Vercel. Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application. Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration."
                )
              }
            >
              <Image src={appref} alt="appref" width="80" height="80" />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div
              className="hover:cursor-pointer sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-200 text-green-500 flex-shrink-0"
              onClick={() =>
                openModal(
                  "API Reference",
                  "API or Application Programming Interface on this Low Carb Recipes is using RAPID API. RapidAPI is the world's largest API Marketplace ??? used by over one million developers to discover and connect to thousands of APIs. Using RapidAPI, developers can search and test the APIs, subscribe, and connect to the APIs ??? all with a single account, single API key and single SDK."
                )
              }
            >
              <Image src={apiref} alt="apiref" width="80" height="80" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                API Reference
              </h2>
              <p className="leading-relaxed text-base">
                API or Application Programming Interface on this Low Carb
                Recipes is using RAPID API.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Modal
        title={modalTitle}
        message={modalMessage}
        open={modalOpened}
        onClose={() => setModalOpened(false)}
      />
    </div>
  );
}
