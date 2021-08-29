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
  
  const suaJogada = jogadaUsuario =>{

    if(jogadaUsuario === 'q1'){
      setQ1('X')
      if(q5 === ''){
        setQ5('O')
      }
    }
    if(jogadaUsuario === 'q2'){
      setQ2('X')
      if(q5 === ''){
        setQ5('O')
      }
    }
    if(jogadaUsuario === 'q3'){
      setQ3('X')
      if(q5 === ''){
        setQ5('O')
      }
    }
    if(jogadaUsuario === 'q4'){
      setQ4('X')
      if(q5 === ''){
        setQ5('O')
      }
    }
    if(jogadaUsuario === 'q5'){
      setQ5('X')
      if(q3 === ''){
        setQ3('O')
      }
    }
    if(jogadaUsuario === 'q6'){
      setQ6('X')
      if(q5 === ''){
        setQ5('O')
      }
    }
    if(jogadaUsuario === 'q7'){
      setQ7('X')
      if(q5 === ''){
        setQ5('O')
      }
    }
    if(jogadaUsuario === 'q8'){
      setQ8('X')
      if(q5 === ''){
        setQ5('O')
      }
    }
    if(jogadaUsuario === 'q9'){
      setQ9('X')
      if(q5 === ''){
        setQ5('O')
      }
    }   

  }

  return(
    <Container>
      <div>
        <button disabled={q1 === '' ? false : true} style={{cursor:q1 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q1')}> {q1} </button>
        <button disabled={q4 === '' ? false : true} style={{cursor:q4 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q4')}> {q4} </button>
        <button disabled={q7 === '' ? false : true} style={{cursor:q7 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q7')}> {q7} </button>
      </div>
      <div>
        <button disabled={q2 === '' ? false : true} style={{cursor:q2 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q2')}> {q2} </button>
        <button disabled={q5 === '' ? false : true} style={{cursor:q5 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q5')}> {q5} </button>
        <button disabled={q8 === '' ? false : true} style={{cursor:q8 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q8')}> {q8} </button>
      </div>
      <div>
        <button disabled={q3 === '' ? false : true} style={{cursor:q3 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q3')}> {q3} </button>
        <button disabled={q6 === '' ? false : true} style={{cursor:q6 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q6')}> {q6} </button>
        <button disabled={q9 === '' ? false : true} style={{cursor:q9 === '' ? 'pointer' : 'auto'}} onClick={() => suaJogada('q9')}> {q9} </button>
      </div>
       
    </Container>
  )
}

export default Game
