import { useState, useEffect } from "react";
import Card from "../components/Card";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
};

export default function List() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://low-carb-recipes.p.rapidapi.com/search",
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => console.error(err));
    }, 250);
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-2 mx-auto">
        <div class="flex flex-wrap -m-4">
          {data === null ? (
            <p class="mx-auto text-center font-bold mt-4">Loading...</p>
          ) : (
            data.map((item, index) => <Card key={index} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}