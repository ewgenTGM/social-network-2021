import {addPostAC} from "../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

const mapStateToProps = (store) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostAC(text))
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
