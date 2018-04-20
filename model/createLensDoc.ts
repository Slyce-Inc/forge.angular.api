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


export interface CreateLensDoc {
    /**
     * The name of the lens
     */
    lensName: string;
    /**
     * The capture mode of the lens
     */
    captureMode?: string;
    /**
     * An array of detectors
     */
    localDetectors: Array<string>;
    /**
     * The template to be used
     */
    template: string;
    /**
     * The id of the associated workflow
     */
    workflowId: string;
}
