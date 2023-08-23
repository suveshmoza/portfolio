import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Projects from '@/components/projects/Projects';
import Blogs from '@/components/blogs/Blogs';

export default function Home() {
	return (
		<Layout>
			<Header />
			<Skills />
			<Projects />
			<Blogs />
		</Layout>
	);
}
