import Link from 'next/link';

type Props = {
	title: string;
	href: string;
	ariaLabel: string;
	styles?: React.CSSProperties;
};
export default function AnimatedLink({
	title,
	href,
	ariaLabel,
	styles,
}: Props) {
	return (
		<Link
			role="link"
			href={href}
			aria-label={ariaLabel}
			rel="noopener noreferrer"
			target="_blank"
			className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out underline underline-offset-4"
			style={styles}
		>
			{title}
		</Link>
	);
}
