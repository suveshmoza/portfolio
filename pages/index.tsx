import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Projects from '@/components/projects/Projects';
import Blogs from '@/components/blogs/Blogs';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Suvesh Moza</title>
			</Head>
			<Layout>
				<Header />
				<Skills />
				<Projects />
				<Blogs />
			</Layout>
		</>
	);
}
