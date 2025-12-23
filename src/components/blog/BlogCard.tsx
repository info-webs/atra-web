interface BlogCardProps {
  post: {
    slug: string;
    data: {
      title: string;
      description: string;
      pubDate: Date;
      image?: string;
      category: string;
      author: string;
    };
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = post.data.pubDate.toLocaleDateString('es-ES', options);

  return (
    <article
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      data-category={post.data.category}
    >
      {post.data.image ? (
        <a href={`/blog/${post.slug}`}>
          <img
            src={post.data.image}
            alt={post.data.title}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </a>
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-primary to-primary-700"></div>
      )}

      <div className="p-6">
        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">
          {post.data.category}
        </span>

        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
          <a href={`/blog/${post.slug}`}>
            {post.data.title}
          </a>
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.data.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>{post.data.author}</span>
          <time dateTime={post.data.pubDate.toISOString()}>
            {formattedDate}
          </time>
        </div>

        <a
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary hover:text-primary-700 font-medium text-sm"
        >
          Leer más
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
}
