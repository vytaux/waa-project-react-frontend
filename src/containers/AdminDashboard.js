import React, {useCallback, useEffect} from "react";
import FetchService from "../service/FetchService";

function AdminDashboard({ currentUser }) {
  // always authenticated and authorized

  const [ownersState, setOwnersState] = React.useState([]);

  const refreshOwners = useCallback(() => {
    FetchService.getPendingOwners(currentUser.accessToken).then((response) =>
      setOwnersState(response.data)
    );
  }, [currentUser.accessToken]);

  useEffect(() => refreshOwners(), [refreshOwners]);

  const approveOwner = (userId) => {
    FetchService.approveOwner(currentUser.accessToken, userId).then(() =>
      refreshOwners()
    );
  };

  return (
    <main className="admin-dashboard-content">
      <h1>Pending users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        {ownersState.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>
              <button onClick={() => approveOwner(user.id)}>Approve</button>
            </td>
          </tr>
        ))}
      </table>
    </main>
  );
}

export default AdminDashboard;
