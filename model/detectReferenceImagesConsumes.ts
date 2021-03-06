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
import { Image } from './image';
import { ReferenceImageSettings } from './referenceImageSettings';


export interface DetectReferenceImagesConsumes {
    /**
     * Used to toggle demo mode
     */
    demoMode?: boolean;
    /**
     * The image data
     */
    image?: Image;
    /**
     * The anchor (point of interest) of the image
     */
    anchor?: Anchor;
    /**
     * Operation settings
     */
    settings?: ReferenceImageSettings;
}
