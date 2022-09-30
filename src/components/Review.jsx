import { data } from "autoprefixer";
import React from "react";

const usersData = [
  {
    img: "../src/assets/img/image-emily.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid autem tempore exercitationem adipisci, dignissimos ea corporis repellendus. Incidunt, nihil maiores!",
    name: "Emily R.",
    position: "Marketing Director",
  },
  {
    img: "../src/assets/img/image-thomas.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid autem tempore exercitationem adipisci, dignissimos ea corporis repellendus. Incidunt, nihil maiores!",
    name: "Thomas S.",
    position: "Chief Operating Officer",
  },
  {
    img: "../src/assets/img/image-jennie.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid autem tempore exercitationem adipisci, dignissimos ea corporis repellendus. Incidunt, nihil maiores!",
    name: "Jennie F.",
    position: "Business Owner",
  },
];

function Review() {
  return (
    <div className="text-center py-[10rem]">
      <h3 className="uppercase text-3xl text-gray-400">Client Testimonials</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[5rem] text-center">
        {usersData.map((data, key) => (
          <div key={data.name} className="py-[5rem]">
            <img
              src={data.img}
              className="inline-block rounded-full"
              alt={data.name}
            />
            <p className="py-[5rem]">{data.content}</p>
            <h4 className="font-bold">{data.name}</h4>
            <p className="text-slate-400">{data.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
