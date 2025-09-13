import React, { useState } from 'react'

const Card = ({ project }) => {

    return (
        <section class="mx-auto w-80  p-5">
            <div class=" w-72 sm:w-80 h-fit group bg-black-card p-2 rounded-md cursor-pointer"

            >
                <div class="relative overflow-hidden">
                    <img class=" h-64 sm:h-60 w-full object-cover rounded-md" src={project.img} alt="" />
                    <div class="absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className='p-2 text-sm'>{project.description}</p>
                        <div className="flex flex-wrap p-2">
                            {project.skills.map((skill, index) => (
                                <span
                                    style={{ color: skill.color }}
                                    className="py-1 rounded-lg text-sm mr-2"
                                    key={skill.id}
                                >
                                    #{skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div class="absolute top-0 h-full z-50 w-full flex items-center justify-center transition-all duration-300">
        <p className="text-color font-bold text-3xl  group-hover:opacity-0">Hover me</p>
      </div>
                </div>
                <h2 class="my-6 text-sm md:text-xl capitalize">{project.name}</h2>
                {project.linksRepo.map((link, index) => (
                    <button className="bg-color w-10/12 flex justify-between  mb-2 hover:bg-green-700 py-2 px-3 rounded transition duration-300 ease-in-out text-repo">
                      <a
                        href={link.link}
                        target="_blank"
                        className="block"
                      >
                        View {link.type === 'Demo' ? link.type : link.type + ' Repository'}
                      </a>
                      {
                        link.type === 'Demo' ? ''
                        : <img
                        src="/images/githubblack.png"
                        className=" rounded"
                        alt="github"
                        width={20}
                        />
                      }
                    </button>
                  ))}
            </div>
        </section>
    )
}

export default Card