import API from "./api";



// ================= GET MEMORIES =================
export const getMemories = async () => {

  const res = await API.get(
    "/api/memories"
  );

  return res.data.memories;
};



// ================= CREATE MEMORY =================
export const createMemory = async (data) => {

  const res = await API.post(
    "/api/memories",
    data,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return res.data.memory;
};



// ================= DELETE MEMORY =================
export const deleteMemory = async (id) => {

  const res = await API.delete(
    `/api/memories/${id}`
  );

  return res.data;
};