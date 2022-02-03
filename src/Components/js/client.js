import React from 'react';

const Client = (props) => {
    return (
    <figure className="flex flex-row rounded-xl bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-800
          transition-all
          duration-300
          ease-in-out">
      <img className="
            md:w-52 md:h-auto
            md:p-0
            md:rounded-xl
            rounded-full
            h-28
            w-28
            my-auto
            pl-1
            md:-ml-10
            object-contain
          "
        src={props.item.img}
        alt="" width="191" height="256" />
      <div className="m-5">
        <h3 className="font-bold text-lg hover:text-green-500">
          <a target="blank" href={props.item.companyWebsite}>
            {props.item.name}
          </a>
        </h3>
        <blockquote className="lg:h-48 h-auto pt-4">
          <p>
            {props.item.description}
          </p>
         <div className="text-sm">
          <div className="
              badge  
              text-gray-900
              inline-block
              mt-5
              mr-1
              w-max
              py-1
              px-3
              bg-gray-400
              rounded-lg
              border-solid border-2 border-green-500
             ">{props.item.tags[0]}
          </div>
          <div className="
              badge  
              text-gray-900
              inline-block
              mt-5
              mr-1
              w-max
              py-1
              px-3
              bg-gray-400
              rounded-lg
              border-solid border-2 border-green-500
             ">{props.item.tags[1]}
          </div>
           <div className="
              badge
              text-gray-900
              inline-block
              mt-5
              mr-1
              w-max
              py-1
              px-3
              bg-gray-400
              rounded-lg
              border-solid border-2 border-green-500
             ">{props.item.tags[2]}
          </div>
         </div>
          
        </blockquote>
      </div>
    </figure>

    );
};

export default Client;
