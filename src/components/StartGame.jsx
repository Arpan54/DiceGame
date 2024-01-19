import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/button'

const StartGame = ({ toggle }) => {
  return (
    <Container>
        <div>
            <img src="/public/dices.png" alt="Dice Img" />
        </div>
        
        <div className='leftContainer'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .leftContainer{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        h1{
            font-size: 96px;
            font-weight: 700;
            white-space: nowrap;
        }
    }
`
