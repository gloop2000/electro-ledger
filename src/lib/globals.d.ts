declare namespace api {
  function ping(): void;
  function addUser(user: {
    username: string;
    email: string;
  }): Promise<{ success: boolean; error?: string }>;
}
