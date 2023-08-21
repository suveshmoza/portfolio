import Nav from './Nav';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="md:max-w-4xl md:mx-auto   bg-slate-300 backdrop-filter backdrop-blur-lg bg-opacity-30">
			<Nav />
			{children}
		</div>
	);
};

export default Layout;
