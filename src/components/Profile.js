import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="profile-page">
      <h1>Welcome to Profile Page</h1>
      <div className="user-profile-img">
        <img
          alt="profileImg"
          src={user.photoURL}
          className="user-profile-photo"
        ></img>
      </div>

      <div className="middle-container">
        <p> • Display name: {user.displayName}</p>
        <p> • Email: {user.email}</p>
        <p> • User id: {user.uid}</p>
      </div>
    </div>
  );
}
