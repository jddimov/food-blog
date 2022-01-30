import React from 'react';

function CreateDiffNumbers(numberOfStars) {
    if (numberOfStars == 1) {
        return <div>1/3</div>
    } else if (numberOfStars == 2) {
        return <div>2/3</div>
    } else if (numberOfStars == 3) {
        return <div>3/3</div>
    } else return <div>error</div>
    ;
}

export default CreateDiffNumbers;
