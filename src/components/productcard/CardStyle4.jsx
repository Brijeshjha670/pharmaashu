import React from 'react'
import styled from 'styled-components'

const CardStyle4 = () => {
  return (
    <Card>
      <div className="image">
        <img src="/img/medical.png" alt="" />
      </div>
      <div className="content">
        <div className="number">
            1.
        </div>
        <div className="info">
            <div className="title">
                Development
            </div>
            <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto molestias autem quam assumenda dolores aut perspiciatis ut placeat voluptatibus? Ducimus commodi rem quam tempore aliquid!
            </div>
        </div>
      </div>
    </Card>
  )
}
const Card = styled.div`
    img{
        width: 100%;
        height: auto;
    }
    .content{
        display: flex;
        gap: 10px;
    }
    .info{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .title{
        color: #333;
        font-weight: 600;
        font-size: 18px;
        
    }
    .desc{
        font-size: 15px;
        color: gray;
    }
    .number{
        font-size: 100px;
        font-weight: 400;
        color: var(--primary-color);
    }
`
export default CardStyle4
