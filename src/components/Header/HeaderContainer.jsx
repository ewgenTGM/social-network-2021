import {connect} from "react-redux";
import Header from "./Header";
import {setMeAC} from "../../redux/header-reducer";
import {setIsAuthAC} from "../../redux/auth-reducer";

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