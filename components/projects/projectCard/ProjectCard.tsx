import Image from 'next/image';

type ProjectCardProps = {
	description: string;
	title: string;
	githubLink: string;
};

const ProjectCard = ({ description, title, githubLink }: ProjectCardProps) => {
	return (
		<div className="group text-gray-400">
			<a
				href={githubLink}
				className=" hover:text-white transition-all duration-150 ease-in-out underline underline-offset-4 "
			>
				{title}
			</a>
			<p className="mt-4">{description}</p>
		</div>
	);
};

export default ProjectCard;
