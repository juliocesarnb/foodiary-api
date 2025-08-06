import { HttpRequest, HttpResponse } from "../types/Http";
import { ok } from "../utils/http";

export class SignInController {
    static async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        return ok({
            accesToken: "signin: token de acesso",
        });
    }
}