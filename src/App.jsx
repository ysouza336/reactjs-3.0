import React from "react";
import "./App.css";
import './index'
import Input from "./components/formulario/Input"
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai"; 
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Card from './components/layout/Card';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import Primeiro from './components/basicos/Primeiro';


export default () =>(
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#11 - Componente Controlado (Input) " color="#E45F56">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação Indireta " color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicação Direta " color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome:'Fernando'}}></UsuarioInfo>
                <UsuarioInfo usuario={{}}></UsuarioInfo>
            </Card>
            <Card titulo="#07 - Tabela Produtos" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Lista de Alunos" color="#FF4C65">
              <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
               <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"  />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
                <Aleatorio min={10} max={60} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C3F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Comparametro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro" nota="9.3"
                />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro" 
                    nota={9.3}
                />
                <Primeiro></Primeiro>
            </Card> 
        </div>
    </div>
);


