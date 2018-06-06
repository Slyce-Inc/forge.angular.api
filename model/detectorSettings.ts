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


export interface DetectorSettings {
    /**
     * null
     */
    classes?: Array<string>;
    /**
     * The minimum confidence for a class to be returned
     */
    confidence?: number;
    /**
     * The minimum distance for a detection to be returned
     */
    anchorDistance?: number;
}
