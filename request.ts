export default async function fetchData(config: {
    method: "GET" | "POST" | "DELETE";
    data?: Record<string, unknown>;
    entity: "cliente" | "compra" | "fornecedores" | "itemCompra" | "itemVenda" | "produtos" | "venda"; 
    query?: string;
    id?: number;
  }): Promise<any> {
    try {
      let url = `/api/${config.entity}`; 
  

      if (config.query) {
        url += `?query=${config.query}`;
      }

      if (config.id) {
        url += `/${config.id}`;
      }
  
      const requestOptions: RequestInit = {
        method: config.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: config.data ? JSON.stringify(config.data) : undefined,
      };
  
      const response = await fetch(url, requestOptions);
  
      if (!response.ok) {
        throw new Error(
          `Erro na requisição: ${response.status} - ${response.statusText}`
        );
      }
  
      return await response.json();
    } catch (error) {
      console.error("Erro na requisição:", error);
      throw error;
    }
  }
  