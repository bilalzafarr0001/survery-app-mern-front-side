export const client = (endpoint, { values, ...customConfig } = {}) => {
  const token = localStorage.getItem("token");
  console.log("token", token);
  const headers = { "Content-Type": "application/json" };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: values ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (values) {
    config.body = JSON.stringify(values);
  }

  return fetch(`http://localhost:8000/api${endpoint}`, config).then(
    async (res) => {
      const data = await res.json();

      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  );
};

export const clientDelete = (endpoint, { values, ...customConfig } = {}) => {
  const adminLogin = localStorage.getItem("adminLogin");
  const headers = { "Content-Type": "application/json" };

  const config = {
    method: "DELETE",
    ...customConfig,
  };

  return fetch(`http://localhost:8000/api${endpoint}`, config).then(
    async (res) => {
      const data = await res.json();

      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  );
};
