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


export interface DatasetDoc {
    /**
     * The timestamp the item was created
     */
    createdAt?: Date;
    /**
     * The user that created the item
     */
    createdBy?: string;
    /**
     * The timestamp the item was last updated
     */
    updatedAt?: Date;
    /**
     * The user that last updated the item
     */
    updatedBy?: string;
    /**
     * The type of the dataset.
     */
    type: string;
    /**
     * The dataset id
     */
    id: string;
    /**
     * The name of the dataset.
     */
    name: string;
    /**
     * The keys of the fields containing image_urls for the dataset.
     */
    imageUrlKeys?: Array<string>;
    /**
     * The keys of the fields containing searchable data for the dataset.
     */
    searchableKeys?: Array<string>;
    /**
     * The keys of the fields containing facetable data for the dataset.
     */
    facetableKeys?: Array<string>;
}