export function reducer (state , action){
    switch (action.type) {
        case "SET_USER":

                const value = action.user
                console.log("reducer" , value)
                state.user=value
            return {...state}
        case "COIN" : 
            const coin={...state}
            const price = action.coin
            const pay = (coin.coins - price)
            state.coins=pay
            return {...state}
        case "SET_COIN":
            const store = {...state}
            store.coins=action.coinTotal
            state.coins = store.coins    
            return {...state}
        case "COIN_ADD":
                const coins = {...state}
                const newTotal =(action.add + coins.coins)
                state.coins = newTotal
                        
                return {...state}
        default:
            return state
    }
}