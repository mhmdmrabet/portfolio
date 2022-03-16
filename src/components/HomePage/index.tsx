export const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center text-white text-3xl">
        <img
          src="https://avatars.githubusercontent.com/u/58339336?v=4"
          className="rounded-full mb-4 border-4 border-blue-400/75 h-56"
          alt="avatar"
        />
        <div className="text-center text-2xl">
          <p className="">Hi 👋, I'm Mohamed M'rabet</p>
          <p className="">A passionate developer from Paris.</p>
        </div>
        <div className=" flex space-x-4 p-4">
          <a href="https://github.com/mhmdmrabet" target="blank">
            <img
              className="rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="mhmdmrabet"
              height="30"
              width="40"
            />
          </a>
          <a href="https://www.linkedin.com/in/mohamedmrabet/" target="blank">
            <img
              className="rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
              alt="mohamedmrabet"
              height="30"
              width="40"
            />
          </a>
          <a href="https://twitter.com/mrabetmohamed94" target="blank">
            <img
              className="rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/123/123728.png"
              alt="mrabetmohamed94"
              height="30"
              width="40"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
