const Navbar = () => {
  return (
    <nav className="bg-black w-screen">
      <div className="bg-black p-3 text-white flex items-center justify-between mx-auto w-10/12">
      <div className="text-lg font-bold">
        <img src="https://freeworld.org/assets/logo_white.1a84b669.svg" alt="Logo" className="h-11 my-3" />
      </div>
      <ul className="grid grid-flow-col gap-8 justify-end font-semibold text-lg">
        <li><a href="#" className="hover:underline">Donate</a></li>
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">How It Works</a></li>
        <li><a href="#" className="hover:underline">Meet The Team</a></li>
        <li><a href="#" className="hover:underline">Login</a></li>
        <li><a href="#" className="hover:underline border-2 border-white px-4 py-3">Apply Now</a></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
