import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { Link } from 'react-scroll';
import { FcNightLandscape, FcLandscape } from 'react-icons/fc';

const Nav = () => {
	return (
		<nav className="sticky top-1 z-50 flex rounded-full justify-between items-center py-2 backdrop-filter backdrop-blur-md bg-black/20  ">
			<Image
				alt="photo"
				src={logo}
				className="h-12 w-12 rounded-full ml-2 border-2 border-slate-600"
			/>
			<ul className="flex items-center gap-4 md:gap-8 font-semibold">
				<li className="cursor-pointer hover:text-slate-300">
					<Link to="skills" smooth duration={500}>
						Skills
					</Link>
				</li>
				<li className="cursor-pointer hover:text-slate-300">
					<Link to="projects" smooth duration={500}>
						Projects
					</Link>
				</li>
				<li className="cursor-pointer hover:text-slate-300">
					<Link to="blogs" smooth duration={500}>
						Blogs
					</Link>
				</li>
				<li className="cursor-pointer hover:text-slate-300">
					<a href="https://github.com/suveshmoza" target="_blank">
						Github
					</a>
				</li>
			</ul>
			<button className="mr-2">
				{/* <FcNightLandscape className="p-1 h-12 w-12" /> */}
				<FcLandscape className="p-1 h-12 w-12" />
			</button>
		</nav>
	);
};

export default Nav;
