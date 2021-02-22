import {connect} from "react-redux";
import {setMeAC} from "../../redux/header-reducer";
import { setIsAuthAC } from "../../redux/redux-ts/auth-reducer-ts";
import { Header } from "./Header";

const mapStateToProps = (state) => {
    return {
        me: state.header,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMe: (id, login, email) => dispatch(setMeAC(id, login, email)),
        setIsAuth: isAuth => dispatch(setIsAuthAC(isAuth))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);