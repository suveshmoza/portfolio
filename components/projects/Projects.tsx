import ProjectCard from './projectCard/ProjectCard';

const data = [
	{
		title: 'Expense Tracker',
		description: 'Manage your expenses with clean ui built using React Native.',
		githubLink: 'https://github.com/suveshmoza/Expense-Tracker',
	},
	{
		title: 'Formify',
		description:
			'Create high quality forms using drag and drop functionality built using Next.js.',
		githubLink: 'https://github.com/suveshmoza/Formify',
	},
	{
		title: 'Twity',
		description:
			'Social media platform that allows users to share their thoughts, ideas, and opinions.',
		githubLink: 'https://github.com/suveshmoza/Twity',
	},
	{
		title: 'Interviewify',
		description: 'The best way to track and manage your job opportunities.',
		githubLink: 'https://github.com/suveshmoza/Interviewify',
	},
];

const Projects = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 ">
				{data.map((item, index) => (
					<ProjectCard
						key={index}
						title={item.title}
						description={item.description}
						githubLink={item.githubLink}
					/>
				))}
			</div>
		</>
	);
};

export default Projects;
