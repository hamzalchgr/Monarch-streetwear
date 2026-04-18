import ArticleCard from "../components/blog/ArticleCard"


const BlogPage = () => {
  return (
    <div className="pt-30 pb-20 px-4 md:px-12 lg:px-20">
      <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="font-medium uppercase">our blog</p>
          <h2 className="font-extrabold text-3xl md:text-4xl">
            STYLE, SIMPLIFIED
          </h2>

        <p className="max-w-[400px] text-text-muted font-medium">
          PRACTICAL GUIDES AND IDEAS TO HELP YOU BUILD A CLEAN, CONSISTENT, AND MODERN WARDROBE.
        </p>
          </div>

        {/* blog Grid */}
        <ul className="grid gap-12">
          <li>
            <ArticleCard />
          </li>
        </ul>
      </section>
    </div>
  )
}

export default BlogPage