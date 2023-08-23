import { Element } from 'react-scroll';
import ProjectCard from './projectCard/ProjectCard';

const data = [
	{
		title: 'CineFact',
		description:
			'CineFact is your ultimate destination for comprehensive and up-to-date information on movies and TV shows.',
		liveLink: 'https://cinefact.vercel.app/',
		githubLink: 'https://github.com/suveshmoza/CineFact',
		imgURL:
			'https://www.pngplay.com/wp-content/uploads/6/Cinema-Logo-Transparent-Background.png',
	},
	{
		title: 'Twity',
		description:
			'Twity is a social media platform that allows users to share their thoughts, ideas, and opinions with others in a quick and easy way.',
		liveLink: 'https://twity.vercel.app/',
		githubLink: 'https://github.com/suveshmoza/Twity',
		imgURL: 'https://i.ibb.co/HP17pYy/Screenshot-from-2023-06-08-12-45-49.png',
	},
	{
		title: 'Interviewify',
		description:
			'Interviewify keeps track of details about your job opportunities and lets you forgot those messing spreadsheets.',
		liveLink: 'https://interviewify.onrender.com/',
		githubLink: 'https://github.com/suveshmoza/Interviewify',
		imgURL:
			'https://raw.githubusercontent.com/suveshmoza/Interviewify/main/client/public/favicon.ico',
	},
	{
		title: 'CryptoCoinInfo',
		description:
			'A one stop place for all the news and information on cryptocurrency. View crypto prices and charts.',
		liveLink: 'https://cryptocoininfo-fqcwmfdyq-suveshmoza.vercel.app/',
		githubLink: 'https://github.com/suveshmoza/cryptocoininfo',
		imgURL:
			'data:image/png;base64,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',
	},
];

const Projects = () => {
	return (
		<Element name="projects" className="p-4 md:h-[565px]">
			<div className="h-full flex flex-col justify-center items-center gap-4">
				<div className="font-semibold text-4xl md:text-6xl">Projects</div>
				<div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-4">
					{data.map((item, index) => (
						<ProjectCard
							key={index}
							title={item.title}
							description={item.description}
							liveLink={item.liveLink}
							githubLink={item.githubLink}
							imgURL={item.imgURL}
						/>
					))}
				</div>
			</div>
		</Element>
	);
};

export default Projects;
