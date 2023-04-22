import { useCallback } from "react";
import useSWR, { useSWRConfig } from "swr";

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

  if (error) return <div>An error has occurred.</div>;
  if (!users) return <div>Loading...</div>;

  console.log(users);
  
  return (
    <>
      User Page
      {users.map((user) => user.name)}
    </>
  )
};

export default UserPage;
