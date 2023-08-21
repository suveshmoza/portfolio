import Nav from './Nav';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="mx-6 md:max-w-2xl md:mx-auto">
			<Nav />
			{children}
		</div>
	);
};

export default Layout;
