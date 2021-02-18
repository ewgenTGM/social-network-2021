import { connect } from "react-redux";
import { UserProfileInfo } from "./UserProfileInfo";

const mapStateToProps = ( state ) => {
    return {
        userInfo: state.userProfilePage.userInfo
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {}
}
const UserProfileInfoContainer = connect( mapStateToProps, mapDispatchToProps )( UserProfileInfo );

export default UserProfileInfoContainer;