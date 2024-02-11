'use client';

import './styles.css';
import { useEffect, useRef } from 'react';

type Props = {};
export default function AnimatedHeader({}: Props) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		ref.current?.classList.add('animated-header');
	}, []);

	return <div ref={ref} />;
}
