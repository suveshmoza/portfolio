type BlogCardProps = {
	title: string;
	blogURL?: string;
};

const BlogCard = ({ title, blogURL }: BlogCardProps) => {
	return (
		<a
			href={blogURL}
			target="_blank"
			className="w-fit rounded-md text-md font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 underline mx-1 mb-4 text-gray-400 hover:text-white"
		>
			{title}
		</a>
	);
};

export default BlogCard;
