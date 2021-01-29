import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../HOC/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogs: state.userDialogsPage.dialogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs));

export default DialogsContainer;
