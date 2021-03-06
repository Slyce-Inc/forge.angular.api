/**
 * Slyce API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: admin@slyce.it
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface ExecuteWorkflowDoc {
    /**
     * The base64 encoded string of the image bytes.
     */
    imageBytes?: string;
    /**
     * The url of the image.
     */
    imageUrl?: string;
    /**
     * Any options for the workflow to use at runtime.
     */
    workflowOptions?: string;
    /**
     * Return data without actually running the operations.
     */
    demoMode?: boolean;
    /**
     * The ISO 639-1 alpha-2 Code of the language to use throughout the workflow
     */
    languageCode?: string;
    /**
     * The ISO 3166-1 alpha-2 Code of the country to use throughout the workflow
     */
    countryCode?: string;
}
