import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { FcNightLandscape, FcLandscape } from 'react-icons/fc';

const Nav = () => {
	return (
		<nav className="mt-1 flex justify-between items-center py-2 rounded-full bg-slate-300 backdrop-filter backdrop-blur-lg bg-opacity-30">
			<Image
				alt="photo"
				src={logo}
				className="h-12 w-12 rounded-full ml-2 border-2 border-slate-600"
			/>
			<ul className="flex items-center gap-8">
				<li className="cursor-pointer">Skills</li>
				<li className="cursor-pointer">Projects</li>
				<li className="cursor-pointer">About</li>
				<li className="cursor-pointer">Github</li>
			</ul>
			<button className="mr-2">
				<FcNightLandscape className="p-1 h-12 w-12" />
				{/* <FcLandscape className="p-1 h-12 w-12" /> */}
			</button>
		</nav>
	);
};

export default Nav;
