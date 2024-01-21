import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Blogs from '@/components/blogs/Blogs';
import Projects from '@/components/projects/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Suvesh Moza',
	icons: {
		icon: '/SM.jpg',
	},
	description: 'Suvesh Moza is a full-stack developer from India.',
	openGraph: {
		title: 'Suvesh Moza',
		description: 'Suvesh Moza is a full-stack developer from India.',
		images: [
			{
				url: 'https://i.ibb.co/7vCNVh7/Copy-of-Promises-JS.jpg',
				width: 1640,
				height: 924,
				alt: 'Suvesh Moza',
			},
		],
	},
};

export default function Page() {
	return (
		<>
			<Header />
			<main className="w-full mb-10">
				<p className="text-lg text-gray-400 mb-5">
					Hello, I&apos;m{' '}
					<span className="font-bold text-white">Suvesh Moza</span>. I&apos;m a
					21 y/o full-stack developer. I like to build things.{' '}
					<span className="font-bold text-white">Web development </span>
					is my playground, and I&apos;ve recently embarked on the thrilling
					journey of
					<span className="font-bold text-white"> app development</span>.
				</p>
				<p className="text-lg text-gray-400 mb-10">
					Right now I&apos;m working as SDE-1 at{' '}
					<a
						className="text-white font-bold"
						href="https://www.linkedin.com/company/gocnet-technologies/"
					>
						GocNet Technologies
					</a>
					.
				</p>
				<h2 className="text-xl font-bold mb-4">Projects</h2>
				<Projects />
				<h2 className="text-xl font-bold mb-4">Blogs</h2>
				<Blogs />
			</main>

			<hr className="mb-4 w-full border-gray-700" />
			<Footer />
		</>
	);
}
