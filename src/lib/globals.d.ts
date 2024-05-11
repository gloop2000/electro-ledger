declare namespace api {
  function ping(): Promise<string>;
  function addUser(user: {
    username: string;
    email: string;
  }): Promise<{ success: boolean; error?: string }>;

  function getAllUsers(): Promise<any>;
}
