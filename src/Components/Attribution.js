import React from "react";

function Attribution(props) {
    return (
        <a href='https://www.themoviedb.org/' target='_blank'>
            <img style={{
                width: '80px',
                height: '80px',
                float: 'right'
            }}
                 src='https://www.themoviedb.org/assets/2/v4/logos/293x302-powered-by-square-green-3ee4814bb59d8260d51efdd7c124383540fc04ca27d23eaea3a8c87bfa0f388d.png'/>
        </a>
    )
}

export default Attribution;
