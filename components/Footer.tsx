import { IoMailOutline } from 'react-icons/io5';
import { RiTwitterXLine } from 'react-icons/ri';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

const socials = [
	{
		href: 'mailto:hellosuvesh@gmail.com',
		label: 'Email Suvesh Moza',
		icon: <IoMailOutline className="text-xl" />,
	},
	{
		href: 'https://github.com/suveshmoza',
		label: "Visit Suvesh's GitHub Profile",
		icon: <LuGithub className="text-xl" />,
	},
	{
		href: 'https://www.linkedin.com/in/suveshmoza/',
		label: "Visit Suvesh's LinkedIn Profile",
		icon: <LuLinkedin className="text-xl" />,
	},
	{
		href: 'https://twitter.com/suveshmoza',
		label: "Visit Suvesh's Twitter Profile",
		icon: <RiTwitterXLine className="text-xl" />,
	},
];

const Footer = () => {
	const currYear = new Date().getFullYear();
	return (
		<footer className="w-full mt-auto">
			<div className="flex justify-between items-center">
				<p className="text-gray-300">© {currYear} Suvesh Moza</p>
				<nav>
					<ul className="flex items-center space-x-4">
						{socials.map((social) => (
							<li key={social.href}>
								<a
									role="link"
									href={social.href}
									rel="ugc"
									aria-label={social.label}
								>
									{social.icon}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	);
};
export default Footer;
