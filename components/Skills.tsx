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
		<div className="p-4 h-[615px] md:h-[565px] text-4xl md:text-6xl">
			<div className="flex flex-col items-center justify-between gap-8">
				<div className="font-semibold">Skills</div>
				<div className="grid grid-cols-5 md:grid-cols-7 gap-4 mt-2">
					{icons.map((icon) => (
						<img
							key={icon}
							src={`https://skillicons.dev/icons?i=${icon}`}
							alt={icon}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
