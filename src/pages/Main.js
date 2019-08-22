import React from 'react';
import './Main.css';
import { FormattedNumber } from 'react-intl';


export default function Main(){

    const expenses = [
        { name: "Local", value: 28000},
        { name: "Transporte", value: 28000},
        { name: "Festas", value: 28000},
        { name: "Doações para acampantes", value: 5000},
    ];


    const total = expenses.reduce( a => a.value);
    

    return(
        <div className="container">
            <header className="item">
                <h1>Acampamento Evoluir 2019</h1>
                <span>Relatório</span>
            </header>

            <div className="expenses item">
                <h2>Gastos</h2>
                
                <ul>
                    { expenses.map ( (expense, index) => (
                        <li key={index}>
                            {expense.name}: <FormattedNumber value={expense.value} style={`currency`} currency="BRL" /> 
                        </li>
                    ))}
                </ul>
                

                <p>Total - R$ 46.200,00</p>
            </div>

            <div className="revenue item">
                <h2>Receitas</h2>
                <ul>
                    <li>Pagamentos de Acampantes: R$ 7.300,00</li>
                    <li>Cantinas: R$ 1.000,00</li>
                    <li>Lava Rápido: R$ 1.000,00</li>
                    <li>Eventos: R$ 1.000,00</li>
                    <li>Doações Diretas: R$ 1.000,00</li>
                    <li>Doações IndiretasDiretas: R$ 1.000,00</li>
                </ul>

                <p>Total - R$ 46.200,00</p>
            </div>

            <div className="goal item">
                <h2>Objetivos</h2>
                <ul>
                    <li>Meta: R$ 46.200,00</li>
                    <li>Falta: R$ 46.200,00</li>
                </ul>
            </div>
        </div>
    );
}