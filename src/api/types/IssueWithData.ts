/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../index";

export type IssueWithData = Hookdeck.IssueWithData.Delivery | Hookdeck.IssueWithData.Transformation;

export declare namespace IssueWithData {
    interface Delivery extends Hookdeck.DeliveryIssueWithData {
        type: "delivery";
    }

    interface Transformation extends Hookdeck.TransformationIssueWithData {
        type: "transformation";
    }
}
