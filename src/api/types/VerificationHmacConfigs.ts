/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "..";

/**
 * The verification configs for HMAC. Only included if the ?include=verification.configs query param is present
 */
export interface VerificationHmacConfigs {
    webhookSecretKey: string;
    algorithm: Hookdeck.HmacAlgorithms;
    headerKey: string;
    encoding: Hookdeck.VerificationHmacConfigsEncoding;
}
