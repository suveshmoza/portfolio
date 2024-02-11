import Link from 'next/link';

const Header = () => {
	return (
		<header className="w-full max-w-4xl grid grid-cols-3 items-center mb-4 md:mb-2">
			<nav role="navigation" className="col-span-1">
				<ul className="relative gap-4 flex items-center h-10 w-full shrink-0 overflow-hidden rounded-full">
					<li
						aria-label="Suvesh Moza"
						className="flex h-full items-center font-bold text-white text-xl"
					>
						<Link href="/">SM</Link>
					</li>
					<li className="text-gray-400">
						<Link href="/blogs">blogs</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
