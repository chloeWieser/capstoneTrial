import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import Albums from './components/Albums';
import Album from './components/Album';
import Home from './components/Home';
import BaseLayout from './components/layout/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reduxThunk from 'redux-thunk'
import RequireAuth from './components/RequireAuth'
import { checkToken } from './actions'
import Comment from './components/Comment'

// initializing redux store
// requires a reducer. Second argument is for redux dev-tools extension.
// let store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//func1(func2(func3(func4))))
//compose(func1, func2, func3, func4)



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, {},
    composeEnhancers(applyMiddleware(reduxThunk)));


store.dispatch(checkToken())

//provider hooks react to redux.  
//Must pass redux instance to provider via "store" prop.

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <BaseLayout>
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
                        <Route path='/signout' element={<Signout />} />
                        <Route path='/signin' element={<Signin />} />
                        <Route path='/albums' element={<Albums />} />
                        <Route path='/album' element={<Album />} />
                        <Route path='/comment' element={<Comment />} />
                    </Routes>

                </BaseLayout>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);