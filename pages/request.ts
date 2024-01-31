export async function get() {
    try {
        const response = await fetch('/api/controller', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data; // Retorna diretamente um array com os dados

    } catch (error) {
        console.error('Erro ao obter dados:', error);
        throw error; // Rejogue o erro para que possa ser tratado onde a função 'get' é chamada
    }
}

export async function post(data: Record<string, unknown>) {
    try {
        const response = await fetch('/api/controller', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        if (!response.ok && data != undefined) {
          throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
    
        return await response.json();
      } catch (error) {
        console.error('Erro ao enviar dados:', error);
        throw error; // Pode querer tratar o erro de outra forma
      }
}
export async function deleteItem(e: number) {
    const response = await fetch(`/api/controller?id=${e}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      throw new Error(`Id não encontrado: ${response.status} - ${response.statusText}`);
    }
  }