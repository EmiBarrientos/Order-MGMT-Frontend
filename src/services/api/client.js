const API_BASE_URL = "http://localhost:8080";

export async function apiGet(path) {
  const res = await fetch(`${API_BASE_URL}${path}`,{
    credentials: "include",
  });
  

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

export async function apiPost(path, data) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

export async function apiPut(path, data) {

   const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  const text = await res.text();
  try {
  return text ? JSON.parse(text) : null;
} catch {
  return text;
}
}


export async function apiDelete(path) {

   const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  const text = await res.text();
 try {
  return text ? JSON.parse(text) : null;
} catch {
  return text;
}
}
