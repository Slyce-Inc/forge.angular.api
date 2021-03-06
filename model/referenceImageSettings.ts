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
import { AnchorDistanceSetting } from './anchorDistanceSetting';
import { ConfidenceSetting } from './confidenceSetting';


/**
 * Operation settings
 */
export interface ReferenceImageSettings {
    /**
     * The confidence setting
     */
    confidence?: ConfidenceSetting;
    /**
     * The anchor distance setting
     */
    anchorDistance?: AnchorDistanceSetting;
    /**
     * The dataset id of the reference dataset
     */
    datasetId?: string;
}
