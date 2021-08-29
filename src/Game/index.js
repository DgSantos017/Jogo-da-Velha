import { Container } from './style'
import { useState } from 'react'

const Game = () =>{

  const [ q1, setQ1 ] = useState('')
  const [ q2, setQ2 ] = useState('')
  const [ q3, setQ3 ] = useState('')
  const [ q4, setQ4 ] = useState('')
  const [ q5, setQ5 ] = useState('')
  const [ q6, setQ6 ] = useState('')
  const [ q7, setQ7 ] = useState('')
  const [ q8, setQ8 ] = useState('')
  const [ q9, setQ9 ] = useState('')

  const [ suaVez, setSuaVez ] = useState(true)
  
  const suaJogada = jogadaUsuario =>{

    if(jogadaUsuario === 'q1'){
      setQ1('X')
    }
    if(jogadaUsuario === 'q2'){
      setQ2('X')
    }
    if(jogadaUsuario === 'q3'){
      setQ3('X')
    }
    if(jogadaUsuario === 'q4'){
      setQ4('X')
    }
    if(jogadaUsuario === 'q5'){
      setQ5('X')
    }
    if(jogadaUsuario === 'q6'){
      setQ6('X')
    }
    if(jogadaUsuario === 'q7'){
      setQ7('X')
    }
    if(jogadaUsuario === 'q8'){
      setQ8('X')
    }
    if(jogadaUsuario === 'q9'){
      setQ9('X')
    }   

    if(suaVez){
      setSuaVez(false)
    }
    else{
      setSuaVez(true)
    }
  }

  const jogadaDoComputer = () =>{
    
  }

  return(
    <Container>
      <div>
        <button disabled={suaVez && q1 === '' ? false : true} style={{cursor:suaVez && q1 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q1')}> {q1} </button>
        <button disabled={suaVez && q2 === '' ? false : true} style={{cursor:suaVez && q2 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q2')}> {q2} </button>
        <button disabled={suaVez && q3 === '' ? false : true} style={{cursor:suaVez && q3 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q3')}> {q3} </button>
      </div>
      <div>
        <button disabled={suaVez && q4 === '' ? false : true} style={{cursor:suaVez && q4 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q4')}> {q4} </button>
        <button disabled={suaVez && q5 === '' ? false : true} style={{cursor:suaVez && q5 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q5')}> {q5} </button>
        <button disabled={suaVez && q6 === '' ? false : true} style={{cursor:suaVez && q6 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q6')}> {q6} </button>
      </div>
      <div>
        <button disabled={suaVez && q7 === '' ? false : true} style={{cursor:suaVez && q7 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q7')}> {q7} </button>
        <button disabled={suaVez && q8 === '' ? false : true} style={{cursor:suaVez && q8 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q8')}> {q8} </button>
        <button disabled={suaVez && q9 === '' ? false : true} style={{cursor:suaVez && q9 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q9')}> {q8} </button>
      </div>
       
    </Container>
  )
}

export default Game
