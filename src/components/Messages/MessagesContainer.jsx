import { connect } from "react-redux";
import { sendMessageAC } from "../../redux/redux-ts/dialog-reducer-ts";
import { Messages } from "./Messages";

const mapStateToProps = ( state ) => {
    return {
        messages: state.userDialogsPage.messages
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        sendMessage: ( messageText ) => dispatch( sendMessageAC( messageText ) ),
    }
}
const MessagesContainer = connect( mapStateToProps, mapDispatchToProps )( Messages );

export default MessagesContainer;

