import { useEffect, useMemo, useRef, useState } from "react";

const useSlide = ({ gallery }) => {
  const imgs = useMemo(
    () => [gallery[gallery.length - 1], ...gallery, gallery[0]],
    [gallery],
  );

  const [index, setIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const trackRef = useRef(null);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleNext = () => {
    setIsAnimating(true);
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setIndex((prev) => prev - 1);
  };

  // Swipe handelers
  const handleStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;

    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = startX.current - currentX;

    if (diff > 50) {
      handleNext();
      isDragging.current = false;
    } else if (diff < -50) {
      handlePrev();
      isDragging.current = false;
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onEnd = () => {
      if (index === imgs.length - 1) {
        setIsAnimating(false);
        setIndex(1);
      }

      if (index === 0) {
        setIsAnimating(false);
        setIndex(imgs.length - 2);
      }
    };

    track.addEventListener("transitionend", onEnd);
    return () => track.removeEventListener("transitionend", onEnd);
  }, [index, imgs.length]);

  const handleEnd = () => {
    isDragging.current = false;
  };

  const realIndex = ((index - 1 + gallery.length) % gallery.length) + 1;

  return {
    isAnimating,
    realIndex,
    index,
    trackRef,
    imgs,
    handleStart,
    handleMove,
    handleEnd,
    setIndex,
  };
};

export default useSlide;
