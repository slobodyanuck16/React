import React from "react";
import moment from "moment";

const formatDate = (date) => moment(date).format("DD MMM YYYY");

const Profile = (props) => {
    return (
        <>
            <div className="profile">
                {`${props.userData.firstName} ${props.userData.lastName}`}
            </div>
            <div>
                {`Was born ${formatDate(props.userData.birthDate)}
                 in ${props.userData.birthPlace}`}
            </div>
        </>
    );
};
export default Profile;
