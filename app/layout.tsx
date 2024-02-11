import Header from '@/components/Header';
import '../styles/globals.css';
import Footer from '@/components/Footer';
import AnimatedHeader from '@/components/AnimatedHeader';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
	display: 'swap',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={spaceGrotesk.className}>
			<body className="bg-black">
				<div className="relative flex max-w-6xl flex-col items-center  text-white min-h-screen p-4 w-full mx-auto">
					<AnimatedHeader />
					<Header />
					<main className="max-w-4xl">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
