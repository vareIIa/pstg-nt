import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(nome, PDITA, MOVIMENTO, CRESCIMENTO, COLISAO, PONTUACAO, INTERFACE, ANIMACAO, RESTART, DIFICULDADE, GAMEOVER, CENARIO, TOTAL) {
  return { nome, PDITA, MOVIMENTO, CRESCIMENTO, COLISAO, PONTUACAO, INTERFACE, ANIMACAO, RESTART, DIFICULDADE, GAMEOVER, CENARIO, TOTAL};
}

const rows = [
    createData('Pedro Augusto De Oliveira Reis', 1, 2, 1, 1, 2, 1, 0, 1, 1, 1, 2, 12),
    createData('Vincenth Sabino Souza Martins', 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
    createData('Vinicius Martins Gonzaga', 4, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 18),
    createData('Rafael Pastor Pereira', 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
    createData('Thiago Santos Madeira', 10, 2, 2, 2, 2, 1, 1, 0, 2, 2, 1, 15),
    createData('João Victor De Jesus Augusto', 15, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
    createData('Kennyson Chaves Florencio', 17, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 19),
    createData('Ricardo Ruiz Rubio', 18, 1, 2, 2, 2, 2, 2, 2, 1.5, 2, 2, 18.5),
    createData('Esther De Faria', 21, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 17),
    createData('Guilherme Azevedo Leão', 23, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
    createData('Lucas Martins', 24, 2, 2, 2, 2, 2, 1.5, 0, 2, 2, 2, 17.5),
    createData('Roberto Pedro Dos Santos Junior', 28, 2, 1, 2, 1, 2, 2, 2, 1, 1, 2, 16),
    createData('Yasmin Silvestre Monteiro', 29, 2, 2, 1, 2, 2, 0, 1, 1, 2, 2, 15),
    createData('Adriana Helena de Sá Ambrósio', 30, 0, 0, 2, 1, 0, 0, 0, 0, 0, 2, 5),
    createData('Bryan Vinicius Almeida Da Silva', 31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
    createData('Roberta Miranda Procopio De Araujo', 42, 2, 2, 1, 1, 0, 2, 0, 1, 1, 2, 12),
    createData('Rogerio Moreira Vilela', 43, 2, 2, 2, 2, 2, 0, 0, 1, 0, 1.5, 12.5),
    createData('Talyson Disues Silva', 45, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 17),
    createData('Tiago Francisco Orozimbo', 46, 2, 2, 2, 2, 1, 1, 0, 2, 1.5, 1.5, 15),
    createData('Arthur Filipe Nascimento Oliveira', 48, 2, 2, 2, 2, 2, 0, 0, 2, 0, 2, 14),
    createData('Bianca Karen Dias Oliveira', 49, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
    createData('Breno Carlos Lavandeira De Resende', 50, 2, 2, 1, 2, 2, 0, 2, 1, 1, 2, 15),
    createData('Cesar Augusto Tiago Toto', 54, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 14),
    createData('Helly Pablo Vieira Ribeiro', 60, 2, 2, 1, 2, 2, 2, 1, 2, 0, 2, 16),
    createData('Jonathan Augusto Carlos Cruz', 62, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 19),
    createData('José Airton Marques Júnior', 63, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 17),
    createData('Kennedy Darlan Oliveira Duarte', 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 19),
    createData('Michelle Salgado Martins', 68, 2, 2, 2, 2, 0, 1.5, 0, 1, 0, 1, 11.5),
    createData('Petronio Augusto Rezende Lucindo', 71, 2, 2, 2, 2, 2, 1.5, 0, 2, 2, 2, 17.5),
    createData('Scárlath Eduarda Pereira De Souza', 74, 2, 2, 0, 2, 2, 1.5, 1.5, 1, 2, 2, 16),
    createData('Yan Eduardo Carneiro Cruz', 75, 2, 0, 0, 0, 1, 0, 0, 0, 0, 2, 5),
    createData('Eduardo Ruiz Rubio', 77, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
    createData('Joao Vitor Moreira Silva', 79, 2, 1.5, 2, 2, 2, 2, 2, 2, 2, 2, 19.5),
    createData('Julio Cesar Couto', 80, 2, 1, 2, 2, 1, 1, 0, 1, 0, 1, 11),
    createData('Leonardo Duarte de Freitas', 81, 2, 2, 2, 0, 0, 2, 0, 0, 0, 1, 9),
    createData('Lucas Martins Frassi', 82, 2, 2, 2, 2, 2, 2, 2, 2, 0.5, 1.5, 18),
    createData('Nicolas Souza Moreira', 85, 2, 2, 2, 2, 1, 0, 0, 2, 0, 1, 12),
    createData('Robson Cornelio Kawanishi', 90, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 17),
    createData('Arthur Józef Alves Rosa', 94, 2, 2, 1, 2, 1, 0, 2, 1, 1, 2, 14),
    createData('Cristiano Mateus De Souza Junior', 101, 2, 2, 2, 2, 1, 0, 0, 1, 0, 1, 11),
    createData('Gerusa Leite Caetano', 105, 2, 2, 2, 2, 2, 1, 0, 1, 0, 2, 14),
    createData('Juliana Elen Silva Oliveira', 109, 2, 2, 2, 2, 2, 0, 2, 1, 2, 2, 17),
    createData('Julio Cesar Albino Silva', 110, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
    createData('Lenice Druck Guimaraes Souza', 111, 2, 2, 2, 2, 2, 2, 0, 2, 1, 2, 17),
    createData('Pedro Arthur Andrade Lopes', 114, 2, 2, 2, 2, 1, 2, 0, 2, 2, 1.5, 16.5),
    createData('Aline Aparecida Siqueira Felix', 118, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 9),
    createData('Ana Carolina Lopes Gorino', 119, 2, 2, 2, 2, 1.5, 1, 2, 2, 2, 1, 17.5),
    createData('Arthur Breno Silva Rosa', 122, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 19),
    createData('Artur Henrique Almeida Magalhaes', 123, 2, 2, 2, 2, 1, 1.5, 2, 2, 2, 1, 17.5),
    createData('Gabriel Henrique Oliveira Pedro', 130, 2, 0, 2, 2, 2, 2, 1, 0, 2, 2, 15),
    createData('Gabriel Ribeiro Rocha', 131, 2, 2, 2, 2, 2, 2, 2, 1.5, 2, 2, 19.5),
    createData('Giovanna Maira Soares Chaves', 132, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 19),
    createData('Guilherme Alves Assis', 133, 1, 0, 1, 1, 0, 2, 2, 0, 0, 2, 9),
    createData('Júlio César De Souza Oliveira', 142, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0.5, 17.5),
createData('Karolline Carvalho Silva', 145, 2, 1, 1, 2, 2, 1.5, 1, 2, 0.5, 1, 14),
createData('Larissa Gabrielly Dos Santos De Assis', 146, 2, 2, 2, 2, 2, 0, 0, 1, 0, 2, 13),
createData('Rafael Lucas Do Nascimento Sales', 157, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 18),
createData('Renata Ketelyn Costa Silva', 162, 2, 2, 2, 2, 2, 2, 0, 1, 2, 1, 16),
createData('Roger Magalhães Ferreira', 165, 2, 2, 2, 2, 1, 2, 0, 2, 2, 1, 16),
createData('Thiago Oliveira Maia', 166, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
createData('Alexandre Gonçalves Dias', 171, 2, 2, 2, 2, 1, 0, 0, 1, 0, 1, 11),
createData('Ana Beatris Malaquias Lage / LUKE', 172, 2, 1.5, 2, 2, 1, 1.25, 0, 1.5, 1.5, 1, 13.8),
createData('Carlos Alejandro Campos Alvarez', 178, 2, 1, 2, 2, 1, 0, 0, 1, 1, 2, 12),
createData('Cleiton De Souza Silva', 179, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 19),
createData('Fabiano Ramos De Oliveira', 181, 2, 2, 2, 2, 2, 1, 0, 2, 2, 2, 17),
createData('Fernanda Araujo Macieira Monteiro', 182, 2, 2, 2, 2, 2, 2, 1.5, 2, 2, 2, 19.5),
createData('Filipe Menezes Fernandes', 184, 2, 1, 2, 2, 1, 0, 2, 2, 1, 1, 14),
createData('Filipe Rodrigues Alvarenga', 185, 2, 2, 2, 2, 0, 0, 0, 1.5, 0, 1, 10.5),
createData('Henrique Santos Da Silva', 190, 2, 2, 1, 2, 2, 2, 0, 2, 2, 1, 16),
createData('Kaio Luan Souza Pio', 194, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 19),
createData('Livia Santos Macarenhas', 197, 2, 1, 2, 2, 0, 0, 0, 0, 0, 2, 9),
createData('Marcos Vinicios Oliveira Dias', 198, 2, 2, 1.5, 2, 1.5, 2, 1, 1.5, 1, 1.5, 16),
createData('Marlon Rodrigues Soares', 201, 2, 2, 2, 2, 2, 2, 2, 1.5, 2, 2, 19.5),
createData('Matheus Henrique Alvarenga Meireles', 202, 2, 2, 2, 2, 2, 1, 2, 0, 1, 1, 15),
createData('Nayara Nunes Fonseca Dos Reis', 203, 2, 2, 2, 2, 1.5, 2, 1.5, 1.5, 1.5, 2, 18),
createData('Thuany Rodrigues Damasceno Silva', 206, 2, 2, 2, 2, 2, 0, 2, 1, 2, 2, 17),
createData('Vinicius Davi Lage Dias', 207, 1, 2, 1, 2, 1.5, 2, 0, 2, 1, 1, 13.5),
createData('Wesley Victor Ferreira', 209, 1.5, 2, 2, 2, 1.5, 0, 2, 1, 0, 1, 13),
createData('William Mateus Cruz Barbosa', 210, 2, 2, 2, 2, 1, 1.5, 0, 2, 2, 1, 15.5),
createData('Adan Vinicius Da Silva Gonçalves Simões', 211, 2, 1.5, 1.5, 2, 2, 2, 2, 2, 2, 2, 19),
createData('Ana Laura Dos Santos Franco', 214, 2, 2, 1.75, 2, 2, 2, 2, 2, 2, 2, 19.8),
createData('Claudio Max Moreira Silva', 218, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 19),
createData('Felipe Aparecido Santos Da Silva', 222, 2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 17),
createData('Guilherme Geraldo Silva', 227, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0.5, 9.5),
createData('Kairon Luca Rodrigues Costa', 235, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
createData('Lara Lage Andrade', 237, 2, 2, 2, 2, 1, 1, 0, 1, 0, 2, 13),
createData('Leandro Anastacio De Freitas', 238, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 16),
createData('Lucas Cotta Padula', 239, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 18),
createData('Lucas Pavao', 242, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 19),
createData('Marcela Deiró Andrade', 243, 2, 2, 2, 2, 1, 1, 0, 2, 2, 2, 16),
createData('Matheus Felipe Martins Gonçalves', 245, 2, 2, 2, 2, 1, 0, 0, 1, 0, 1, 11),
createData('Matheus Henrique De Souza', 246, 2, 2, 2, 2, 1, 0, 2, 0, 2, 1, 14),
createData('Otavio Augusto Fernandes E Silva', 248, 2, 2, 2, 2, 1.5, 2, 2, 2, 2, 2, 19.5),
createData('Rúbia Luisa Prudencio Gonçalves', 253, 2, 2, 1, 1, 2, 2, 2, 0, 2, 1.5, 15.5),
createData('Vinicius Kener Souza', 260, 2, 2, 2, 2, 1.5, 1, 0, 1, 0, 1, 12.5),
createData('Willyans Estevam Da Guia', 261, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
createData('Alan Carlos Siqueira', 264, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 10),
createData('Alexsandro Meireles De Almeida', 265, 2, 2, 2, 2, 0, 1, 0, 0, 0, 0, 9),
createData('Andréia P Santos', 268, 2, 2, 1.5, 2, 1, 1, 0, 0, 1, 0.5, 11),
createData('Cesar Vieira Quintao', 271, 2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 17),
createData('Diego Penna Andrade Barros', 274, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 17),
createData('Eliabner Wellesson Goncalves', 275, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 18),
createData('Erick Paula De Oliveira', 277, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
createData('Ernando Marques Madeira', 278, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 10),
createData('Felipe Augusto De Carvalho', 279, 2, 1, 2, 2, 1, 0, 0, 0, 0, 2, 10),
createData('Felipe Moreira Dos Santos', 280, 2, 2, 2, 2, 1, 1.5, 0, 1, 0, 2, 13.5),
createData('Frederico Matheus Costa Durate', 284, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1.5, 17.5),
createData('Gabriel Zozimo Costa Da Silva', 287, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 17),
createData('Gisele Fontes De Almeida Silva', 289, 2, 1.5, 2, 1.5, 0, 1, 0, 0, 0, 1, 9),
createData('Helimara Vieira Ribeiro', 290, 1, 1, 1, 2, 2, 2, 0, 2, 0, 2, 13),
createData('Kaique Vitor Malaquias Pereira', 294, 2, 2, 2, 2, 0, 1, 0, 1, 0, 1.5, 11.5),
createData('Maycom Campos Godoi', 302, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2),
createData('Miguel Dos Santos Silva', 303, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 18),
createData('Raul Antonio Horta Campos', 307, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
createData('Yuri Emanuel De Almeida', 317, 1.5, 2, 2, 2, 0, 0, 0, 0, 0, 1.5, 9),
createData('Alisson Vinícius Ferreira Gonçalves', 321, 2, 2, 2, 2, 2, 1, 0, 2, 0, 2, 15),
createData('Ana Vitoria Nunes Pereira', 322, 2, 2, 2, 1, 1, 0, 0, 1, 1, 2, 12),
createData('Bernardo Campos Soares', 324, 2, 2, 2, 2, 2, 1.5, 2, 1, 2, 1.5, 18),
createData('Danielli Meilene Coutinho Arçari', 329, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 17),
createData('Gabriel Leandro Fonseca Silva', 334, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 18),
createData('Henrique Waichert Rodrigues', 339, 1.5, 2, 2, 2, 2, 2, 2, 0, 2, 2, 17.5),
createData('Isabela Maria De Sa Teixeira', 341, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 13),
createData('Jefte Ebiasafe Alves De Souza', 345, 2, 2, 0, 2, 2, 1, 0, 2, 0, 2, 13),
createData('Jheniffe Santos Andrade', 346, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 4),
createData('Joaquim Estevan Rodrigues Correia', 347, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 18),
createData('Mayra Laudislaine Mendes Dos Santos', 355, 2, 2, 2, 2, 1, 1, 0, 2, 1, 2, 15),
createData('Michele Vitoria Terezinha Dos Santos', 356, 2, 2, 2, 2, 0.5, 2, 0.5, 1, 2, 2, 16),
createData('Pablo Henrique De Souza Nilo', 357, 2, 1, 2, 2, 0, 2, 0, 0, 0, 2, 11),
createData('Rian Wilson Sousa Carvalho', 360, 2, 2, 2, 2, 1, 1, 0, 0, 0, 2, 12),
createData('Thulio Henrique Santos Nicodemos', 366, 2, 1.5, 2, 2, 2, 1, 2, 1, 2, 1, 16.5),
createData('Waldeck Batista De Almeida', 368, 2, 2, 1.5, 2, 0, 1, 0, 0, 0, 1, 9.5),
createData('Barbara Marcela Martins Lima', 373, 2, 2, 2, 2, 1.5, 2, 1, 1.5, 1, 1.5, 16.5),
createData('Heliel Madeira Costa Pastor', 379, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 16),
createData('Indianara Dos Santos Rodrigues Guia', 382, 2, 1.5, 2, 2, 2, 2, 0, 1, 0, 2, 14.5),
createData('Jairo Lucas Dos Santos', 383, 2, 2, 1, 2, 2, 1, 0, 1, 0.5, 2, 13.5),
createData('Julia Pereira Milanio', 386, 2, 2, 1, 2, 0, 0, 0, 1, 0, 1, 9),
createData('Leiriane De Lins Oliveira', 389, 2, 2, 2, 1, 2, 1, 0, 0, 2, 1, 13),
createData('Samuel Rosa Dos Anjos Silva', 399, 2, 2, 2, 1, 1, 0, 0, 1, 0, 2, 11),
createData('Emanuel Felipe Silva Ferreira', 414, 2, 2, 2, 1, 0.5, 1, 0, 0.5, 2, 1, 12),
createData('Gabriel Vitor De Oliveira Reis', 416, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 15),
createData('José Vitor Gomes Dos Santos Nascimento', 419, 2, 2, 2, 2, 1, 1, 2, 0, 1.5, 1.5, 15),
createData('Márcio Paulo Cardoso Ferreira', 427, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 9),
createData('Pedro Augusto Rodrigues Da Cruz Comunian', 432, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
createData('Pedro Henrique Ferreira da Silva', 433, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 19),
createData('Rayssa Couto Rosa Caetano', 435, 2, 2, 2, 2, 1, 1, 0, 1, 2, 1.5, 14.5),
createData('Thayna vitoria silva gonçalves', 436, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 10),
createData('Gisele Dos Santos Fernandes', 442, 2, 2, 1, 2, 2, 2, 0, 1, 0, 2, 14),
createData('Ingrid Caroline Santos De Oliveira', 443, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 12),
createData('João Victor Gomes', 448, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0.5, 7.5),
createData('Júlia Pacífico Ramos Barbosa', 450, 1.5, 2, 1.5, 2, 2, 2, 2, 1.5, 2, 2, 18.5),
createData('Maria Eduarda Moura Carvalho', 457, 1, 1, 1, 2, 2, 1.5, 2, 1, 2, 1.5, 15),
createData('Renato De Almeida Silva', 462, 2, 2, 2, 2, 2, 0, 0, 1, 0, 1, 12),
createData('Alice Lage', 465, 2, 2, 2, 2, 0, 0, 0, 1, 2, 1.5, 12.5),
createData('Camila Freitas Viana', 467, 2, 2, 2, 2, 2, 1, 0, 0, 2, 1.5, 14.5),
createData('Gabriel Oliveira Araújo', 471, 2, 2, 2, 2, 2, 0, 1, 1, 1, 2, 15),
createData('Ghabriela De Oliveira Santos Luminato', 472, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 18),
createData('Ruthiele Couto Rosa', 478, 2, 1.5, 2, 2, 2, 2, 0, 2, 2, 2, 17.5),
createData('Hiago Espindola Ambrosio', 481, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20),
createData('Luiz Guilherme Gomes', 483, 2, 2, 2, 2, 1, 2, 2, 0, 2, 1, 16),
createData('Jefferson Estevam Amorim', 491, 1.5, 2, 0, 2, 1, 0, 0, 0, 0, 1, 7.5),
createData('Leticia Izamara Ferreira', 494, 2, 2, 2, 2, 1.5, 1.5, 0, 1, 0, 1, 13),
createData('Hector Henrique Lage Ferreira', 512, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 16),
createData('Jean Basílio Fernandes', 514, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 19),
createData('Valter Rodrigues De Oliviera', 515, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 18),
createData('Davi Monteiro Andrade', 524, 1.75, 1.5, 2, 2, 1, 2, 0, 2, 2, 2, 16.3),
createData('Guilherme Henrique Fernandes', 527, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 16),
createData('Eduarda Araújo Silva', 536, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 18),
createData('Lucas Alexandre Brandao Alves', 548, 1, 2, 1, 2, 1.5, 1, 0, 0, 0, 1, 9.5),
createData('Lais Viana de Souza', 563, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 18),
``   
];


const MyTable = () => {
  return (
    <div style={{ overflow: 'scroll', maxHeight: '500px' }}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">PDITA</TableCell>
              <TableCell align="center">Movimento</TableCell>
              <TableCell align="center">Crescimento</TableCell>
              <TableCell align="center">Colisao</TableCell>
              <TableCell align="center">Pontuacao</TableCell>
              <TableCell align="center">Interface</TableCell>
              <TableCell align="center">Animacao</TableCell>
              <TableCell align="center">Restart</TableCell>
              <TableCell align="center">Dificuldade</TableCell>
              <TableCell align="center">Gameover</TableCell>
              <TableCell align="center">Cenario</TableCell>
              <TableCell align="center">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.nome}>
                <TableCell component="th" scope="row">{row.nome}</TableCell>
                <TableCell align="center">{row.PDITA}</TableCell>
                <TableCell align="center">{row.MOVIMENTO}</TableCell>
                <TableCell align="center">{row.CRESCIMENTO}</TableCell>
                <TableCell align="center">{row.COLISAO}</TableCell>
                <TableCell align="center">{row.PONTUACAO}</TableCell>
                <TableCell align="center">{row.INTERFACE}</TableCell>
                <TableCell align="center">{row.ANIMACAO}</TableCell>
                <TableCell align="center">{row.RESTART}</TableCell>
                <TableCell align="center">{row.DIFICULDADE}</TableCell>
                <TableCell align="center">{row.GAMEOVER}</TableCell>
                <TableCell align="center">{row.CENARIO}</TableCell>
                <TableCell align="center">{row.TOTAL}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyTable;