const UserCard = ({ user }) => {
    return (
      <div className="border p-4 rounded">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  };
  
  export default UserCard;
  