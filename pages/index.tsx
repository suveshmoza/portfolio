import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
	return (
		<Layout>
			<Header />
			<Skills />
			<Projects />
		</Layout>
	);
}
