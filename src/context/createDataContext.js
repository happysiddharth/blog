import React ,{useReducer} from 'react';
import {Text} from 'react-native';

export default (reducer,actions,initialState)=> {
    const Context = React.createContext();
    const Provider = ({childern})=>{
        const [state,dispatch] = useReducer(reducer,initialState);
        const boundAction = {};
        for (let key in actions){
            boundAction[key] = actions[key][dispatch];
        }
        return <Context.Provider value={{state,...boundAction}}>{childern}</Context.Provider>;
    };
    return {Context,Provider};
};