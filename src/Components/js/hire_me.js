import React from 'react';

const Hire = () => {
    return (
        <section id="hire-me">
    <form id="form" action="https://www.freecodecamp.com/email-submit" method="post" className="
          form-input
          justify-items-center
          flex flex-col
          gap-5
          dark:text-white
          px-8
          md:px-14
          lg:px-24
          my-10
          md:mx-auto
          md:w-max
        ">
      <h3 className="text-4xl font-bold mb-5">Hire me</h3>
      <div className="form_name mb-6 flex flex-col lg:justify-self-center">
        <label className="block ml-2 mb-1 font-bold" htmlFor="Full_name">Full name</label>
        <input type="text" name="Full_name" id="Full_name" placeholder="Enter your name here" required="" className="
              form-input
              placeholder-gray-400
              focus:outline
              focus:shadow-outline
              focus:border-2
              focus:border-green-700
              pl-2
              sm:pr-28
              py-1
              rounded
            " />
      </div>
      <div className="form_email mb-5 flex flex-col lg:justify-self-center">
        <label className="block ml-2 mb-1 font-bold" htmlFor="Full_name">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email here" required="" className="
              form-input
              placeholder-gray-400
              focus:outline
              focus:shadow-outline
              focus:border-2
              focus:border-green-700
              pl-2
              sm:pr-28
              py-1
              rounded
            " />
      </div>
      <div className="
            form-textarea
            mb-5
            flex flex-col
            col-span-2
            md:justify-self-center
          ">
        <label className="block ml-2 mb-1 font-bold" htmlFor="phone_number">Message?
        </label>
        <textarea name="suggestions" id="suggestions" cols="75" rows="10"
          placeholder="Feel free to to contact me any time" className="
              form-textarea
              placeholder-gray-400
              focus:outline
              focus:shadow-outline
              focus:border-2
              focus:border-green-700
              pl-2
              sm:pr-20
              py-1
              rounded-lg
            "></textarea>
      </div>
      <div className="
            submit_form_input
            mb-5
            flex flex-col
            lg:justify-self-center
            col-span-2
          ">
        <input value="Submit" type="submit" id="submit" className="
              justify-center
              items-center
              mx-auto
              px-6
              py-2
              bg-gray-300
              dark:bg-gray-800
              rounded-lg
              border-solid border-2 border-white
              hover:bg-white hover:text-green-500 hover:tranition-all
              duration-300
              ease-in-out
              font-semibold
            " />
      </div>
    </form>
  </section>
    );
};

export default Hire;
