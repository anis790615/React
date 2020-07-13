import React from "react";
import PropTypes from "prop-types";

const FriendProfile = ({profile, loaded}) => {
    if (loaded) {
        profile = profile.results[0];
    }
    return (
        <>
            {loaded && (
                <ul className="friendCard">
                    <li>
                        Name: {profile.name.first} {profile.name.last}
                    </li>
                    <li>
                        Address: {profile.location.street.name}{" "}
                        {profile.location.street.number},{" "}
                        {profile.location.city} {profile.location.country}
                    </li>
                    <li>Email: {profile.email}</li>
                    <li>Phone: {profile.phone}</li>
                </ul>
            )}
        </>
    );
};

FriendProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    loaded: PropTypes.bool.isRequired,
};

export default FriendProfile;
