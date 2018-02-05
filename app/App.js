import React from 'react'
import RouteMap from './router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers  from './reducers'
import thunk from 'redux-thunk'



const store = createStore(
    reducers ,
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : undefined
)

class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <RouteMap/>
            </Provider>
        )
    }
}

export default App