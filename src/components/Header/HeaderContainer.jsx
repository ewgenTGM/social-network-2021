import {connect} from "react-redux";
import Header from "./Header";
import {setMeAC} from "../../redux/header-reducer";

const mapStateToProps = (state) => {
    return {
        me: state.header
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMe: (id, login, email) => dispatch(setMeAC(id, login, email)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);