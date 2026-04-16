const ImgList = ({ imgs, title }) => {
  return (
    <>
      {imgs.map((img, i) => (
        <li key={i} className="flex-none w-full overflow-hidden px-0.25">
          <img
            className="h-full w-full object-center object-cover"
            src={img}
            alt={title}
            loading="lazy"
          />
        </li>
      ))}
    </>
  );
};

export default ImgList;
