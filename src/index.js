/**
 * Created by pidoi on 3/27/2018.
 */
import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import TimeSloatBoard from './Components/TimeSlotBoard';
import {Provider} from 'react-redux';
import store from './store/index';
import Pop_up from './Components/Pop_up';
class App extends Component{
    render(){
        console.log("Hello Im React App Component");
        return(<Provider store={store}>
                <div>
                    <TimeSloatBoard/>
                    <Pop_up/>
                </div>
                 </Provider>)
    }
}
ReactDOM.render( <App/>, document.getElementById('root'));
