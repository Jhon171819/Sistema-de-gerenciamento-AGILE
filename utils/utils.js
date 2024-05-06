import fetchData from '@/request';

export function gerarUuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


export async function getPartners(){
    try {
        const response = await fetchData({method: 'GET', entity: 'fornecedores'});
        console.log(response)
        return response
    } catch (erro) {
        console.error("Erro ao obter dados:", erro);
    }
}

export async function postObj(item) {
    const dados = item

    try {
      const resposta = await fetchData({method: 'POST', data: dados});
  
    } catch (erro) {
      console.error('Erro ao realizar o POST:', erro);
    }
  }

export async function getObj(item) {
    try {
      const result = await fetchData({ method: "GET", query: "items"});
      if (item == "*") {
        setObjeto(result);
      } else {
        setObjeto(result[item]);
      }
    } catch (error) {
      console.error("Erro ao obter dados:", error);
      setObjeto("Erro ao obter dados.");
    }
  }
