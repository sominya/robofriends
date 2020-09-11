import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    const cardListTag = robots.map((user, i) => { 
        return <Card key={i} id={user.id} name={user.name} email={user.email} />
    } )
    return (
        <div>
            {cardListTag}
        {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} /> */}
      </div>
    );
}

export default CardList;