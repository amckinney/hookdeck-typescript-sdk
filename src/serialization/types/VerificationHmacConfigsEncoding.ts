/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationHmacConfigsEncoding: core.serialization.Schema<
    serializers.VerificationHmacConfigsEncoding.Raw,
    Hookdeck.VerificationHmacConfigsEncoding
> = core.serialization.enum_(["base64", "base64url", "hex"]);

export declare namespace VerificationHmacConfigsEncoding {
    type Raw = "base64" | "base64url" | "hex";
}
