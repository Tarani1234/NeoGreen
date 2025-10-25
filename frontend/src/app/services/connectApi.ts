import axios from "axios";

const API_URL = "http://localhost:5000/api/admin/"; 

export type ContentType = {
  _id?: string;
  section: string;
  title: string;
  description: string;
  imageUrl: string;
};

export const getContent = async (section: string): Promise<ContentType | null> => {
  const res = await axios.get<ContentType[]>(API_URL);
  const item = res.data.find((item) => item.section === section);
  return item || null;
};

export const addContent = async (data: ContentType) => {
  const res = await axios.post<ContentType>(API_URL, data);
  return res.data;
};

export const updateContent = async (id: string, data: ContentType) => {
  const res = await axios.put<ContentType>(`${API_URL}/${id}`, data);
  return res.data;
};

export const deleteContent = async (id: string) => {
  const res = await axios.delete<ContentType>(`${API_URL}/${id}`);
  return res.data;
};
