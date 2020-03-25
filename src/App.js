import React, { Component } from 'react';
import logo from './logo.svg'; 
import Customer from './Component/Customer'
import './App.css'; 


const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday': '940725',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id':123,
  'image':'https://placeimg.com/64/64/2',
  'name':'김수찬',
  'birthday': '960509',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'심인보',
  'birthday': '950531',
  'gender' : '남자',
  'job' : '프로그래머'
}]
class App extends Component { 
  render() { 
    return (
      <div>
        {customers.map(c =>{
            return(
            <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              job = {c.job}
              gender = {c.gender}/>
            )
          })
        }
      </div>
      );
    }
  }

export default App;