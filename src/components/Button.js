import React, { Component } from 'react'

export default class Button extends Component {

    formatCount() {
        const { value } = this.props.counters;
        return value;
    }
    
    render() {
        const { onIncrement, onDecrement } = this.props;
        return (
            <div className="col">
                <table className="table table-dark table-striped table-bordered table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Tarea</th>
                            <th scope="col">Periodo</th>
                            <th scope="col">Puntos</th>
                            <th scope="col">Número de veces</th>
                            <th scope="col">Botones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.counters.map(counter => 
                        <tr> 
                            <td>{counter.description}</td>
                            <td style={{marginTop: "8px"}}className="badge badge-pill badge-primary ml-2">{counter.tiempo}</td>
                            <td>{counter.value}</td>
                            <td>{counter.contador}</td>
                            <td>
                            <button 
                                className="btn btn-success btn-sm mr-2" 
                                onClick={() => onIncrement(counter)}
                                disabled={counter.contador === counter.max ? "disabled" : ""}
                                //style={counter.contador === counter.max ? {
                                //    display:"none"
                                //    } : {display:"inline"}
                               // }
                            >
                                Añadir
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => onDecrement(counter)}
                                disabled={counter.value === 0 ? "disabled" : ""}
                                //style={counter.value === 0 ? {
                                //    display:"none",
                                //    } : {display:"inline"}
                                //}
                            >
                                Quitar
                            </button></td>
                        </tr> )} 
                    </tbody>
                </table>
            </div>
        );
    }
}

