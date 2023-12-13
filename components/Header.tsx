const Header = () => {
	return (
		<header className="w-full grid grid-cols-3 items-center mb-10">
			<div className="col-span-1">
				<span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
					<span className="flex h-full w-full items-center justify-sa rounded-full bg-muted text-gray-400">
						SM
					</span>
				</span>
			</div>
		</header>
	);
};
export default Header;
