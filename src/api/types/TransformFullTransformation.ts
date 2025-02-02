/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * You can optionally define a new transformation while creating a transform rule
 */
export interface TransformFullTransformation {
    /** The unique name of the transformation */
    name: string;
    /** A string representation of your JavaScript (ES6) code to run */
    code: string;
    /** A key-value object of environment variables to encrypt and expose to your transformation code */
    env?: Record<string, string | undefined>;
}
