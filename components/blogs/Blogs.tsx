'use client';
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import BlogCard from './blogCard/BlogCard';

interface IArticle {
	title: string;
	brief: string;
	slug: string;
}

function BlogCardSkeleton() {
	return <div className="h-6 w-[50%] bg-zinc-900 animate-pulse mb-4"></div>;
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

	if (!articles) {
		return (
			<div className="flex flex-col justify-start">
				<BlogCardSkeleton />
				<BlogCardSkeleton />
				<BlogCardSkeleton />
				<BlogCardSkeleton />
				<BlogCardSkeleton />
			</div>
		);
	}

	return (
		<>
			<div className="flex flex-col justify-start items-start">
				{articles?.map((article: IArticle, index: number) => (
					<BlogCard
						key={index}
						title={article.title}
						blogURL={`https://suveshmoza.hashnode.dev/${article.slug}`}
					/>
				))}
				<BlogCard
					blogURL="https://suveshmoza.hashnode.dev/"
					title="See All Blogs"
				/>
			</div>
		</>
	);
};

export default Blogs;
