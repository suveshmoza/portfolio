import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { FcNightLandscape, FcLandscape } from 'react-icons/fc';

const Nav = () => {
	return (
		<nav className="flex justify-between items-center py-2 border-b border-slate-600">
			<Image
				alt="photo"
				src={logo}
				className="h-12 w-12 rounded-full ml-2 border-2 border-slate-600"
			/>
			<ul className="flex items-center gap-4 md:gap-8">
				<li className="cursor-pointer">Skills</li>
				<li className="cursor-pointer">Projects</li>
				<li className="cursor-pointer">Blogs</li>
				<li className="cursor-pointer">Github</li>
			</ul>
			<button className="mr-2">
				<FcNightLandscape className="h-12 w-12" />
				{/* <FcLandscape className="p-1 h-12 w-12" /> */}
			</button>
		</nav>
	);
};

export default Nav;
