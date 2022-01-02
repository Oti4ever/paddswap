// import React from 'react';
// import './App.css';
// import { Status } from './components/AdvancedProps/Status';
// import { Heading } from './components/AdvancedProps/Heading';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Oscar } from './components/AdvancedProps/Oscar';
// import { Button } from './components/EventAsProps/Button';
// import { Input } from './components/EventAsProps/Input';
// import { Container } from './components/StyleAsProps/Container';
// import { LoggedIn } from './components/State/LoggedIn';
// import { User } from './components/State/User';
// import { CustomButton } from './components/Html/Button';
// import { Text } from './components/Polymorphic/Text';

// function App() {

//   // specifying for an object 
//   const PersonName = {
//     first: 'Bruce',
//     last: 'Wayne'
//   }

//   // specifying for an array

//   const nameList = [
//     {
//       first: 'Lee',
//       last: 'Robinson'
//     },
//     {
//       first: 'Lionel',
//       last: 'Messi'
//     },
//     {
//       first: 'Rich',
//       last: 'Mantis'
//     },
//     {
//       first: 'Jericho',
//       last: 'Riddes'
//     },
//   ]

//   return (
//     <div className="App">
//       <Text as="h1" size='lg'>Heading</Text>
//       <Text as="p" size='md'>Paragraph</Text>
//       <Text as= "label" size='sm' color="secondary">
//         Label
//       </Text>

//       <CustomButton
//         variant="primary"
//         onClick={() => console.log('clicked')
//       }>
//         Primary Button
//       </CustomButton>
      
      
//       <Greet
//         name="Mary"
//         messageCount= {23}
//         isLoggedIn = {false}
//       />

//       <Person
//         // passing an object as props
//         name = {PersonName}
//       />

//       <PersonList
//         names= {nameList}
//       />

//       <Status
//         status="loading"
//       />

//       <Heading>
//         Placeholder text
//       </Heading>

//       <Oscar>
//         <Heading>
//           Oscar goes to Leonardo Dicpario
//         </Heading>
//       </Oscar>

//       <Greet
//         name="Anna"
//         isLoggedIn = {true}
//       />

//       <Button handleClick={(event, id) => {
//         console.log('Button was clicked', event, id)
//       }} />
      
//       <Input
//         value=""
//         handleChange={(event) => {
//           console.log(event);
          
//         }}
//       />

//       <Container
//         styles={{border: "1px solid black", padding: "1rem"}}
//       />
      
//       <LoggedIn />
//       <User/>


//     </div>
//   );
// }

// export default App;

import React from 'react'

function Head() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default Head
