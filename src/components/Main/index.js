import React, { Component } from 'react';
import Counter from '../Counter';
import './styles.css'
class Main extends Component{
    state = {
        counters: [],
        countId: 0,
    }



    addCounter = () =>{
        
        const {counters, countId} = this.state;
        
        const name = document.querySelector('input[name="name"]').value;
        document.querySelector('input[name="name"]').value = "";

        if (name === "") return
        counters.push({
            name: name,
            id: countId
        })
        const newCountId = countId + 1
        this.setState({counters: counters, countId: newCountId})
        
        console.log(this.state)
    }

    excludeCounter = () =>{
        const {counters} = this.state;

        const name = document.querySelector('input[name="name"]').value;
        document.querySelector('input[name="name"]').value = "";

        const newCounters = counters.filter((counter) => {
            return counter.name !== name;
        });
        
        this.setState ({counters: newCounters});
    }

    render(){
        const { counters } = this.state

        return(
            <main>
                <div className="creating-interface" id="creating-interface">
                    <h2>Crie ou delete um contador digitando o nome dele abaixo!</h2>
                    <div className="create-counter">
                        <input type="text"  id="name" name="name" placeholder="Digite um nome"></input>
                        <div className="buttons-criar-deletar">
                            <button id="criar" onClick={this.addCounter}>Crie</button>
                            <button id="deletar" onClick={this.excludeCounter}>Delete</button>
                        </div>
                    </div>
                </div>
                <div className="counters-interface">
                    {counters.map(counter =>{
                        return(
                            <Counter key={counter.id} counter = {counter}/>
                        )
                    })}
                </div>
            </main>
        )
    }
}

export default Main