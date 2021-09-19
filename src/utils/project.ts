type CategoryType = 'Discord Bot' | 'Website' | 'NPM Package' | 'Other';

export default interface IProject {
	/**
	 * Title of the Project
	 */
	title: string;

	/**
	 * Long description of the Project
	 */
	description: string;

	/**
	 * Category of the Project
	 * @example Website
	 */
	category: CategoryType;

	/**
	 * List of technologies used
	 */
	stack: string[];

	/**
	 * Outline the Project to make it stand out
	 * @default false
	 */
	starred?: boolean;
}
