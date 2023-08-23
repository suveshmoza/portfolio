import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { Link } from 'react-scroll';
import { FcNightLandscape, FcLandscape } from 'react-icons/fc';
import { useState } from 'react';

interface INavLinks {
	title: string;
	link: string;
}

const NavLinks: Array<INavLinks> = [
	{ title: 'Skills', link: 'skills' },
	{ title: 'Projects', link: 'projects' },
	{ title: 'Blogs', link: 'blogs' },
];

const Nav = () => {
	const [darkMode, setDarkMode] = useState(false);

	const handleDarkModeChange = () => {
		setDarkMode((prev) => !prev);
		const bgColor = darkMode ? 'darkslategrey' : '#15202B';
		document.body.style.backgroundColor = bgColor;
	};

	return (
		<nav className="sticky top-1 z-50 flex rounded-full justify-between items-center py-2 backdrop-filter backdrop-blur-md bg-black/20  ">
			<Link to="main" smooth duration={1000}>
				<Image
					alt="photo"
					src={logo}
					className="h-12 w-12 rounded-full ml-2 border-2 border-slate-600"
				/>
			</Link>
			<ul className="flex items-center gap-4 md:gap-8 font-semibold">
				{NavLinks.map((navLink, index) => (
					<li
						key={index}
						className="group relative cursor-pointer hover:text-slate-300"
					>
						<Link
							className="block py-2 border-animation"
							to={navLink.link}
							smooth
							duration={1000}
						>
							{navLink.title}
						</Link>
					</li>
				))}
				<li className="cursor-pointer hover:text-slate-300">
					<a
						href="https://github.com/suveshmoza"
						className="border-animation"
						target="_blank"
					>
						Github
					</a>
				</li>
			</ul>
			<button className="mr-2">
				{!darkMode ? (
					<FcNightLandscape
						onClick={handleDarkModeChange}
						className="p-1 h-12 w-12 fade-in"
					/>
				) : (
					<FcLandscape
						onClick={handleDarkModeChange}
						className="p-1 h-12 w-12 fade-in"
					/>
				)}
			</button>
		</nav>
	);
};

export default Nav;
