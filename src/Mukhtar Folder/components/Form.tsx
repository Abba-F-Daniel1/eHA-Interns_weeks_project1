import { useState } from "react";

type FormProps = {
  name: string;
  email: string;
  message: string;
};

export const FormInput = (): JSX.Element => {
  const [formData, setFormData] = useState<FormProps>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(formData.name && formData.email && formData.message !== ''){
        console.log(formData);
    }else{
        alert('Invalid Submission')
    }
    
  };

  return (
    <section className="max-w-4xl mx-auto mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center md:items-center justify-between">
          <div className="md:w-1/2 font-bold text-3xl">Contact Me</div>
          <form className="flex flex-col items-center justify-center  md:w-1/2">
            <div className="flex flex-row sm:flex-row items-center justify-between gap-x-10 mb-5">
              <input
                type="text"
                className="border border-solid border-blue-500 rounded-lg p-3"
                id="name"
                name="name"
                placeholder="Fullname"
                value={formData.name}
                onChange={handleInputChange} />
              <input
                type="email"
                className="border border-solid border-blue-500 rounded-lg p-3"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
             <textarea  className='border border-solid border-blue-500 rounded-lg p-3' placeholder="Write your message here....."/>     
            </div>
            <button className="bg-black text-white rounded-lg p-2 mt-3" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
