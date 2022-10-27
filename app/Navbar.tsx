import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="h-12 bg-gray-700">
      <div className="h-full px-2 max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center h-full text-white">Playground</div>
      </div>
    </nav>
  );
};

export default Navbar;
