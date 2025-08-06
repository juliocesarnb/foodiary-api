import {APIGatewayProxyEventV2} from 'aws-lambda';

import { SignUpController } from '../controllers/SignUpController';

import { parseEvent } from '../utils/parseEvent';

import { parseResponse } from '../utils/parseResponse'; 

// Esse arquivo é responsável por lidar com a requisição de SignUp
// Ele importa o SignUpController e o método parseEvent para transformar o evento recebido do API Gateway em um objeto HttpRequest

export async function handler(event: APIGatewayProxyEventV2) {
    // Transforma o evento recebido do API Gateway em um objeto HttpRequest
    const request = parseEvent(event);
    
    // Chama o método handle do SignUpController com o request parseado  
    // e retorna a resposta formatada para o API Gateway
    // A função parseResponse transforma a resposta do SignUpController em um formato que o API Gateway espera
    // Ela garante que o statusCode e o body estejam no formato correto
    // O body é convertido para JSON se existir, caso contrário, é undefined
    // Isso é importante para que o API Gateway possa processar a resposta corretamente
    const response = await SignUpController.handle(request);
                 
    // A função parseResponse recebe um objeto HttpResponse e retorna um objeto formatado para o API Gateway
    // Ela utiliza os tipos HttpRequest e HttpResponse para garantir que a resposta esteja
    // no formato correto esperado pelo API Gateway
    return parseResponse(response);
} 