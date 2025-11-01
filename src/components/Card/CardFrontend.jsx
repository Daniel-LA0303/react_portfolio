import React from 'react'

const CardFrontend = () => {
  return (

  <div className="layout-container flex h-full grow flex-col">
    <div className="px-4 py-16 flex flex-1 justify-center items-center">
      <div className="layout-content-container flex flex-col max-w-4xl flex-1 bg-gray-800/50 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            
            {/* Imagen */}
            <img
              alt="Project Image"
              className="w-full md:w-1/3 aspect-[4/3] object-cover rounded-lg shadow-lg"
              src="/images/project_frontend2.png"
            />

            {/* Contenido */}
            <div className="flex flex-col gap-4 flex-1">
              
              <div className="flex items-center gap-3">
                <span className="bg-primary-500/20 text-primary-300 text-xs font-semibold px-3 py-1 rounded-full">
                  Data Visualization
                </span>
              </div>

              <h2 className="text-white text-3xl font-bold leading-tight">
                Interactive Data Visualization
              </h2>

              <p className="text-[#9db0b9] text-base font-normal leading-relaxed">
                A dynamic web application that transforms complex datasets into engaging visual stories. Users can interact with charts and graphs to explore trends and insights in real-time.
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">React</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">Node.js</span>
                <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700 font-medium">Express</span>
                <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-700 font-medium">MongoDB</span>
                <span className="px-3 py-1 text-sm rounded-full bg-pink-100 text-pink-700 font-medium">Figma</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800 font-medium">Git</span>
              </div>

              {/* Botones */}
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="flex min-w-[120px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary-500 text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-300">
                  <span className="material-symbols-outlined">explore</span>
                  <span className="truncate">Explore</span>
                </button>

                <button className="flex min-w-[120px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-gray-700 text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-300">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.491.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span className="truncate">GitHub</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




  )
}

export default CardFrontend
