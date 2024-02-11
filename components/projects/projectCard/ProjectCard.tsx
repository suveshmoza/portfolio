type ProjectCardProps = {
	description: string;
	title: string;
	githubLink: string;
};

import AnimatedLink from '@/components/ui/AnimatedLink';

const ProjectCard = ({ description, title, githubLink }: ProjectCardProps) => {
	return (
		<article className="">
			<AnimatedLink
				title={title}
				href={githubLink}
				ariaLabel={`Visit the Github repository for ${title}`}
			/>

			<p className="mt-4 text-gray-400">{description}</p>
		</article>
	);
};

export default ProjectCard;
