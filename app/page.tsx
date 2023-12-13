import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Blogs from '@/components/blogs/Blogs';
import Projects from '@/components/projects/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Suvesh Moza',
};

export default function Page() {
	return (
		<div className="flex flex-col items-center bg-black-900 text-white min-h-screen p-4 max-w-4xl mx-auto">
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
			<Footer />
		</div>
	);
}
