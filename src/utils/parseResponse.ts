import { HttpResponse } from "../types/Http";

export function parseResponse(httpResponse: HttpResponse) {
    const { statusCode, body } = httpResponse;
    return {
        statusCode,
        body: body ? JSON.stringify(body) : undefined,
    };
}