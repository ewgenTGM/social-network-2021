import authReducer, { setIsAuthAC } from "./auth-reducer";

test('Set is auth to true', ()=>{
    const state = {
        isAuth: false
    }
    let value = true
    const action = setIsAuthAC(value)
    let newState = authReducer(state, action);
    expect(state).not.toBe(newState);
    expect(newState.isAuth).toBe(value)
})

test('Set is auth to false', ()=>{
    const state = {
        isAuth: false
    }
    let value = false
    const action = setIsAuthAC(value)
    let newState = authReducer(state, action);
    expect(state).not.toBe(newState);
    expect(newState.isAuth).toBe(value)
})