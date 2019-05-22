import {createContext} from 'react';
import Avatar from '../src/images/avatar.jpg'


export const AppContext = createContext({
    check:'hello',
    eyeToggle:false,
    candidateData:[{id:'1', image:Avatar},{id:'2', image:Avatar},{id:'3', image:Avatar},{id:'4', image:Avatar},{id:'5', image:Avatar},
    {id:'6', image:Avatar},{id:'7', image:Avatar},{id:'8', image:Avatar},{id:'9', image:Avatar},{id:'10', image:Avatar}]
})