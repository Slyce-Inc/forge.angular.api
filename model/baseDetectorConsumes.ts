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
import { Anchor } from './anchor';
import { DetectorSettings } from './detectorSettings';
import { Image } from './image';


export interface BaseDetectorConsumes {
    /**
     * Used to toggle demo mode
     */
    demoMode?: boolean;
    image?: Image;
    anchor?: Anchor;
    settings?: DetectorSettings;
}
