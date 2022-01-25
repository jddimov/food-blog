import React from 'react';

function UniversalTestPage(props) {
  return <div>
<div>zdr universal page</div>
<div>zdr universal page</div>
<div>zdr universal page</div>
<div>zdr universal page</div>
<div>zdr universal page5</div>
<div>zdr universal page</div>
<div>zdr universal page</div>
<div>zdr universal page</div>
<div>zdr universal page</div>
<div>zdr universal page10</div>

<img src={props.imgMain} className='card-image'></img>
                <div>{props.minutes}</div>
                <div>{props.ingredients}</div>
                <div>{props.servings}</div>
                <div>{props.minutes}</div>
                <div>{props.ingredients}</div>
                <div>{props.servings}</div>
  </div>;
}

export default UniversalTestPage;
