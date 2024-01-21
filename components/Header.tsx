const Header = () => {
	return (
		<header className="w-full grid grid-cols-3 items-center mb-4 md:mb-2">
			<nav role="navigation" className="col-span-1">
				<ul className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
					<li
						aria-label="Suvesh Moza"
						className="flex h-full w-full items-center justify-sa rounded-full bg-muted text-gray-400"
					>
						SM
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
