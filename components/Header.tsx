const Header = () => {
	return (
		<div className="p-4 h-[615px] md:h-[565px]">
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
					<a href="#" className="px-4 py-2 text-lg shadow- bg-gray-800">
						My Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
