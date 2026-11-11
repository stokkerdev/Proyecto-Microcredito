import { mockApplications } from "../mocks/data";
import client from "../api/client";

export async function createLoanApplication(payload) {
  const response = await client.post("/applications", payload);
  if (!response.data?.success || !response.data?.data?.applicationNumber) {
    throw new Error("El servidor no devolvió una confirmación válida.");
  }
  return response.data.data;
}

const wait = (data, delay = 300) => new Promise((resolve) => setTimeout(() => resolve(data), delay));

export const applicationService = {
  list: () => wait(mockApplications),
  getMine: () => wait(mockApplications[0]),
  create: createLoanApplication,
};
