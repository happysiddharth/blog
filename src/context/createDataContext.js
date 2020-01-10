import React ,{useReducer} from 'react';


export default (reducer,actions,initialState)=> {
    const Context = React.createContext();
    const Provider = (c)=>{
        const [state,dispatch] = useReducer(reducer,initialState);
        const boundAction = {};
        for (let key in actions){
            boundAction[key] = actions[key][dispatch];
        }
        return <Context.Provider value={{state,...boundAction}}>{c.childern}</Context.Provider>;
    };
    return {Context,Provider};
};