import styles from './App.module.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import UserProfile from "./components/UserProfile/UserProfile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Switch} from 'react-router-dom'
import NotFound from "./components/NotFound/NotFound";

function App(props) {
    return (
        <>
            <Header/>
            <div className={styles.app_container}>
                <SideBar/>
                <div className={styles.user_content}>
                    <Switch>
                        {/*<Route exact={true}*/}
                        {/*       render={() => <UserProfile/>}*/}
                        {/*       path='/userProfile'/>*/}
                        {/*<Route exact={true}*/}
                        {/*       render={() => <UserProfile/>}*/}
                        {/*       path='/'/>*/}
                        <Route render={() => <Dialogs/>}
                               path='/dialogs'/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </>
    );
}

export default App;
