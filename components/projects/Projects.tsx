import ProjectCard from './projectCard/ProjectCard';
import { ProjectsData } from '@/data/projects';

const Projects = () => {
	return (
		<section>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 ">
				{ProjectsData.map(({ title, description, githubLink }, index) => (
					<ProjectCard
						key={index}
						title={title}
						description={description}
						githubLink={githubLink}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
