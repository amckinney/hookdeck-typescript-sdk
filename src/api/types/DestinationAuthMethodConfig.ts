/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "..";

/**
 * Config for the destination's auth method
 */
export type DestinationAuthMethodConfig =
    | Hookdeck.DestinationAuthMethodConfig.HookdeckSignature
    | Hookdeck.DestinationAuthMethodConfig.BasicAuth
    | Hookdeck.DestinationAuthMethodConfig.ApiKey
    | Hookdeck.DestinationAuthMethodConfig.BearerToken
    | Hookdeck.DestinationAuthMethodConfig.Oauth2ClientCredentials
    | Hookdeck.DestinationAuthMethodConfig.Oauth2AuthorizationCode
    | Hookdeck.DestinationAuthMethodConfig.CustomSignature;

export declare namespace DestinationAuthMethodConfig {
    interface HookdeckSignature extends Hookdeck.AuthHookdeckSignature {
        type: "HOOKDECK_SIGNATURE";
    }

    interface BasicAuth extends Hookdeck.AuthBasicAuth {
        type: "BASIC_AUTH";
    }

    interface ApiKey extends Hookdeck.AuthApiKey {
        type: "API_KEY";
    }

    interface BearerToken extends Hookdeck.AuthBearerToken {
        type: "BEARER_TOKEN";
    }

    interface Oauth2ClientCredentials extends Hookdeck.AuthOAuth2ClientCredentials {
        type: "OAUTH2_CLIENT_CREDENTIALS";
    }

    interface Oauth2AuthorizationCode extends Hookdeck.AuthOAuth2AuthorizationCode {
        type: "OAUTH2_AUTHORIZATION_CODE";
    }

    interface CustomSignature extends Hookdeck.AuthCustomSignature {
        type: "CUSTOM_SIGNATURE";
    }
}
