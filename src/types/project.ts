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
	category: string;

	/**
	 * List of technologies used
	 */
	stack: string[];
}
