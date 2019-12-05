import React, { Component } from 'react'
import * as firebase from 'firebase/app'
import { Link } from 'react-router-dom'


import '../styles/PagJogo.css'
import backIcon from '../images/backIcon.png'

class Noticia extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            Nome: null,
            Designer: null,
            Tema: null,
            Preco: null,
            Desconto: null,
            Imagem: null,

            aviso: '',
        }
    }

    componentDidMount = () => {
        const { match: { params } } = this.props

        const db = firebase.firestore()

        var docRef = db.collection("boardgames").doc(params.id);

        docRef.get().then(doc => {
            if (doc.exists) {
                this.setState({ id: doc.id, ...doc.data(), })
            } else {
                // doc.data() will be undefined in this case
                console.log("Erro...");
            }
        }).catch(function (error) {
            console.log("Erro de conexão: ", error);
        });
    }

    comprar = () => {
        this.Aviso('Adicionado no carrinho!');
    }

    Aviso = (txt) => {
        this.setState({ aviso: txt })
        setTimeout(() => {
            this.setState({ aviso: '' })
        }, 5000)
    }

    render() {
        return (
            <div>
                <div className="col-sm-12" style={{ float: 'left' }}>
                    <Link to={'/'}>
                        <img src={backIcon} alt="Voltar" className="backIcon" />
                    </Link>
                </div>
                <div className="container pagBody">
                    <div className="col-sm-12">
                        <h1>{this.state.Nome}</h1>
                    </div>
                    <div className="col-sm-6">
                        <h6>Criado por: {this.state.Designer}</h6>
                    </div>
                    <div className="col-sm-12">
                        <img src={this.state.Imagem} className="pagImg" alt="Jogo" />
                    </div>
                    <br />
                    <div>
                        <h4 className="numberLast">R$ {Number(this.state.Preco).toFixed(2)}</h4>
                        <h3><div className="numberDesconto">R$ {Number((this.state.Preco / 100) * (100 - this.state.Desconto)).toFixed(2)}</div> ({this.state.Desconto}%)</h3>
                        <input type="button" className="btn btn-success mb-4" value="Adicionar no Carrinho" onClick={this.comprar} />
                    </div>
                </div>

                {
                    this.state.aviso !== '' ?
                        <div className='alert alert-info text-center mt-3 mr-5 ml-5'>
                            {this.state.aviso}
                        </div>
                        : ''
                }
            </div >
        )
    }
}

export default Noticia
