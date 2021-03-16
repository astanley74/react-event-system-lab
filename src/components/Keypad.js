
import React from 'react';

class Keypad extends React.Component {

    handleKeyUpEvent = () => {console.log("Entering password...")}

    render() {
        return(
            <div>
                <input type="password" onKeyUp={this.handleKeyUpEvent}/>
            </div>
        )
    }
}

export default Keypad;