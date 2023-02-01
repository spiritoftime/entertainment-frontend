import attribution from "../assets/attribution.svg";

const Footer = () => {
  return (
    <footer className="min-w-full flex flex-col gap-2 p-4">
    <p className="text-gray-400	 mx-auto">Credits To:</p>
    <img
      className="w-[150px] mx-auto "
      alt="Attribution image to TMDB"
      src={attribution}
    />
  </footer>
  )
}

export default Footer
