export const Projects = () => {
  return (
    <main className="text-white m-10">
      <h2 className="font-bold text-5xl text-center">Projects</h2>
      <ul className="my-10 space-y-10">
        <li className="bg-gray-400 rounded sm:h-64 flex flex-row">
          <div className="basis-2/6">
            <img
              src={'/static/images/weather-app.png'}
              alt="weather app"
              className="h-full mr-0 mt-8 mb-16 ml-0 p-4 rounded-3xl"
            />
          </div>
          <div className="basis-4/6">
            <h3 className="text-black text-center my-6 font-bold text-3xl">Weather App</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-justify p-2">App allowing to search weather infos.</p>

              <div className="flex justify-center">
                <a
                  href="https://weather-app-pied-omega.vercel.app/"
                  className="text-black text-right mr-4 underline"
                >
                  Watch online
                </a>
                <a
                  href="https://github.com/mhmdmrabet/weather-app"
                  className="text-black text-right mr-4 underline"
                >
                  Watch on Github
                </a>
              </div>
              <div className="">
                <ul className="p-0 mr-1 flex flex-row flex-wrap justify-end gap-1 text-base">
                  <li> -- </li>
                  <li>TypeScript</li>
                  <li>ReactJS</li>
                  <li>ViteJS</li>
                  <li>AdonisJS</li>
                  <li>PostgreSQL</li>
                  <li> -- </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="bg-gray-400 rounded sm:h-64 flex flex-row">
          <div className="basis-2/6">
            <img
              src={'/static/images/which-movie.png'}
              alt="which movie app"
              className="h-full mr-0 mt-8 mb-16 ml-0 p-4 rounded-3xl"
            />
          </div>
          <div className="basis-4/6">
            <h3 className="text-black text-center my-6 font-bold text-3xl">Which Movie</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-justify p-2 text-">
                App allowing to search the details of a film.
              </p>

              <div className="flex justify-center">
                <a
                  href="https://whichmovie-one.vercel.app/"
                  className="text-black text-right mr-4 underline"
                >
                  Watch online
                </a>
                <a
                  href="https://github.com/mhmdmrabet/whichmovie"
                  className="text-black text-right mr-4 underline"
                >
                  Watch on Github
                </a>
              </div>
              <div className="">
                <ul className="p-0 mr-1 flex flex-row flex-wrap justify-end gap-1 text-base">
                  <li>--</li>
                  <li>TypeScript</li>
                  <li>ViteJS</li>
                  <li>TaildwindCSS</li>
                  <li>--</li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
};
