import { mockUsers } from "../mocks/data";

const wait = (data, delay = 350) => new Promise((resolve) => setTimeout(() => resolve(data), delay));

export const authService = {
  async login({ email }) {
    const normalizedEmail = email?.trim().toLowerCase();
    const user = mockUsers.find((item) => item.email.toLowerCase() === normalizedEmail);
    if (!user) throw new Error("No encontramos una cuenta asociada a ese correo.");
    return wait({ token: `mock-jwt-${user.id}`, user });
  },
  async logout() { return wait({ success: true }, 150); },
};
