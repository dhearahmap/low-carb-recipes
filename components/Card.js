import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
};

export default function Card(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://${process.env.NEXT_PUBLIC_RAPID_API_HOST}${props.data.image}`,
        options
      )
        .then((response) => response.blob())
        .then((response) => setImage(URL.createObjectURL(response)))
        .catch((e) => console.error(e));
    }, 250);
  }, []);

  try {
    return (
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <Link
          href={{
            pathname: "/detail",
            query: { data: JSON.stringify(props) },
          }}
        >
          <div className="flex relative">
            <Image
              alt="thumbnail"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={image ? image : ""}
              width="600"
              height="360"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
                {props.data.nutrients.totalCarbs} Calories
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3  ">
                {props.data.name}
              </h1>
              <p className="leading-relaxed line-clamp-3">
                {props.data.description}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
}
