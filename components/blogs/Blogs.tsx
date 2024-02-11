import AnimatedLink from '../ui/AnimatedLink';

async function GetBlogs() {
	const query = JSON.stringify({
		query: `query Publication {
			publication(host:"suveshmoza.hashnode.dev") {
			  posts (first:5){
				edges{
				  node {
					title,
					url
				  }
				}
			  }
			}
		  }`,
	});
	const response = await fetch('https://gql.hashnode.com/', {
		method: 'post',
		body: query,
		headers: {
			'Content-Type': 'application/json',
		},
	});
	if (!response.ok) {
		throw new Error('Something went wrong');
	}
	return response.json();
}

export default async function Blogs() {
	const res = await GetBlogs();
	const articles = res.data.publication.posts.edges;
	return (
		<div className="flex flex-col justify-start items-start">
			{articles?.map(
				(
					blog: {
						node: {
							title: string;
							url: string;
						};
					},
					index: number
				) => (
					<AnimatedLink
						key={index}
						title={blog.node.title}
						href={blog.node.url}
						ariaLabel={blog.node.title}
						styles={{
							marginBottom: '1rem',
						}}
					/>
				)
			)}
			<AnimatedLink
				title="See All Blogs"
				href="https://suveshmoza.hashnode.dev/"
				ariaLabel="See All Blogs"
			/>
		</div>
	);
}
