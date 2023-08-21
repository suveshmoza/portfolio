import { Element } from 'react-scroll';

const icons = [
	'cpp',
	'html',
	'css',
	'js',
	'react',
	'nextjs',
	'nodejs',
	'expressjs',
	'tailwindcss',
	'bootstrap',
	'mongodb',
	'mysql',
	'git',
	'vscode',
	'postman',
	'ts',
	'solidity',
	'firebase',
	'redux',
	'docker',
];

const Skills = () => {
	return (
		<Element name="skills" className="p-4 min-h-screen text-4xl md:text-6xl">
			<div className="h-screen flex flex-col items-center justify-center gap-4">
				<div className="font-semibold">Skills</div>
				<div className="grid grid-cols-5 md:grid-cols-7 gap-4 md:mt-2">
					{icons.map((icon) => (
						<img
							key={icon}
							src={`https://skillicons.dev/icons?i=${icon}`}
							alt={icon}
							className="h-[60px]"
						/>
					))}
				</div>
			</div>
		</Element>
	);
};

export default Skills;
