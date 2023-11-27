import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Gallery",
	description: "A gallery of some of my crochet creations",
};

type projectsSearchQuery = {
	sortBy: number;
};

type projectsType = {
	name: string;
	year: number;
	id: number;
};

let projects: projectsType[] = [
	{
		name: "Carnivorous plant",
		year: 2022,
		id: 0,
	},
	{
		name: "Baby blanket",
		year: 2022,
		id: 1,
	},
	{
		name: "Bonnets",
		year: 2020,
		id: 2,
	},
];

function compareDates(a: projectsType, b: projectsType) {
	if (a.year < b.year) {
		return -1;
	} else if (a.year > b.year) {
		return 1;
	} else {
		return 0;
	}
}

export default function Gallery({
	searchParams,
}: {
	searchParams: projectsSearchQuery;
}) {
	let sortedProjects = [...projects];

	if (searchParams.sortBy == "asc") {
		sortedProjects.sort(compareDates);
	} else if (searchParams.sortBy == "desc") {
		sortedProjects.sort(compareDates).reverse();
	}

	return (
		<>
			<h1>My patterns projects</h1>
			<p>Filter by year created</p>
			<Link href="/gallery">Clear filter</Link>
			<Link href="/gallery?sortBy=asc">Oldest first</Link>
			<Link href="/gallery?sortBy=desc">Latest first</Link>
			{sortedProjects.map((projects) => {
				return (
					<div key={projects.id}>
						<Link href={`/gallery/${projects.name.toLowerCase()}`}>
							{projects.name}
						</Link>
						<p>Year created: {projects.year}</p>
					</div>
				);
			})}
		</>
	);
}
