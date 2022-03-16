export const Projects = () => {
  return (
    <main className="text-white m-20">
      <h2 className="font-bold text-2xl underline text-center">Projects</h2>
      <ul className="my-10 space-y-10">
        <li className="bg-blue-700 opacity-60 rounded sm:h-64 flex flex-row">
          <div className="basis-2/6">
            <img src="./assets/weather-app.png" alt="weather app" className="p-2 h-full" />
          </div>
          <div className="basis-4/6">
            <h3 className="text-black text-center my-6 font-bold text-xl">Weather App</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-justify p-2">App allowing to search weather infos.</p>
              <a
                href="https://github.com/mhmdmrabet/weather-app"
                className="text-black text-right mr-4 underline"
              >
                Watch on Github
              </a>
            </div>
          </div>
        </li>
        <li className="bg-blue-700 opacity-60 rounded sm:h-64 flex flex-row">
          <div className="basis-2/6">
            <img src="./assets/which-movie.png" alt="which movie app" className="p-2 h-full" />
          </div>
          <div className="basis-4/6">
            <h3 className="text-black text-center my-6 font-bold text-xl">Which Movie</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-justify p-2">App allowing to search the details of a film.</p>
              <a
                href="https://github.com/mhmdmrabet/whichmovie"
                className="text-black text-right mr-4 underline"
              >
                Watch on Github
              </a>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
};
