
import { person } from "../../data/persons";
import payment from '../../data/payments.json'
import individual from '../../data/ipayments.json'

const combine = {...person,...individual, ...payment}
console.log(combine);
