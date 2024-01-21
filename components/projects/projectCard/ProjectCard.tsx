type ProjectCardProps = {
	description: string;
	title: string;
	githubLink: string;
};

const ProjectCard = ({ description, title, githubLink }: ProjectCardProps) => {
	return (
		<article className="group text-gray-400">
			<a
				role="link"
				href={githubLink}
				aria-label={`Visit the Github repository for ${title}`}
				className=" hover:text-white transition-all duration-300 ease-in-out underline underline-offset-4 "
			>
				{title}
			</a>
			<p className="mt-4">{description}</p>
		</article>
	);
};

export default ProjectCard;
