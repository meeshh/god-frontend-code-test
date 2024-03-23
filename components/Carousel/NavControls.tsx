/**
 * this is a custom navigation controls component for the carousel as the navigation controls provided by the library has styling limitations
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

      <button className="rounded-full" onClick={handlePrevSlide}>
        <Image
          className="rotate-180"
          width={30}
          height={30}
          src="/icons/chevron-circled.svg"
          alt="Previous slide"
        />
      </button>
      <button className="rounded-full" onClick={handleNextSlide}>
        <Image
          width={30}
          height={30}
          src="/icons/chevron-circled.svg"
          alt="Next slide"
        />
      </button>
    </div>
  );
};

export default NavControls;
