import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const alunos = [
    { id: 1, nome: 'Pedro Augusto De Oliveira Reis', nota: 12 },
    { id: 2, nome: 'Vincenth Sabino Souza Martins', nota: 20 },
    { id: 3, nome: 'Vinicius Martins Gonzaga', nota: 18 },
    { id: 4, nome: 'Rafael Pastor Pereira', nota: 20 },
    { id: 5, nome: 'Thiago Santos Madeira', nota: 15 },
    { id: 6, nome: 'João Victor De Jesus Augusto', nota: 20 },
    { id: 7, nome: 'Kennyson Chaves Florencio', nota: 19 },
    { id: 8, nome: 'Ricardo Ruiz Rubio', nota: 18.5 },
    { id: 9, nome: 'Esther De Faria', nota: 17 },
    { id: 10, nome: 'Guilherme Azevedo Leão', nota: 20 },
    { id: 11, nome: 'Lucas Martins', nota: 17.5 },
    { id: 12, nome: 'Roberto Pedro Dos Santos Junior', nota: 16 },
    { id: 13, nome: 'Yasmin Silvestre Monteiro', nota: 15 },
    { id: 14, nome: 'Adriana Helena de Sá Ambrósio', nota: 5 },
    { id: 15, nome: 'Bryan Vinicius Almeida Da Silva', nota: 20 },
    { id: 16, nome: 'Roberta Miranda Procopio De Araujo', nota: 12 },
    { id: 17, nome: 'Rogerio Moreira Vilela', nota: 12.5 },
    { id: 18, nome: 'Talyson Disues Silva', nota: 17 },
    { id: 19, nome: 'Tiago Francisco Orozimbo', nota: 15 },
    { id: 20, nome: 'Arthur Filipe Nascimento Oliveira', nota: 14 },
    { id: 21, nome: 'Bianca Karen Dias Oliveira', nota: 20 },
{ id: 22, nome: 'Breno Carlos Lavandeira De Resende', nota: 15 },
{ id: 23, nome: 'Cesar Augusto Tiago Toto', nota: 14 },
{ id: 24, nome: 'Helly Pablo Vieira Ribeiro', nota: 16 },
{ id: 25, nome: 'Jonathan Augusto Carlos Cruz', nota: 19 },
{ id: 26, nome: 'José Airton Marques Júnior', nota: 17 },
{ id: 27, nome: 'Kennedy Darlan Oliveira Duarte', nota: 19 },
{ id: 28, nome: 'Michelle Salgado Martins', nota: 11.5 },
{ id: 29, nome: 'Petronio Augusto Rezende Lucindo', nota: 17.5 },
{ id: 30, nome: 'Scárlath Eduarda Pereira De Souza', nota: 16 },
{ id: 31, nome: 'Yan Eduardo Carneiro Cruz', nota: 5 },
{ id: 32, nome: 'Eduardo Ruiz Rubio', nota: 20 },
{ id: 33, nome: 'Joao Vitor Moreira Silva', nota: 19.5 },
{ id: 34, nome: 'Julio Cesar Couto', nota: 11 },
{ id: 35, nome: 'Leonardo Duarte de Freitas', nota: 9 },
{ id: 36, nome: 'Lucas Martins Frassi', nota: 18 },
{ id: 37, nome: 'Nicolas Souza Moreira', nota: 12 },
{ id: 38, nome: 'Robson Cornelio Kawanishi', nota: 17 },
{ id: 39, nome: 'Arthur Józef Alves Rosa', nota: 14 },
{ id: 40, nome: 'Cristiano Mateus De Souza Junior', nota: 11 },
{ id: 41, nome: 'Gerusa Leite Caetano', nota: 14 },
{ id: 42, nome: 'Juliana Elen Silva Oliveira', nota: 17 },
{ id: 43, nome: 'Julio Cesar Albino Silva', nota: 20 },
{ id: 44, nome: 'Lenice Druck Guimaraes Souza', nota: 17 },
{ id: 45, nome: 'Pedro Arthur Andrade Lopes', nota: 16.5 },
{ id: 46, nome: 'Aline Aparecida Siqueira Felix', nota: 9 },
{ id: 47, nome: 'Ana Carolina Lopes Gorino', nota: 17.5 },
{ id: 48, nome: 'Arthur Breno Silva Rosa', nota: 19 },
{ id: 49, nome: 'Artur Henrique Almeida Magalhaes', nota: 17.5 },
{ id: 50, nome: 'Gabriel Henrique Oliveira Pedro', nota: 15 },
{ id: 51, nome: 'Gabriel Ribeiro Rocha', nota: 19.5 },
{ id: 52, nome: 'Giovanna Maira Soares Chaves', nota: 19 },
{ id: 53, nome: 'Guilherme Alves Assis', nota: 9 },
{ id: 54, nome: 'Júlio César De Souza Oliveira', nota: 17.5 },
{ id: 55, nome: 'Karolline Carvalho Silva', nota: 14 },
{ id: 56, nome: 'Larissa Gabrielly Dos Santos De Assis', nota: 13 },
{ id: 57, nome: 'Rafael Lucas Do Nascimento Sales', nota: 18 },
{ id: 58, nome: 'Renata Ketelyn Costa Silva', nota: 16 },
{ id: 59, nome: 'Roger Magalhães Ferreira', nota: 16 },
{ id: 60, nome: 'Thiago Oliveira Maia', nota: 20 },
{ id: 61, nome: 'Alexandre Gonçalves Dias', nota: 11 },
{ id: 62, nome: 'Ana Beatris Malaquias Lage / LUKE', nota: 13.8 },
{ id: 63, nome: 'Carlos Alejandro Campos Alvarez', nota: 12 },
{ id: 64, nome: 'Cleiton De Souza Silva', nota: 19 },
{ id: 65, nome: 'Fabiano Ramos De Oliveira', nota: 17 },
{ id: 66, nome: 'Fernanda Araujo Macieira Monteiro', nota: 19.5 },
{ id: 67, nome: 'Filipe Menezes Fernandes', nota: 14 },
{ id: 68, nome: 'Filipe Rodrigues Alvarenga', nota: 10.5 },
{ id: 69, nome: 'Henrique Santos Da Silva', nota: 16 },
{ id: 70, nome: 'Kaio Luan Souza Pio', nota: 19 },
{ id: 71, nome: 'Livia Santos Macarenhas', nota: 9 },
{ id: 72, nome: 'Marcos Vinicios Oliveira Dias', nota: 16 },
{ id: 73, nome: 'Marlon Rodrigues Soares', nota: 19.5 },
{ id: 74, nome: 'Matheus Henrique Alvarenga Meireles', nota: 15 },
{ id: 75, nome: 'Nayara Nunes Fonseca Dos Reis', nota: 18 },
{ id: 76, nome: 'Thuany Rodrigues Damasceno Silva', nota: 17 },
{ id: 77, nome: 'Vinicius Davi Lage Dias', nota: 13.5 },
{ id: 78, nome: 'Wesley Victor Ferreira', nota: 13 },
{ id: 79, nome: 'William Mateus Cruz Barbosa', nota: 15.5 },
{ id: 80, nome: 'Adan Vinicius Da Silva Gonçalves Simões', nota: 19 },
{ id: 81, nome: 'Ana Laura Dos Santos Franco', nota: 19.8 },
{ id: 82, nome: 'Claudio Max Moreira Silva', nota: 19 },
{ id: 83, nome: 'Felipe Aparecido Santos Da Silva', nota: 17 },
{ id: 84, nome: 'Guilherme Geraldo Silva', nota: 9.5 },
{ id: 85, nome: 'Kairon Luca Rodrigues Costa', nota: 0 },
{ id: 86, nome: 'Lara Lage Andrade', nota: 13 },
{ id: 87, nome: 'Leandro Anastacio De Freitas', nota: 16 },
{ id: 88, nome: 'Lucas Cotta Padula', nota: 18 },
{ id: 89, nome: 'Lucas Pavao', nota: 19 },
{ id: 90, nome: 'Marcela Deiró Andrade', nota: 16 },
{ id: 91, nome: 'Matheus Felipe Martins Gonçalves', nota: 11 },
{ id: 92, nome: 'Matheus Henrique De Souza', nota: 14 },
{ id: 93, nome: 'Otavio Augusto Fernandes E Silva', nota: 19.5 },
{ id: 94, nome: 'Rúbia Luisa Prudencio Gonçalves', nota: 15.5 },
{ id: 95, nome: 'Vinicius Kener Souza', nota: 12.5 },
{ id: 96, nome: 'Willyans Estevam Da Guia', nota: 20 },
{ id: 97, nome: 'Alan Carlos Siqueira', nota: 10 },
{ id: 98, nome: 'Alexsandro Meireles De Almeida', nota: 9 },
{ id: 99, nome: 'Andréia P Santos', nota: 11 },
{ id: 100, nome: 'Cesar Vieira Quintao', nota: 17 },
{ id: 101, nome: 'Diego Penna Andrade Barros', nota: 17 },
{ id: 102, nome: 'Eliabner Wellesson Goncalves', nota: 18 },
{ id: 103, nome: 'Erick Paula De Oliveira', nota: 0 },
{ id: 104, nome: 'Ernando Marques Madeira', nota: 10 },
{ id: 105, nome: 'Felipe Augusto De Carvalho', nota: 10 },
{ id: 106, nome: 'Felipe Moreira Dos Santos', nota: 13.5 },
{ id: 107, nome: 'Frederico Matheus Costa Durate', nota: 17.5 },
{ id: 108, nome: 'Gabriel Zozimo Costa Da Silva', nota: 17 },
{ id: 109, nome: 'Gisele Fontes De Almeida Silva', nota: 9 },
{ id: 110, nome: 'Helimara Vieira Ribeiro', nota: 13 },
{ id: 111, nome: 'Kaique Vitor Malaquias Pereira', nota: 11.5 },
{ id: 112, nome: 'Maycom Campos Godoi', nota: 2 },
{ id: 113, nome: 'Miguel Dos Santos Silva', nota: 18 },
{ id: 114, nome: 'Raul Antonio Horta Campos', nota: 20 },
{ id: 115, nome: 'Yuri Emanuel De Almeida', nota: 9 },
{ id: 116, nome: 'Alisson Vinícius Ferreira Gonçalves', nota: 15 },
{ id: 117, nome: 'Ana Vitoria Nunes Pereira', nota: 12 },
{ id: 118, nome: 'Bernardo Campos Soares', nota: 18 },
{ id: 119, nome: 'Danielli Meilene Coutinho Arçari', nota: 17 },
{ id: 120, nome: 'Gabriel Leandro Fonseca Silva', nota: 18 },
{ id: 121, nome: 'Henrique Waichert Rodrigues', nota: 17.5 },
{ id: 122, nome: 'Isabela Maria De Sa Teixeira', nota: 13 },
{ id: 123, nome: 'Jefte Ebiasafe Alves De Souza', nota: 13 },
{ id: 124, nome: 'Jheniffe Santos Andrade', nota: 4 },
{ id: 125, nome: 'Joaquim Estevan Rodrigues Correia', nota: 18 },
{ id: 126, nome: 'Mayra Laudislaine Mendes Dos Santos', nota: 15 },
{ id: 127, nome: 'Michele Vitoria Terezinha Dos Santos', nota: 16 },
{ id: 128, nome: 'Pablo Henrique De Souza Nilo', nota: 11 },
{ id: 129, nome: 'Rian Wilson Sousa Carvalho', nota: 12 },
{ id: 130, nome: 'Thulio Henrique Santos Nicodemos', nota: 16.5 },
{ id: 131, nome: 'Waldeck Batista De Almeida', nota: 9.5 },
{ id: 132, nome: 'Barbara Marcela Martins Lima', nota: 16.5 },
{ id: 133, nome: 'Heliel Madeira Costa Pastor', nota: 16 },
{ id: 134, nome: 'Indianara Dos Santos Rodrigues Guia', nota: 14.5 },
{ id: 135, nome: 'Jairo Lucas Dos Santos', nota: 13.5 },
{ id: 136, nome: 'Julia Pereira Milanio', nota: 9 },
{ id: 137, nome: 'Leiriane De Lins Oliveira', nota: 13 },
{ id: 137, nome: 'Leiriane De Lins Oliveira', nota: 13 },
{ id: 138, nome: 'Samuel Rosa Dos Anjos Silva', nota: 11 },
{ id: 139, nome: 'Emanuel Felipe Silva Ferreira', nota: 12 },
{ id: 140, nome: 'Gabriel Vitor De Oliveira Reis', nota: 15 },
{ id: 141, nome: 'José Vitor Gomes Dos Santos Nascimento', nota: 15 },
{ id: 142, nome: 'Márcio Paulo Cardoso Ferreira', nota: 9 },
{ id: 143, nome: 'Pedro Augusto Rodrigues Da Cruz Comunian', nota: 20 },
{ id: 144, nome: 'Pedro Henrique Ferreira da Silva', nota: 19 },
{ id: 145, nome: 'Rayssa Couto Rosa Caetano', nota: 14.5 },
{ id: 146, nome: 'Thayna vitoria silva gonçalves', nota: 10 },
{ id: 147, nome: 'Gisele Dos Santos Fernandes', nota: 14 },
{ id: 148, nome: 'Ingrid Caroline Santos De Oliveira', nota: 12 },
{ id: 149, nome: 'João Victor Gomes', nota: 7.5 },
{ id: 150, nome: 'Júlia Pacífico Ramos Barbosa', nota: 18.5 },
{ id: 151, nome: 'Maria Eduarda Moura Carvalho', nota: 15 },
{ id: 152, nome: 'Renato De Almeida Silva', nota: 12 },
{ id: 153, nome: 'Alice Lage', nota: 12.5 },
{ id: 154, nome: 'Camila Freitas Viana', nota: 14.5 },
{ id: 155, nome: 'Gabriel Oliveira Araújo', nota: 15 },
{ id: 156, nome: 'Ghabriela De Oliveira Santos Luminato', nota: 18 },
{ id: 157, nome: 'Ruthiele Couto Rosa', nota: 17.5 },
{ id: 158, nome: 'Hiago Espindola Ambrosio', nota: 20 },
{ id: 159, nome: 'Luiz Guilherme Gomes', nota: 16 },
{ id: 160, nome: 'Jefferson Estevam Amorim', nota: 7.5 },
{ id: 161, nome: 'Leticia Izamara Ferreira', nota: 13 },
{ id: 162, nome: 'Hector Henrique Lage Ferreira', nota: 16 },
{ id: 163, nome: 'Jean Basílio Fernandes', nota: 19 },
{ id: 164, nome: 'Valter Rodrigues De Oliviera', nota: 18 },
{ id: 165, nome: 'Davi Monteiro Andrade', nota: 16.3 },
{ id: 166, nome: 'Guilherme Henrique Fernandes', nota: 16 },
{ id: 167, nome: 'Eduarda Araújo Silva', nota: 18 },
{ id: 168, nome: 'Lucas Alexandre Brandao Alves', nota: 9.5 },
{ id: 169, nome: 'Lais Viana de Souza', nota: 18 },
];



function TabelaAlunos() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const filterTable = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredAlunos = alunos.filter((aluno) =>
      aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const hasScrollbar = filteredAlunos.length > 3; 
  
    return (
      <div style={{ marginBottom: hasScrollbar ? 16 : 0 }}>
        <TextField style={{ minWidth:'400px' }}
          label="Encontrar seu nome..."
          variant="outlined"
          onChange={filterTable}
        />
  
        {searchTerm && filteredAlunos.length > 0 && (
          <TableContainer component={Paper} style={{ maxHeight: hasScrollbar ? 100 : 'auto', width: hasScrollbar ? 400 : 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Nota</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredAlunos.map((aluno) => (
                  <TableRow key={aluno.id}>
                    <TableCell>{aluno.nome}</TableCell>
                    <TableCell>{aluno.nota}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    );
  }
  
  export default TabelaAlunos;
