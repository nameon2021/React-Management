import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
    'id': 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name': 'KNE React library test version',
    'birthday': '20200107',
    'gender' : 'male',
    'job' : 'software developer React + Firebase test' 
},
{
    'id': 2,
    'image' : 'https://placeimg.com/64/64/any',
    'name': 'KNE React library test version',
    'birthday': '20200107',
    'gender' : 'male',
    'job' : 'software developer React + Firebase test' 
},
{
    'id': 3,
    'image' : 'https://placeimg.com/64/64/any',
    'name': 'KNE React library test version',
    'birthday': '20200107',
    'gender' : 'male',
    'job' : 'software developer React + Firebase test' 
},
]

class App extends Component {
    render() {
        return (
            <div>
                {/* <Customer
                    id={customers[0].id}
                    image={customers[0].image}
                    name={customers[0].name}
                    birthday={customers[0].birthday}
                    gender={customers[0].gender}
                    job={customers[0].job}
                />
                <Customer
                    id={customers[1].id}
                    image={customers[1].image}
                    name={customers[1].name}
                    birthday={customers[1].birthday}
                    gender={customers[1].gender}
                    job={customers[1].job}
                />
                <Customer
                    id={customers[2].id}
                    image={customers[2].image}
                    name={customers[2].name}
                    birthday={customers[2].birthday}
                    gender={customers[2].gender}
                    job={customers[2].job}
                /> */}
                { // 반복문으로 배열 소스 compact
                    customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name} gender={c.gender} job={c.job}/>);})
                }
            </div>
        );
    }
}

export default App;
