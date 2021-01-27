import styles from './App.module.css';
import SideBar from "./components/SideBar/SideBar";
import UserProfile from "./components/UserProfile/UserProfile";
import {Route, Switch} from 'react-router-dom'
import NotFound from "./components/NotFound/NotFound";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <>
            <HeaderContainer/>
            <div className={styles.app_container}>
                <SideBar/>
                <div className={styles.user_content}>
                    <Switch>
                        <Route
                            exact={true}
                            render={() => <UserProfile/>}
                            path='/userProfile'/>
                        <Route
                            exact={true}
                            render={() => <UserProfile/>}
                            path='/'/>
                        <Route
                            render={() => <DialogsContainer/>}
                            path='/dialogs'/>
                        <Route exact={true}
                               render={() => <UsersContainer/>}
                               path='/users/'/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </>
    );
}

export default App;
