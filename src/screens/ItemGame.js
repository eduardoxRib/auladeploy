import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/ItemGame.css'

const ItemGame = props => (
    <div className="card col-12 col-md-3" >
        <Link to={`/jogo/${props.id}`}>
            <img className="imagem" src={props.imagem} alt='Tela' />
        </Link>
        <div className="card-body">
            <h4 className="card-title">{props.titulo}</h4>
            <p className="card-text" style={{ float: 'bottom' }}>Designer: {props.designer}<br /></p>
        </div>
        <div style={{ textAlign: "center" }}>
            <h4 className="numberLast">R$ {Number(props.preco).toFixed(2)}</h4>
            <h3><div className="numberDesconto">R$ {Number((props.preco / 100) * (100 - props.desconto)).toFixed(2)}</div> ({props.desconto}%)</h3>
        </div>
        <div style={{ textAlign: "center" }}>
            <Link to={`/jogo/${props.id}`}>
                <input type="button" value="Comprar" className="btn btn-danger mb-2" />
            </Link>
        </div>
    </div>
)

export default ItemGame