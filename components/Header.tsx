import Link from 'next/link';
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
					<Link
						target="_blank"
						href="https://drive.google.com/file/d/1pqbNQ77bSOuugdC-HllYDZ_gQfPKBlXm/view?usp=sharing"
						className="px-6 py-2 text-lg rounded-full shadow-xl border backdrop-filter backdrop-blur-md bg-black/20 hover:bg-black/50 transition-all duration-300 ease-in-out"
					>
						My Resume
					</Link>
				</div>
			</div>
		</Element>
	);
};

export default Header;
