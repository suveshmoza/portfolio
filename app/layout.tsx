import '../styles/globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-black">
				<div className="flex flex-col items-center  text-white min-h-screen p-4 max-w-4xl mx-auto">
					{children}
				</div>
			</body>
		</html>
	);
}
