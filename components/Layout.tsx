import Nav from './Nav';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="md:max-w-4xl md:mx-auto">
			<Nav />
			{children}
		</div>
	);
};

export default Layout;
