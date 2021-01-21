import {sendMessageAC} from "../../redux/dialog-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messages: state.userDialogsPage.userMessages.messageItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageText) => dispatch(sendMessageAC(messageText)),
    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;

