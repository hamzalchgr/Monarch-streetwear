import clsx from "clsx";
import ImgList from "./ImgList";
import useSlide from "../../hooks/useSlide";

const PdtGallery = ({ gallery, title }) => {
  const {
    isAnimating,
    realIndex,
    index,
    trackRef,
    imgs,
    handleStart,
    handleMove,
    handleEnd,
    setIndex,
  } = useSlide({ gallery });

  return (
    <>
      <div
        className="overflow-hidden cursor-grab"
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <ul
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: isAnimating ? "transform 300ms ease" : "none",
          }}
        >
          <ImgList imgs={imgs} title={title} />
        </ul>
      </div>

      {/* mobile pagination */}
      <div className="flex">
        {gallery.map((_, i) => (
          <button
            onClick={() => {
              setIndex(i);
            }}
            key={i}
            className={clsx(
              "h-1 w-full",
              realIndex === i + 1 ? "bg-primary" : "bg-accent",
            )}
          ></button>
        ))}
      </div>
    </>
  );
};

export default PdtGallery;
