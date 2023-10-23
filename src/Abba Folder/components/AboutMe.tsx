import React from 'react';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from '../../assets/abba-img/ab_001.png';


const AboutMe: React.FC = () => {
  return (
    <section>
    <div className="text-center p-3" id="about">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Abba Daniel
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Intern Software Developer and Electrical/Electonics Engineer.
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        I am a graduate of Electrical/Electronics Technology/Engineering from the prestigious Abubakar Tafawa Balewa University, I am currently interning in eHealth Africa as a Software Developer. Join me down below and let's get cracking!
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
        <img src={Image} alt="About Me" />
      </div>
    </div>
    </section>
  );
};

export default AboutMe;
