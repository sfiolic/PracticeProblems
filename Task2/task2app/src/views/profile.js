import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { ContactFormComponent} from "../components";

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div>
    {user && (
      <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>


    <ContactFormComponent/>

    </div>
  )}
    {!user && (
      <div>
      <h1>Profile</h1>
      <p>
        You use will use an ID Token to get the profile information of a
        logged-in user.
        <br />
        <strong>This route should be protected</strong>.
      </p>
    </div>
  )}
  </div>
  );
};

export default Profile;
