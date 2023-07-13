import View from "../View/View.jsx";
import {useLocation} from "wouter";
import PropTypes from "prop-types";

function ProfileView({params}) {

    const [, navigate] = useLocation();
    const handleHomeClick = () => {
            navigate('/')
    }

    return (
        <View>
            Profile view for profile ID: {params.profileId}
            <button onClick={handleHomeClick}>Back Home</button>
        </View>
    );
}

ProfileView.propTypes = {
    params : PropTypes.object
}

export default ProfileView;