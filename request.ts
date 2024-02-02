export default async function fetchData(config: {
  method: "GET" | "POST" | "DELETE";
  data?: Record<string, unknown>;
  id?: number;
}): Promise<any> {
  try {
    let url = "/api/controller";
    if (config.id) {
      url += `?id=${config.id}`;
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

