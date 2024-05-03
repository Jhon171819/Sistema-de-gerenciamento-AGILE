import fetchData from '@/request';

export async function getPartners(){
    try {
        const response = await fetchData({method: 'GET', query: 'partners'});
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
