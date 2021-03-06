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


export interface AnalyticsEventTracking {
    /**
     * Unique Slyce id. Required
     */
    slyceId?: string;
    /**
     * Slyce platform name. Required
     */
    slyceSdkPlatform?: string;
    /**
     * Slyce SDK version used for this session. Required
     */
    slyceSdkVersion?: string;
    /**
     * The current user's id. Required
     */
    userId?: string;
    /**
     * How many times the app has been launched. Optional
     */
    appLaunchCount?: number;
    /**
     * Name of the Client App using the SDK. Required
     */
    clientAppName?: string;
    /**
     * Version of the client app using the SDK. Optional
     */
    clientAppVersion?: string;
    /**
     * The current device id. Optional
     */
    adId?: string;
    /**
     * The category of device. Required
     */
    deviceCategory?: string;
    /**
     * The Installer id. Optional
     */
    installerId?: string;
    /**
     * The type of mobile device being used. Optional
     */
    mobileDeviceModel?: string;
    /**
     * Operating system of the device being used. Required
     */
    operatingSystem?: string;
    /**
     * The version of the operating system. Optional
     */
    operatingSystemVersion?: string;
    /**
     * Screen resolution of the device. Required
     */
    screenResolution?: string;
    /**
     * The location of the device. Optional
     */
    userLocation?: string;
    /**
     * Current browser being used if on Web SDK. Optional
     */
    browser?: string;
    /**
     * version of the browser if Web SDK. Optional
     */
    browserVersion?: string;
}
