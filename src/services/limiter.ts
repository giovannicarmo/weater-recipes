import rateLimit from 'express-rate-limit';

/**
 * Define o limite de uma requisição da API em um determinado espaço de tempo.
 * @param minutes espaço de tempo representado em mínutos;
 * @param maxRequests número máximo de requisições;
 */
const createLimiter = (minutes: number, maxRequests: number) =>
  rateLimit({
    windowMs: minutes * 60000,
    max: maxRequests,
    message: `Limit of ${maxRequests} requests per minute reached.`,
  });

export default createLimiter;
