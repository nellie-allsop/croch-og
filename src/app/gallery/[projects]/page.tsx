import Link from "next/link";

type projectParam = { params: { guineapigs: string } };

export function generateMetaData({ params }: projectParam) {
	const modTitle = params.projects[0].toUpperCase() + params.projects.slice[1];
	return {
		title: `Projects | ${modTitle}`,
		description: `A showcase of my ${params.projects} project`,
	};
}
