
import { person } from './persons';
import payments from './payments.json';
import ip from './ipayments.json';

const joinData =(payments)=>{
const userByCity = {}
person.forEach(user =>{
    userByCity[user.company] = user
})

const result = ip.map(userpay =>{
    const persons = userByCity[userpay.number]
    
})

}
