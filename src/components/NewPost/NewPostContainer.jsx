import { connect } from "react-redux";
import { NewPost } from "./NewPost";
import { addPostAC } from "../../redux/redux-ts/profile-reducer-ts";

const mapStateToProps = ( store ) => {
    return {}
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        addPost: ( text ) => {
            dispatch( addPostAC( text ) )
        }
    }
}

const NewPostContainer = connect( mapStateToProps, mapDispatchToProps )( NewPost );

export default NewPostContainer;
