import React from 'react';


const Projects = (props) => {
    return (

    <figure className="md:flex md:flex-row rounded-xl bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
      <img className="
            md:w-52 md:h-auto
            mx-auto
            md:p-0
            md:rounded-xl
            rounded-full
            h-32
            w-32
            pt-1
            object-cover
          "
        src={props.item.img}
        alt="" width="191" height="256" />
      <div className="m-5">
        <h3 className="md:text-left text-center font-bold text-lg">
          {props.item.name}
        </h3>
        <blockquote className="h-auto md:h-64 pt-4">
          <p>
            {props.item.description}
          </p>
        </blockquote>
        <button className="
              my-5
              md:mb-0
              py-2
              px-3
              font-semibold
              bg-gray-400
              rounded-lg
              border-solid border-2 border-white
              hover:bg-gray-200 hover:text-green-500 hover:tranition-transform dark:bg-gray-900
              duration-250
              ease-in-out
            ">
          <a className="" target="blank" href={props.item.sourceCode}>Source Code</a>
        </button>
      </div>
    </figure>


    );
};

export default Projects;
