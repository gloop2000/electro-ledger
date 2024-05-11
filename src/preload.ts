// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  ping: (): Promise<string> => {
    return ipcRenderer.invoke("ping");
  },
  addUser: (user: { username: string; email: string }) => {
    ipcRenderer.invoke("add-user", user);
  },

  getAllUsers: () => {
    return ipcRenderer.invoke("get-all-users");
  },
});
