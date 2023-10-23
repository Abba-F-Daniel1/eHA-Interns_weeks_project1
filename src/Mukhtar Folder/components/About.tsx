import { information } from "./Info";
import Software  from '../../assets//software.jpeg'

export const About = (): JSX.Element=> {
  return (
    <section className="max-w-4xl mx-auto mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center md:items-center justify-around">
          <div className="flex flex-col sm:flex-col gap-x-3 md:w-1/2">
            <h2 className="text-black text-2xl sm:text-5xl sm:font-bold font-serif">
              {information.title}
            </h2>
            <h4 className="text-red-500 text-2xl sm:text-4xl font-serif">
              {information.profession}
            </h4>
            <p className="font-serif text-1xl sm:text-1xl">
              {information.description}
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Software} alt='my image' className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
