import type { PageServerLoad } from './$types';
import { data } from '$lib/data';

export const load: PageServerLoad = () => {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const startYear = 2018;
	const startMonth = 8;
	let yearsOfExperience = currentYear - startYear;
	if (currentMonth < startMonth) {
		yearsOfExperience--;
	}

	return {
		header: {
			...data.header,
			description: data.header.description.replace('{yearsOfExperience}', yearsOfExperience.toString())
		},
		workExperience: data.workExperience,
		educationAndCertifications: data.educationAndCertifications,
		projects: data.projects,
		skills: data.skills,
		elsewhere: data.elsewhere,
		currentYear
	};
};
