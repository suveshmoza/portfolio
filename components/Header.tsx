import { Element } from 'react-scroll';

const Header = () => {
	return (
		<Element name="main" className="p-4 h-[615px] md:h-[565px]">
			<div className="h-full flex flex-col items-center justify-center text-4xl md:text-6xl">
				<div className="flex flex-col items-center justify-center">
					<p className="text-6xl my-4">🌱</p>
					<p className="font-bold ">Hello </p>
					<p className="">
						I&apos;m <span className="font-bold">Suvesh Moza</span>
					</p>
					<p className="text-center text-base italic mt-4">
						I&apos;m a full-stack developer. I love to create beautiful and
						functional websites.
					</p>
				</div>
				<div>
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1VkCz2mB6S_IlopgLJWPg8NvsOSSY-ojZ/view?usp=sharing"
						className="px-4 py-2 text-lg shadow-xl bg-gray-800 hover:bg-gray-700"
					>
						My Resume
					</a>
				</div>
			</div>
		</Element>
	);
};

export default Header;
