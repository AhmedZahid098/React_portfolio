import React from 'react';

const Content = () => {
    return (
        <section id="home" className="flex flex-col mx-auto md:grid md:grid-cols-2 gap-8">
    <div className="">
      <img className="
            md:h-screen md:w-full
            object-cover
            md:rounded-lg md:m-0
            mt-20
            mx-auto
            md:p-0
            rounded-full
            h-1/2
            w-1/2
          " src="https://raw.githubusercontent.com/AhmedZahid098/Portfolio/master/img/DSC_1441_edited.jpg" alt="my_picture" />
    </div>
    <div className="md:mt-60 px-8 md:px-8 lg:px-24">
      <h2 className="text-2xl font-bold">Hello I am</h2>
      <h1 className="hover:text-green-600 text-5xl font-extrabold my-2">Ahmed Zahid,</h1>
      <h2 className="hover:text-green-600 text-xl font-semibold">
        A Web Developer & An Electrical Engineer.
      </h2>
      <p className="my-6">
        I'm from Dubai, UAE. I like working with clients with engineering
        background and building their products with emphasis on business
        development approach and help them do business better online. React.JS
        and Django are the arsenals I would prefer for front-end and back-end
        respectively
      </p>
      <button className="
            px-3
            py-2
            dark:bg-gray-800
            bg-gray-300
            rounded-lg
            border-solid border-2 border-white
            hover:bg-white hover:text-green-500 hover:tranition-all
            duration-300
            ease-in-out
            font-semibold
          ">
        <a target="blank" className="" id="profile-link" href="https://github.com/AhmedZahid098">View my work</a>
      </button>
      {/* <!-- Contact info --> */}
      <div className="Contact-info">
        <p className="pt-4">
          <svg className="inline-block pr-2" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="35" height="35">    <path d="M19.077,4.928c-2.082-2.083-4.922-3.134-7.904-2.894C7.164,2.356,3.65,5.144,2.474,8.99 c-0.84,2.748-0.487,5.617,0.881,7.987L2.059,21.28c-0.124,0.413,0.253,0.802,0.67,0.691l4.504-1.207 c1.459,0.796,3.101,1.215,4.773,1.216h0.004c4.195,0,8.071-2.566,9.412-6.541C22.728,11.563,21.762,7.616,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767 c-0.125-0.167-1.019-1.353-1.019-2.581S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006 c0.178,0.007,0.375,0.016,0.562,0.431c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416 c-0.125,0.146-0.262,0.325-0.374,0.437c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728 c0.954,0.85,1.757,1.113,2.007,1.239c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978 s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812c0.25,0.125,0.416,0.187,0.478,0.291 C17.106,14.471,17.106,14.971,16.898,15.554z"/></svg>
          00971-50-374-1608
        </p>
        <a href="mailto:hafizahmedzahid.0@gmail.com"
          className="mt-4 block">
          <svg className="inline-block pr-2 underline-offset-2" width="35" height="35" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" ><path d="M55,10H9c-2.209,0-4,1.791-4,4v34c0,2.209,1.791,4,4,4h46c2.209,0,4-1.791,4-4V14C59,11.791,57.209,10,55,10z M55,45.738 C54.954,47,53.901,48,52.618,48H49.5L51,21L32,33L13,22l1.5,26h-3.118C10.099,48,9.046,47,9,45.738V16.289 c0-1.25,1.03-2.263,2.3-2.263h1.2L32,29l19.5-14.974h1.2c1.27,0,2.3,1.013,2.3,2.263V45.738z"/></svg>
          hafizahmedzahid.0@gmail.com
        </a>
        <a target="blank" href="https://www.linkedin.com/in/ahmed-zahid-122946a6/"
          className="linkedin mt-4 block">
          <svg className="inline-block pr-2" width="40" height="40" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" >    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/></svg>
          LinkedIn
        </a>
        <a target="blank" href="https://github.com/AhmedZahid098"
          className="github mt-4 block">
          <svg className="inline-block pr-2" width="40" height="40" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" >    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
          Github
        </a>
      </div>
    </div>
  </section>
  );
};

export default Content;
