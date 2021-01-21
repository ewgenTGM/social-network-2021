import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './normalize.css';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

window.store = store.getState();

// const rerender = () => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <Provider store={store}>
//                     <App/>
//                 </Provider>
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }
// window.store = store.getState();
// store.subscribe(rerender);
// rerender();
