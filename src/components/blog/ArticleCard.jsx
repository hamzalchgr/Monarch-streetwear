const ArticleCard = () => {
  return (
    <div className="article-card">
      <div className="flex flex-col gap-1">
        <p className="text-text-muted font-medium">STORIES</p>
        <h3 className="font-extrabold lg:text-3xl">WHAT NOCTURN STANDS FOR</h3>
      </div>

      <div className="h-[160px] md:h-[380px] w-full overflow-hidden">
        <img className="h-full w-full object-center object-cover" src="https://framerusercontent.com/images/qjuygSLTP2noSQbOvtHIBP491I.jpg?scale-down-to=2048&width=6000&height=4000" alt="" loading="lazy" />
      </div>

      <div>
        <p className="font-medium">Nocturn is not just a brand. It’s a way of approaching clothing with intention, clarity, and restraint. It was created from the idea that what you wear should feel aligned with...</p>
      </div>
    </div>
  )
}

export default ArticleCard