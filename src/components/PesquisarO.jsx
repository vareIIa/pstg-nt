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
  { id: 1, nome: 'Adan Vinicius Da Silva Gonçalves Simões', nota: 20, premiacao: 700 },
  { id: 2, nome: 'João Victor De Jesus Augusto', nota: 20, premiacao: 500 },
  { id: 3, nome: 'Rafael Pastor Pereira', nota: 20, premiacao: 500 },
  { id: 4, nome: 'Vincenth Sabino Souza Martins', nota: 20, premiacao: 300 },
  { id: 5, nome: 'Guilherme Azevedo Leão', nota: 20, premiacao: 300 },
  { id: 6, nome: 'Bryan Vinicius Almeida Da Silva', nota: 20, premiacao: 300 },
  { id: 7, nome: 'Willyans Estevam Da Guia', nota: 20, premiacao: 300 },
  { id: 8, nome: 'Pedro Augusto Rodrigues Da Cruz Comunian', nota: 20, premiacao: 300 },
  { id: 9, nome: 'Ana Laura Dos Santos Franco', nota: 20, premiacao: 300 },
  { id: 10, nome: 'Ricardo Ruiz Rubio', nota: 20, premiacao: 300 },
  { id: 11, nome: 'Joao Vitor Moreira Silva', nota: 19, premiacao: 300 },
  { id: 12, nome: 'Gabriel Ribeiro Rocha', nota: 19, premiacao: 300 },
  { id: 13, nome: 'Pedro Henrique Ferreira da Silva', nota: 19, premiacao: 300 },
  { id: 14, nome: 'Eduardo Ruiz Rubio', nota: 19, premiacao: 300 },
  { id: 15, nome: 'Julio Cesar Albino Silva', nota: 19, premiacao: 300 },
  { id: 16, nome: 'Bernardo Campos Soares', nota: 19, premiacao: 300 },
 { id: 17, nome: 'Kennedy Darlan Oliveira Duarte', nota: 18, premiacao: 300 },
 { id: 18, nome: 'Cleiton De Souza Silva', nota: 18, premiacao: 300 },
 { id: 19, nome: 'Gabriel Oliveira Araújo', nota: 18, premiacao: 300 },
 { id: 20, nome: 'Gabriel Leandro Fonseca Silva', nota: 18, premiacao: 300 },
 { id: 21, nome: 'Yan Eduardo Carneiro Cruz', nota: 18, premiacao: 300 },
 { id: 22, nome: 'Hiago Espindola Ambrosio', nota: 18, premiacao: 300 },
 { id: 23, nome: 'Raul Antonio Horta Campos', nota: 18, premiacao: 300 },
 { id: 24, nome: 'Vinicius Martins Gonzaga', nota: 18, premiacao: 300 },
 { id: 25, nome: 'Rafael Lucas Do Nascimento Sales', nota: 18, premiacao: 300 },
 { id: 26, nome: 'Lucas Cotta Padula', nota: 18, premiacao: 300 },
{ id: 27, nome: 'Bianca Karen Dias Oliveira', nota: 17, premiacao: 300 },
{ id: 28, nome: 'Marlon Rodrigues Soares', nota: 17, premiacao: 300 },
{ id: 29, nome: 'Kaio Luan Souza Pio', nota: 17, premiacao: 300 },
{ id: 30, nome: 'Lucas Pavao', nota: 17, premiacao: 300 },
{ id: 31, nome: 'Fernanda Araujo Macieira Monteiro', nota: 17, premiacao: 300 },
{ id: 32, nome: 'Lucas Martins', nota: 17, premiacao: 300 },
{ id: 33, nome: 'Petronio Augusto Rezende Lucindo', nota: 17, premiacao: 300 },
{ id: 34, nome: 'Ana Carolina Lopes Gorino', nota: 17, premiacao: 300 },
{ id: 35, nome: 'Artur Henrique Almeida Magalhaes', nota: 17, premiacao: 300 },
{ id: 36, nome: 'Júlio César De Souza Oliveira', nota: 17, premiacao: 300 },
{ id: 36, nome: 'Júlio César De Souza Oliveira', nota: 17, premiacao: 300 },
{ id: 37, nome: 'Frederico Matheus Costa Durate', nota: 17, premiacao: 300 },
{ id: 38, nome: 'Henrique Waichert Rodrigues', nota: 17, premiacao: 300 },
{ id: 39, nome: 'Ruthiele Couto Rosa', nota: 17, premiacao: 300 },
{ id: 40, nome: 'Gabriel Vitor De Oliveira Reis', nota: 17, premiacao: 300 },
{ id: 41, nome: 'Bernardo Carvalho Guerra Martins da Costa', nota: 17, premiacao: 300 },
{ id: 42, nome: 'Joaquim Estevan Rodrigues Correia', nota: 17, premiacao: 300 },
{ id: 43, nome: 'Ghabriela De Oliveira Santos Luminato', nota: 17, premiacao: 300 },
{ id: 44, nome: 'Carlos Paulo Rubim Ferreira Silva', nota: 17, premiacao: 300 },
{ id: 45, nome: 'Jonathan Augusto Carlos Cruz', nota: 17, premiacao: 300 },
{ id: 46, nome: 'Nicolas Gomes Marques', nota: 17, premiacao: 300 },
{ id: 47, nome: 'Thiago Oliveira Maia', nota: 17, premiacao: 300 },
{ id: 48, nome: 'Otavio Augusto Fernandes E Silva', nota: 17, premiacao: 300 },
{ id: 49, nome: 'Kennyson Chaves Florencio', nota: 17, premiacao: 300 },
{ id: 50, nome: 'Esther De Faria', nota: 17, premiacao: 300 },
{ id: 51, nome: 'Guilherme Alves Assis', nota: 17, premiacao: 300 },
{ id: 52, nome: 'Talyson Disues Silva', nota: 17, premiacao: 300 },
{ id: 53, nome: 'Juliana Elen Silva Oliveira', nota: 17, premiacao: 300 },
{ id: 54, nome: 'Lenice Druck Guimaraes Souza', nota: 17, premiacao: 300 },
{ id: 55, nome: 'Fabiano Ramos De Oliveira', nota: 17, premiacao: 300 },
{ id: 56, nome: 'Thuany Rodrigues Damasceno Silva', nota: 17, premiacao: 300 },
{ id: 57, nome: 'Pedro Augusto De Oliveira Reis', nota: 17, premiacao: 300 },
{ id: 58, nome: 'Felipe Aparecido Santos Da Silva', nota: 17, premiacao: 300 },
{ id: 59, nome: 'Cesar Vieira Quintao', nota: 17, premiacao: 300 },
{ id: 60, nome: 'Diego Penna Andrade Barros', nota: 17, premiacao: 300 },
{ id: 61, nome: 'Danielli Meilene Coutinho Arçari', nota: 17, premiacao: 300 },
{ id: 62, nome: 'Eduarda Araújo Silva', nota: 16, premiacao: 300 },
{ id: 63, nome: 'Jean Basílio Fernandes', nota: 16, premiacao: 300 },
{ id: 64, nome: 'Jose Vitor Gomes Dos Santos Nascimento', nota: 16, premiacao: 300 },
{ id: 65, nome: 'Pedro Arthur Andrade Lopes', nota: 16, premiacao: 300 },
{ id: 66, nome: 'Jairo Lucas Dos Santos', nota: 16, premiacao: 300 },
{ id: 67, nome: 'Thulio Henrique Santos Nicodemos', nota: 16, premiacao: 300 },
{ id: 68, nome: 'Barbara Marcela Martins Lima', nota: 16, premiacao: 300 },
{ id: 69, nome: 'Davi Monteiro Andrade', nota: 16, premiacao: 300 },
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
        <TextField style={{ minWidth:'350px' }}
          label="Encontrar seu nome..."
          variant="outlined"
          onChange={filterTable}
        />
  
        {searchTerm && filteredAlunos.length > 0 && (
          <TableContainer component={Paper} style={{ marginLeft:'70px', marginRight:"70px", maxHeight: hasScrollbar ? 200 : 'auto', width: hasScrollbar ? 300 : 'auto' }}>
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Nota</TableCell>
                  <TableCell>Pontuação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredAlunos.map((aluno) => (
                  <TableRow key={aluno.id}>
                    <TableCell>{aluno.nome}</TableCell>
                    <TableCell>{aluno.nota}</TableCell>
                    <TableCell>{aluno.premiacao}</TableCell>
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