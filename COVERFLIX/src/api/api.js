import axios from 'axios';

export const getList = (setState) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=4bfb8622b99eb5234220bf7ecd17190a&language=pt-BR&page=1`)
    .then((response) => {
      setState(response.data.results);
      console.log(response);
    })
    .catch((error) => { // Correção: 'catch' em vez de 'cath'
      console.log(error);
    });
};

export const getDetail = (id, setState) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=4bfb8622b99eb5234220bf7ecd17190a&language=pt-BR`)
    .then((response) => { // Adicione o parâmetro 'response' aqui para obter os dados
      setState(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
