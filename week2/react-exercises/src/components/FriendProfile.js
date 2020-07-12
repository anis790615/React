import React from "react";
import PropTypes from "prop-types";

const FriendProfile = ({profile, loaded}) => {
    const {name, location, email, phone} = profile;
    return (
        <>
            {loaded && (
                <ul className="friendCard">
                    <li>
                        Name: {name.first} {name.last}
                    </li>
                    <li>
                        Address: {location.street.name} {location.street.number}
                        , {location.city} {location.country}
                    </li>
                    <li>Email: {email}</li>
                    <li>Phone: {phone}</li>
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
