import axios from "axios";

// Lê a URL base do .env (VITE_API_URL).
// Alterar aqui quando a real quando a API real estiver pronta, pra tirar dos dados mockados
// O fallback garante que funciona mesmo sem .env configurado.
const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de request — executa antes de cada requisição sair
// Descomentar quando implementar autenticação JWT
api.interceptors.request.use((config) => {
  // const token = localStorage.getItem("token")
  // if (token) config.headers.Authorization = `Bearer ${token}`
  return config;
});

// Interceptador de response — executa quando a resposta chega (ou falha)
// Trata erros globalmente sem precisar de try/catch em cada service
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("[API Error]", error.response?.status, error.response?.data);
    return Promise.reject(error);   // repassa o erro para o service tratar
  }
);