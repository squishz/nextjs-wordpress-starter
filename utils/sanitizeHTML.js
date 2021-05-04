import { default as SanitizeHtml } from "sanitize-html";

export default function sanitizeHtml(html, options) {
    const defaultOptions = {
        allowedTags: ["p", "b", "i", "em", "strong", "a"],
        allowedAttributes: {
            a: ["href"],
        },
        allowedIframeHostnames: ["www.youtube.com"],
    };
    options = Object.assign(defaultOptions, options);
    return SanitizeHtml(html, options);
}
