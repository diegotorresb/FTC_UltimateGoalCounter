<div className="col-md-4">
    <div className="card mt-2 mb-4">
        <div className="card-header">
            <h5>{this.props.counter.description}</h5>
            <span className="badge badge-pill badge-primary ml-2">{this.props.counter.tiempo}</span>
        </div>
        <div className="card-body">
            <p>Puntos: {this.formatCount()}</p>
            <p>Número de veces: {this.props.counter.contador}</p>
            <div>
                <button 
                    className="btn btn-success btn-sm m-2" 
                    onClick={() => onIncrement(this.props.counter)}>
                    Add
                </button>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDecrement(this.props.counter)}
                    disabled={this.props.counter.value === 0 ? "disabled" : ""}
                    style={this.props.counter.value === 0 ? {
                        display:"none",
                        } : {display:"block"}
                    }>
                        Delete
                </button>
            </div>
        </div>
    </div>
</div>