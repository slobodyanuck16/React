import React from 'react';
import Greeting from './Greeting'

const App = () => {
    return (
    <Greeting 
        firstName="Nikita" 
        lastName="Slobodyanuck" 
        birthDate={new Date('1998-04-16T11:11:11.819Z')}
         />
    );
}; 

export default App;