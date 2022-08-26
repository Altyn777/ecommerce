import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTZkZWQ4NGI4YTM3MDI3ZGU0Y2JhZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTUyMzYwMSwiZXhwIjoxNjYxNzgyODAxfQ.FKMCBRdugW7di5mm84aSysuJJxK-zJxOT0rTIoiLylA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: `Bearer ${TOKEN}`,
  },
});
