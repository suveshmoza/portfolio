import { IoMailOutline } from 'react-icons/io5';
import { RiTwitterXLine } from 'react-icons/ri';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

const Footer = () => {
	return (
		<footer className="w-full mt-auto">
			<hr className="my-4 border-gray-700" />
			<div className="flex justify-between items-center">
				<p className="text-gray-500">© 2023 Suvesh Moza</p>
				<div className="flex items-center space-x-4">
					<a href="mailto:hellosuvesh@gmail.com" rel="ugc">
						<IoMailOutline className="text-xl" />
					</a>

					<a href="https://github.com/suveshmoza" rel="ugc">
						<LuGithub className="text-xl" />
					</a>
					<a href="https://www.linkedin.com/in/suveshmoza/" rel="ugc">
						<LuLinkedin className="text-xl" />
					</a>
					<a href="https://twitter.com/suveshmoza" rel="ugc">
						<RiTwitterXLine className="text-xl" />
					</a>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
