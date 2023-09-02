type BlogCardProps = {
	description: string;
	title: string;
	blogURL: string;
};

const BlogCard = ({ description, title, blogURL }: BlogCardProps) => {
	return (
		<div className="flex bg-gray-800 backdrop-filter backdrop-blur-xl bg-opacity-30 rounded-xl shadow-xl border border-slate-600">
			<div className="p-3 flex flex-col items-start justify-between">
				<h2 className="text-lg font-semibold">{title}</h2>
				<p className="text-sm line-clamp-4 mb-2">{description}</p>
				<div className="flex space-x-2">
					<a
						href={blogURL}
						target="_blank"
						className="border dark:text-white px-4 py-1 rounded-full hover:bg-gray-800/50 hover:text-white ease-in transition-all"
					>
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
