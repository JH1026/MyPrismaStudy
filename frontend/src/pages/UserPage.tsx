import axios from "axios";
import { useCallback, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { AxiosBase } from "../utils/api";

type User = {
  id: number,
  name: string;
  email: string;
}


const UserPage = () => {
  const { mutate } = useSWRConfig();
  const { data: users, error } = useSWR<User[]>(
    `/users`
  );

  const refreshUsers = useCallback(() => {
    mutate(`/users`);
  }, [mutate]);

  const [newUserName, setNewUserName] = useState<string>('');
  const [newUserEmail, setNewUserEmail] = useState<string>('');
  
  const addNewUsers = useCallback(async () => {
    if (!newUserName || !newUserEmail) {
      return;
    }
    await AxiosBase.post('/users', {
      name: newUserName,
      email: newUserEmail,
    });

    refreshUsers();
  }, [newUserEmail, newUserName, refreshUsers]);

  if (error) return <div>An error has occurred.</div>;
  if (!users) return <div>Loading...</div>;

  console.log(users);
  
  return (
    <div>
      <div style={{
        textAlign: 'left',
      }}>
        <h1>Users</h1>
        <label htmlFor="username">
          Your name
        </label>
        <br />
        <input id="username" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
        <br />
        <label htmlFor="email">
          Your email
        </label>
        <br />
        <input id="email" value={newUserEmail} onChange={(e) => setNewUserEmail(e.target.value)} />
        <br />
        <button onClick={addNewUsers}>
         Add New User
        </button>
      </div>
      <h1>User List</h1>
      {users.map((user) => {
        return (
          <div>
            UserName: {user.name}
            <br />
            UserEmail: {user.email}
          </div>
        );
      })}
    </div>
  )
};

export default UserPage;


