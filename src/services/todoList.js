import api from "@/services/api";

export const getTasks = async () => {
  const response = await api.get(`/tasks`);
  return response.data;
};

export const postTask = async (taskData) => {
      const response = await api.post('/tasks', taskData);
      return response.data;
  };

export const editTaskFromAPI = async (id, updatedTaskData) => {
      const response = await api.put(`/tasks/${id}`, updatedTaskData);
      return response.data;
    
  };

  export const deleteTaskFromAPI = async (id) => {
      const response = await api.delete(`/tasks/${id}`);
      return response.data;
  };
