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
import { WorkflowDoc } from './workflowDoc';


export interface InlineResponse20019 {
    items?: Array<WorkflowDoc>;
    /**
     * The current page number
     */
    pageNumber?: number;
    /**
     * The number of items returned
     */
    pageSize?: number;
    /**
     * The total number of pages available
     */
    totalPages?: number;
    /**
     * The total number of items available
     */
    totalItems?: number;
}
