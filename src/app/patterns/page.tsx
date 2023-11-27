import Link from "next/link"
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Patterns",
	description: "A collection of blog entries detailing free crochet patterns",
};

export default function Patterns() {
	const posts = getPosts()
	return (
		<>
			<h1>Patterns</h1>
			{posts.map(post => {return (
				<p key={post.id}><Link href={`/patterns/${post.slug}`}>{post.title}</Link>
			</p>
			)
			})}
		</>
	);
}
