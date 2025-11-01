import { faCode, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CardFullStackBackend = ({ project }) => {
  return (
    <div
      className="relative flex h-auto w-full flex-col dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="flex h-full grow flex-col items-center justify-center p-4 md:p-8">
        <div className="relative w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden @container">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                `url("${project.img}")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90"></div>
          </div>

          {/* Contenido */}
          <div className="relative flex flex-col justify-end p-6 @lg:p-8 @2xl:w-1/2 @2xl:ml-auto space-y-6 min-h-[450px]">
            <div className="space-y-4">
              <h1 className="text-white text-3xl font-bold leading-tight tracking-tight">
                {project.name}
              </h1>
              <p className="text-white text-base font-normal leading-relaxed">
                {project.description}
              </p>

              <div>
                <p className="text-white font-semibold mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">

                  {project.skills.map((projectD, index) => (
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {projectD.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {project.linksRepo.map((projectD, index) => (
                <a
                  href={`${projectD.link}`}
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg h-12 px-6 bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 hover:bg-white/30">
                  <FontAwesomeIcon icon={faCode} />
                  <span className="truncate">View {projectD.type} Code</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFullStackBackend
