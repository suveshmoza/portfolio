import Image from 'next/image';

type CardProps = {
	description: string;
	title: string;
	liveLink: string;
	githubLink: string;
	imgURL: string;
};

const Card = ({
	description,
	title,
	liveLink,
	githubLink,
	imgURL,
}: CardProps) => {
	return (
		<div className="flex bg-gray-800 backdrop-filter backdrop-blur-xl bg-opacity-30  shadow-xl border border-slate-600">
			<div className="p-3 flex flex-col items-start justify-between">
				<h2 className="text-lg font-semibold">{title}</h2>
				<p className="text-sm  mb-2">{description}</p>
				<div className="flex space-x-2">
					<a
						href={liveLink}
						className="border dark:text-white px-4 py-1 rounded-full hover:bg-gray-800/50 hover:text-white ease-in transition-all"
					>
						Visit
					</a>
					<a
						href={githubLink}
						className="border dark:text-white px-4 py-1 rounded-full hover:bg-gray-800/50 hover:text-white ease-in transition-all"
					>
						GitHub
					</a>
				</div>
			</div>
			<div className="flex-shrink-0 p-4">
				<Image
					src={imgURL}
					alt="Project Logo"
					className="w-16 h-16 object-fit rounded-full"
					width="64"
					height="64"
				/>
			</div>
		</div>
	);
};

export default Card;
