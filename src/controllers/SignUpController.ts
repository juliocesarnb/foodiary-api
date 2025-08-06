import { HttpRequest, HttpResponse } from "../types/Http";
import { created } from "../utils/http";

export class SignUpController {
    static async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        return created({
            accesToken: "signup: token de acesso",
        });
    }
}