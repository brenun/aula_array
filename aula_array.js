const empresas = [
  { nome: 'sansung', valorDoMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
  { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
  { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
  { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
  { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
  { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 },
];

// 1. Listar o nome de todas as empresas
 function obterNome (empresa) {
 return empresa.nome;
 }
 const nomesMapeados = empresas.map(empresa => empresa.nome);
 console.log ("Nomes das empresas: ");
 console.log(nomesMapeados);

// 2. Filtrar empresas com valor de mercadoacima de 100
const valoresMapeados = empresas.filter(empresa => empresa.valorDeMercado > 100);
console.log("Empresas com valor de mercado acima de 100: ");
console.log(valoresMapeados);

//3. Calcular o valor total de mercado das empresas
const valorTotalDeMercado = empresas.reduce((total, empresa) => total + empresa.valorDeMercado, 0);
console.log(valorTotalDeMercado);

//4. Encontrar a empresa mais antiga
const empresaMaisAntiga = empresas.reduce((maisAntiga, empresa) => {
  return (empresa.anoDeCriacao < maisAntiga.anoDeCriacao) ? empresa : maisAntiga;
});

// 5. Criar um novo array com nome e CEO das empresas
const nomeECeoDasEmpresas = empresas.map(empresa => ({ nome: empresa.nome, CEO: empresa.CEO }));
console.log(nomeECeoDasEmpresas);