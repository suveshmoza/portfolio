import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

interface IArticle {
	title: string;
	brief: string;
	slug: string;
}

const Blogs = () => {
	const [articles, setArticles] = useState<IArticle[] | null>(null);

	const fetchPosts = async () => {
		const query = JSON.stringify({
			query: `{
                      user(username: "suveshmoza") {
                        publication {
                          posts(page: 0) {
                            title
                            brief
                            slug
                          }
                      }
                  }
              }`,
		});
		const response = await fetch('https://api.hashnode.com/', {
			method: 'post',
			body: query,
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const jsonResponse = await response.json();

		const latestBlogs = jsonResponse.data.user.publication.posts.slice(0, 4);
		setArticles(latestBlogs);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div name="blogs" className="p-4 min-h-screen">
			<div className="h-screen flex flex-col justify-center items-center gap-4">
				<div className="font-semibold text-4xl md:text-6xl">Blogs</div>
				<div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-4">
					{articles?.map((article: IArticle, index: number) => (
						<BlogCard
							key={index}
							title={article.title}
							description={article.brief}
							blogURL={`https://suveshmoza.hashnode.dev/${article.slug}`}
						/>
					))}
				</div>
				<div className="mt-4">
					<a
						target="_blank"
						href="https://suveshmoza.hashnode.dev/"
						className="px-4 py-2 text-lg shadow- bg-gray-800 hover:bg-gray-700"
					>
						See More...
					</a>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
