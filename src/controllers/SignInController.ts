import { HttpRequest, HttpResponse } from "../types/Http";
import { created, badRequest } from "../utils/http";
import { z } from "zod";


// Define o schema de validação para o corpo da requisição
// Utilizando zod para validar o email e a senha
// O email deve ser um email válido e a senha deve ter pelo menos 8 caracteres
const schema = z.object({
    email: z.email(),
    password: z.string().min(8, "Password deve ter pelo menos 8 caracteres"),
});


 
export class SignInController {
    static async handle({ body }: HttpRequest): Promise<HttpResponse> {

        const { success, error, data } = schema.safeParse(body);

        if (!success) {
            return badRequest({
                errors: error.issues
            });
        }

        // TODO: Implement authentication logic here

        return created({ data,

         });
    }
}