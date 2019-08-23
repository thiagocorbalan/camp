import React from 'react';
import './Main.css';
import { FormattedNumber } from 'react-intl';


export default function Main(){

    const expenses = [];
	const revenues = [];    

	/*
		{ name: "Local", value: 2000},
		{ name: "Transporte", value: 5000},
		{ name: "Festas", value: 1000},
		{ name: "Doações para acampantes", value: 5000},
	*/

	const expenseTotal = expenses.reduce( (total, expense ) => total + expense.value, 0);
	const revenueTotal = revenues.reduce( (total, revenue ) => total + revenue.value, 0);

	const result = expenseTotal - revenueTotal;

    return(
        <div className="main">
            <div className="jumbotron">
                <h1 className="display-4"><strong>Acampamento Evoluir 2019</strong> - Relatório</h1>
            </div>
            

            <div className="revenue card">
				<div className="card-body">
					<div className="card-title text-uppercase mb-3 text-success">Receitas</div>
					<table className="table table-sm ">
						<thead>
							<tr>
								<th scope="col">Descrição</th>
								<th scope="col" width="50%" className="text-right">Valor</th>
							</tr>
						</thead>
						<tbody>
							{ revenues.map ( (revenue, index) => (
									<tr key={index}>
										<td>{revenue.name}</td>
										<td className="text-right"><FormattedNumber value={revenue.value} style={`currency`} currency="BRL" /> 
										</td>
									</tr>
								
							))}
						</tbody>
					</table>
				</div>
				<div className="card-footer text-success">
					Total: <FormattedNumber value={revenueTotal} style={`currency`} currency="BRL" /> 
				</div>
            </div>
			
			<div className="expenses card">
                <div className="card-body">
					<div className="card-title text-uppercase mb-3 text-danger">Despesas</div>
					<div className="overflow-auto">						
						<table className="table table-sm ">
							<thead>
								<tr>
									<th scope="col">Descrição</th>
									<th scope="col" width="50%" className="text-right">Valor</th>
								</tr>
							</thead>
							<tbody>
								{ expenses.map ( (expense, index) => (
									<tr key={index}>
										<td>{expense.name}</td>
										<td className="text-right"><FormattedNumber value={expense.value} style={`currency`} currency="BRL" /> 
										</td>
									</tr>
								
								))}
							</tbody>
							
						</table>
					</div>
				</div>
				
				<div className="card-footer text-danger ">
					Total: <FormattedNumber value={expenseTotal} style={`currency`} currency="BRL" /> 
				</div>
            </div>

			

			<div className="other goal card d-flex justify-content-center align-items-center">				
				<span className="title">Nossa Meta</span>
				<span className="display-4"><FormattedNumber value={expenseTotal} style={`currency`} currency="BRL" /></span>				
            </div>

            <div className="other target card d-flex justify-content-center align-items-center">
				<span className="title">Quanto Falta</span>
				<span className="display-4"><FormattedNumber value={result} style={`currency`} currency="BRL" /> </span>				
            </div>
            
        </div>
    );
}