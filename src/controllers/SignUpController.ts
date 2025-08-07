import { HttpRequest, HttpResponse } from "../types/Http";
import { badRequest, created } from "../utils/http";
import { z } from "zod";


const schema = z.object({
    goal: z.enum(['lose', 'maintain', 'gain']),
    gender: z.enum(['male', 'female']),
    birthDate: z.iso.date(),
    height: z.number(),
    weight: z.number(),
    activityLevel: z.number().min(1).max(5),
    account: z.object({
        name: z.string().min(1),
        email: z.email(),
        password: z.string().min(8, "Password deve ter pelo menos 8 caracteres"),
    }),
});

export class SignUpController {
    // Método handle recebe o HttpRequest e retorna um HttpResponse
    static async handle({ body }: HttpRequest): Promise<HttpResponse> {

        // Valida o corpo da requisição usando o schema definido
        // Se a validação falhar, retorna um erro 400 com os detalhes da validação
        // Se a validação for bem-sucedida, prossegue com a lógica de criação
        // do usuário e retorna um token de acesso fictício
        // Você deve substituir isso pela lógica real de criação de usuário
        // e geração de token de acesso

        const { success, error, data } = schema.safeParse(body);

        if (!success) {
            return badRequest({
                errors: error.issues
            });
        }

        // Aqui você pode adicionar a lógica para criar o usuário no banco de dados
        // Por exemplo, chamar um serviço de usuário para criar o usuário com os dados validados
        // E retornar o token de acesso ou qualquer outra informação necessária
        // Neste exemplo, estamos apenas retornando um token de acesso fictício
        // Você deve substituir isso pela lógica real de criação de usuário
        // e geração de token de acesso

        return created({
            data,
        });
    } 
}