/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { VerificationHmac } from "./VerificationHmac";
import { VerificationBasicAuth } from "./VerificationBasicAuth";
import { VerificationApiKey } from "./VerificationApiKey";
import { VerificationCloudSignal } from "./VerificationCloudSignal";
import { VerificationCourier } from "./VerificationCourier";
import { VerificationFrontApp } from "./VerificationFrontApp";
import { VerificationTwitter } from "./VerificationTwitter";
import { VerificationStripe } from "./VerificationStripe";
import { VerificationRecharge } from "./VerificationRecharge";
import { VerificationTwilio } from "./VerificationTwilio";
import { VerificationGitHub } from "./VerificationGitHub";
import { VerificationShopify } from "./VerificationShopify";
import { VerificationPostmark } from "./VerificationPostmark";
import { VerificationTypeform } from "./VerificationTypeform";
import { VerificationXero } from "./VerificationXero";
import { VerificationSvix } from "./VerificationSvix";
import { VerificationZoom } from "./VerificationZoom";
import { VerificationAkeneo } from "./VerificationAkeneo";
import { VerificationAdyen } from "./VerificationAdyen";
import { VerificationGitLab } from "./VerificationGitLab";
import { VerificationPropertyFinder } from "./VerificationPropertyFinder";
import { VerificationWooCommerce } from "./VerificationWooCommerce";
import { VerificationOura } from "./VerificationOura";
import { VerificationCommercelayer } from "./VerificationCommercelayer";
import { VerificationHubspot } from "./VerificationHubspot";
import { VerificationMailgun } from "./VerificationMailgun";
import { VerificationPersona } from "./VerificationPersona";
import { VerificationPipedrive } from "./VerificationPipedrive";
import { VerificationSendGrid } from "./VerificationSendGrid";
import { VerificationWorkOs } from "./VerificationWorkOs";
import { VerificationSynctera } from "./VerificationSynctera";
import { VerificationAwssns } from "./VerificationAwssns";
import { Verification3DEye } from "./Verification3DEye";
import { VerificationTwitch } from "./VerificationTwitch";
import { VerificationEnode } from "./VerificationEnode";
import { VerificationFavro } from "./VerificationFavro";
import { VerificationLinear } from "./VerificationLinear";
import { VerificationShopline } from "./VerificationShopline";
import { VerificationWix } from "./VerificationWix";
import { VerificationNmiPaymentGateway } from "./VerificationNmiPaymentGateway";
import { VerificationOrb } from "./VerificationOrb";
import { VerificationPylon } from "./VerificationPylon";
import { VerificationRepay } from "./VerificationRepay";
import { VerificationSquare } from "./VerificationSquare";
import { VerificationSolidGate } from "./VerificationSolidGate";
import { VerificationTrello } from "./VerificationTrello";
import { VerificationSanity } from "./VerificationSanity";
import { VerificationEbay } from "./VerificationEbay";
import { VerificationTelnyx } from "./VerificationTelnyx";
import { VerificationTokenIo } from "./VerificationTokenIo";

export const VerificationConfig: core.serialization.Schema<
    serializers.VerificationConfig.Raw,
    Hookdeck.VerificationConfig
> = core.serialization.undiscriminatedUnion([
    VerificationHmac,
    VerificationBasicAuth,
    VerificationApiKey,
    VerificationCloudSignal,
    VerificationCourier,
    VerificationFrontApp,
    VerificationTwitter,
    VerificationStripe,
    VerificationRecharge,
    VerificationTwilio,
    VerificationGitHub,
    VerificationShopify,
    VerificationPostmark,
    VerificationTypeform,
    VerificationXero,
    VerificationSvix,
    VerificationZoom,
    VerificationAkeneo,
    VerificationAdyen,
    VerificationGitLab,
    VerificationPropertyFinder,
    VerificationWooCommerce,
    VerificationOura,
    VerificationCommercelayer,
    VerificationHubspot,
    VerificationMailgun,
    VerificationPersona,
    VerificationPipedrive,
    VerificationSendGrid,
    VerificationWorkOs,
    VerificationSynctera,
    VerificationAwssns,
    Verification3DEye,
    VerificationTwitch,
    VerificationEnode,
    VerificationFavro,
    VerificationLinear,
    VerificationShopline,
    VerificationWix,
    VerificationNmiPaymentGateway,
    VerificationOrb,
    VerificationPylon,
    VerificationRepay,
    VerificationSquare,
    VerificationSolidGate,
    VerificationTrello,
    VerificationSanity,
    VerificationEbay,
    VerificationTelnyx,
    VerificationTokenIo,
]);

export declare namespace VerificationConfig {
    type Raw =
        | VerificationHmac.Raw
        | VerificationBasicAuth.Raw
        | VerificationApiKey.Raw
        | VerificationCloudSignal.Raw
        | VerificationCourier.Raw
        | VerificationFrontApp.Raw
        | VerificationTwitter.Raw
        | VerificationStripe.Raw
        | VerificationRecharge.Raw
        | VerificationTwilio.Raw
        | VerificationGitHub.Raw
        | VerificationShopify.Raw
        | VerificationPostmark.Raw
        | VerificationTypeform.Raw
        | VerificationXero.Raw
        | VerificationSvix.Raw
        | VerificationZoom.Raw
        | VerificationAkeneo.Raw
        | VerificationAdyen.Raw
        | VerificationGitLab.Raw
        | VerificationPropertyFinder.Raw
        | VerificationWooCommerce.Raw
        | VerificationOura.Raw
        | VerificationCommercelayer.Raw
        | VerificationHubspot.Raw
        | VerificationMailgun.Raw
        | VerificationPersona.Raw
        | VerificationPipedrive.Raw
        | VerificationSendGrid.Raw
        | VerificationWorkOs.Raw
        | VerificationSynctera.Raw
        | VerificationAwssns.Raw
        | Verification3DEye.Raw
        | VerificationTwitch.Raw
        | VerificationEnode.Raw
        | VerificationFavro.Raw
        | VerificationLinear.Raw
        | VerificationShopline.Raw
        | VerificationWix.Raw
        | VerificationNmiPaymentGateway.Raw
        | VerificationOrb.Raw
        | VerificationPylon.Raw
        | VerificationRepay.Raw
        | VerificationSquare.Raw
        | VerificationSolidGate.Raw
        | VerificationTrello.Raw
        | VerificationSanity.Raw
        | VerificationEbay.Raw
        | VerificationTelnyx.Raw
        | VerificationTokenIo.Raw;
}
