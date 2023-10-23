import React from "react";
import design from "../../assets/abba-img/graphics.png";
import code from "../../assets/abba-img/programming.png";
import electric from "../../assets/abba-img/electric.png";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="mt-5">
        <h3 className="text-3xl text-center py-1 dark:text-white">My Skills</h3>
        <p className="text-md py-2 text-center leading-8 text-gray-800 dark:text-gray-200">
          Over the years and through the help of good{" "}
          <span className="text-teal-500"> friends </span>
          and <span className="text-teal-500">online resources, </span> I am
          able to equip myself with these skills and knowledge.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Here are just a few:
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <img src={code} className="mx-auto" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2  ">
            Frontend Technologies
          </h3>
          <p className="py-2">
            Here are some of the Frontend programming languages I am good at.
          </p>
          <h4 className="py-4 text-teal-600">Languages</h4>
          <p className="text-gray-800 py-1">HTML</p>
          <p className="text-gray-800 py-1">CSS | Tailwind CSS | Bootstrap</p>
          <p className="text-gray-800 py-1">JavaScript</p>
          <p className="text-gray-800 py-1">ReactJs etc.</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <img src={design} className="mx-auto" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Graphic Design</h3>
          <p className="py-2">
            Good with layout, color selection and mixing both screen and paper
            and here are the tools I am good at.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Canva</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">CorelDraw etc.</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <img src={electric} className="mx-auto" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Electrical/Electronics Services
          </h3>
          <p className="py-2">
            Mastery my field of studies, here are tools I use for
            Electrical/Electronics trouble shooting, diagnosis and repairs.
          </p>
          <h4 className="py-4 text-teal-600">
            Electrical Tools and Software I Use
          </h4>
          <p className="text-gray-800 py-1">Meter</p>
          <p className="text-gray-800 py-1">Multisim | Livewire | Flux</p>
          <p className="text-gray-800 py-1">Tester</p>
          <p className="text-gray-800 py-1">Workstation etc.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
