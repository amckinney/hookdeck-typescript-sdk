/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "..";

/**
 * The verification configs for Recharge. Only included if the ?include=verification.configs query param is present
 */
export interface VerificationRechargeConfigs {
    webhookSecretKey: string;
    algorithm: Hookdeck.HmacAlgorithms;
    headerKey: string;
    encoding: Hookdeck.VerificationRechargeConfigsEncoding;
}
