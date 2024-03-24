/**
 * this is a custom navigation controls component for the carousel as the navigation controls provided by the library has styling limitations
 * this can be improved by making it more customizable
 * creating the button component and allowing custom styles as well as labels, icons and more
 */

import Image from "next/image";

type NavControlsProps = {
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
};

const NavControls: React.FC<NavControlsProps> = ({
  handlePrevSlide,
  handleNextSlide,
}) => {
  return (
    <div className="flex gap-4 py-16 mt-16 until-lg:hidden">
      <div className="flex-grow" />

      <button
        className="rounded-full"
        onClick={handlePrevSlide}
        aria-label="Previous"
      >
        <Image
          className="rotate-180"
          width={30}
          height={30}
          src="/icons/chevron-circled.svg"
          alt="Previous"
        />
      </button>
      <button
        className="rounded-full"
        onClick={handleNextSlide}
        aria-label="Next"
      >
        <Image
          width={30}
          height={30}
          src="/icons/chevron-circled.svg"
          alt="Next"
        />
      </button>
    </div>
  );
};

export default NavControls;
