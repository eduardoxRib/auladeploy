import React, { Component } from 'react'

import * as firebase from 'firebase/app'
import 'firebase/firestore'

import ItemGame from './ItemGame'

class Jogos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boardgames: [],
        }
    }

    componentDidMount = () => {
        this.loadGames()
    }

    async loadGames() {
        let boardgames = []

        if (navigator.onLine) {
            firebase.firestore().collection('boardgames').orderBy('Nome').onSnapshot(snapshot => {

                snapshot.docChanges().forEach(change => {

                    if (change.type === "added") {
                        boardgames.push({ id: change.doc.id, ...change.doc.data() })
                    }

                    if (change.type === "modified") {
                        boardgames = boardgames.map(boardgame => boardgame.id === change.doc.id ?
                            { id: change.doc.id, ...change.doc.data() }
                            : boardgame)
                    }

                    if (change.type === "removed") {
                        boardgames = boardgames.filter(boardgame => boardgame.id !== change.doc.id)
                    }
                })
                this.setState({ boardgames })
                localStorage.setItem("Jogos", JSON.stringify(boardgames))
            })
        } else {
            const jogos = await JSON.parse(localStorage.getItem('Jogos'))
            this.setState({ boardgames: jogos })
        }

    }

    render() {
        return (
            <div className="container sm-12" style={{ backgroundColor: 'white' }}>
                <br />
                <div className="container" style={{ marginTop: '2vh' }}>
                    <div className='row justify-content-center'>
                        {this.state.boardgames.map((boardgame) => (
                            <ItemGame key={boardgame.id}
                                id={boardgame.id}
                                titulo={boardgame.Nome}
                                designer={boardgame.Designer}
                                imagem={boardgame.Imagem}
                                preco={boardgame.Preco}
                                desconto={boardgame.Desconto} />
                        ))}
                    </div>
                </div>
            </div >
        )
    }
}

export default Jogos
