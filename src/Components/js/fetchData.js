import React from 'react';
import projectsData from '../Data/projectsData';
import clientsData from '../Data/clientsData';
import Projects from './project';
import Client from './client'

const FetchData = () => {
    const Project = projectsData.map(item => {
        return (<Projects key={item.id} item={item} />)
    })
    const Clients = clientsData.map(item => {
        return (<Client key={item.id} item={item} />)
    })
    return (<div>

    {/* Projects tag line below */}
        <section
            id="projects"
            className="flex flex-col lg:grid lg:grid-cols-2 gap-5 md:gap-10 px-8 md:px-14 lg:px-24 mb-32">
        <h1 className="text-4xl font-bold md:col-span-2">Projects</h1>
        <p className="lg:col-span-2 justify-self-start -my-3 md:-my-8">
            Here are a few design projects I've worked on recently. Want to see more?
        <a href="https://www.linkedin.com/in/ahmed-zahid-122946a6/"> Send a message:
        555-555-1234</a>
        </p>
            {Project}        
    </section>
        
    {/* Clients tag line below */}
    <section
            id="client"
            className="flex flex-col gap-5 md:gap-10 px-8 md:px-24 lg:px-36 mb-32">
        <h1 className="text-4xl font-bold md:-ml-10">Clients</h1>
        <p className="-mt-3 md:-mt-8 md:-ml-10">
        I’ve had the pleasure of working with multiple companies, where I had the opportunity to design and
        implement the solutions for both frontend and backend.
        </p>
            {Clients}
            
        </section>
        
    </div>
    );
};
export default FetchData;
