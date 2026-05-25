import I from "../assets/hero.png";

const Cro = () => {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

        {/* Item 1 (ACTIVE) */}
        <div
          className="duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            src={I}
            className="absolute block w-full h-full object-cover"
            alt="Slide 1"
          />
        </div>

        {/* Item 2 */}
        <div
          className="hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src={I}
            className="absolute block w-full h-full object-cover"
            alt="Slide 2"
          />
        </div>

        {/* Item 3 */}
        <div
          className="hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src={I}
            className="absolute block w-full h-full object-cover"
            alt="Slide 3"
          />
        </div>

        {/* Item 4 */}
        <div
          className="hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src={I}
            className="absolute block w-full h-full object-cover"
            alt="Slide 4"
          />
        </div>

        {/* Item 5 */}
        <div
          className="hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src={I}
            className="absolute block w-full h-full object-cover"
            alt="Slide 5"
          />
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            type="button"
            className="w-3 h-3 rounded-full bg-white/50"
            aria-label={`Slide ${i + 1}`}
            data-carousel-slide-to={i}
          />
        ))}
      </div>

      {/* Previous */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30">
          ❮
        </span>
      </button>

      {/* Next */}
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30">
          ❯
        </span>
      </button>
    </div>
  );
};

export default Cro;