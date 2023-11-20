import image from './assets/dif.jpg'
import image1 from './assets/ciclofaixa.jpeg'
import image2 from './assets/ciclovia.jpg'
import image3 from './assets/ciclorrota.jpg'

const items = [
    {
        title: "Tipos de ciclo",
        imageURL: image,
        supplier: "Quais são os tipos de ciclo?",
        description: "A legislação brasileira prevê os espaços da categoria “ciclo” para meios de transporte de pelo menos duas rodas e que necessitam da propulsão humana para serem movidos. Dentro desta categoria “ciclo” abrange 3 tipos de infraestruturas: ciclovia, ciclofaixa e ciclorrota.",
    },
    {
        title: "Ciclovia",
        imageURL: image1,
        supplier: "O que é?",
        description: "Pista própria separada fisicamente das vias comuns e exclusiva para utilização de ciclos. Geralmente são separadas por elevação, canteiros ou áreas verdes.",
    },
    {
        title: "Ciclofaixa",
        imageURL: image2,
        supplier: 'O que é?',
        description: "É parte da pista de rolamento dedicada exclusivamente para o uso de ciclos.  É separada das vias de tráfego comum apenas por faixas, cores diferentes ou tachões, sendo do mesmo nível da pista, calçada ou canteiro. "
    },
    {
        title: "Ciclorrota",
        imageURL: image3,
        supplier: 'O que é?',
        description: "São vias sinalizadas para ciclos que interligam pontos entre ciclovias ou ciclofaixas. Esse espaço não é de uso exclusivo dos ciclos e faz parte das vias comuns, sendo um espaço compartilhado com outros veículos mas ainda tendo preferência sobre os veículos motorizados."
    },

];

export default items;