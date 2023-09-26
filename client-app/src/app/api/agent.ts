import axios, { AxiosError, AxiosResponse } from "axios";
import { User, UserSignInForm, UserSignUpForm } from "../models/user";
import { Session, SessionAttendees, SessionFormValues } from "../models/session";
import { toast } from "react-toastify";
import { router } from "../routes/Routes";
import { Attendee } from "../models/attendance";
import { Pagination } from "../models/pagination";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

axios.interceptors.request.use(async (config) => {
  try {
    const token = JSON.parse(localStorage.getItem("user") || "{}").token;
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

axios.interceptors.response.use(async (response: AxiosResponse) => {

    await sleep(500);

    const pagination = response.headers["pagination"];
    if (pagination) {
      response.data = {
        items: response.data,
        metaData: JSON.parse(pagination),
      };

      return response as AxiosResponse<Pagination<any>>;
    }


    return response;
    
  }, async (error: AxiosError) => {

    if (!error.response) {
      toast.error('Network error - make sure API is running!');
      return await Promise.reject(error);
    }

    console.log("error, response ", error.response)
    
    const { data, status, config, headers } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (typeof data === "string" && !data.includes("You do not have any active session") ) {
          toast.error(data);
        }
        if (config.method === "get" && data.errors?.hasOwnProperty("id")) {
          router.navigate("/not-found");
        }
        if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        }
        break;
      case 401:
        if (status === 401 && headers['www-authenticate'].startsWith('Bearer error="invalid_token"')) {
          localStorage.removeItem('user');
          toast.error('Session expired - please login again');
          router.navigate("/login");
      } else {
          toast.error(data.title || 'Unauthorized');
      }
      break;
      case 404:
        router.navigate("/not-found");
        break;
      
      case 405:
        toast.error('Method not allowed');
        break;
      case 500:
        router.navigate("/server-error", { state: { error: data } });
        break;
    }
    return await Promise.reject(error);
  });




const requests = {
  get: <T>(url: string, params?: URLSearchParams) => axios.get<T>(url, {params}).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Attendance = {
    createAttendee: (sessionId: string, accessToken: string, linkToken: string) => requests.post<Attendee>(`/attendance/createAttendee/${sessionId}?accessToken=${accessToken}&linkToken=${linkToken}`, {}),
    getAttendees: (sessionId: string, params?: URLSearchParams) => requests.get<Pagination<SessionAttendees>>(`/attendance/sessionAttendees/${sessionId}`, params),
    exportToCSV: (sessionId: string) => requests.get<Blob>(`/attendance/exportToCSV/${sessionId}`),
};

const Account = {
  login: (user: UserSignInForm) => requests.post<User>("/account/login", user),
  register: (user: UserSignUpForm) => requests.post<void>("/account/register", user),
  current: () => requests.get<User>("/account"),
  googleLogin: (accessToken: string) => requests.post<User>(`/account/googleLogin?accessToken=${accessToken}`, {}),
  refreshAppUserToken: () => requests.post<User>('/account/refereshAppUserToken', {}),
};

const Session = {
    createSession: (createSession: SessionFormValues) => requests.post<Session>('/session/createSession', createSession),
    getSessions: (params?: URLSearchParams) => requests.get<Pagination<Session>>('/session/getSessions', params),
    deleteSession: (id: string) => requests.del<void>(`/session/deleteSession/${id}`),
    getSession: (id: string) => requests.get<Session>(`/session/getSession/${id}`),
    updateSession: (id: string, updateSession: SessionFormValues) => requests.put<Session>(`/session/updateSession/${id}`, updateSession),
    getCurrentSession: () => requests.get<Session>('/session/getCurrentSession'),
    refreshLinkToken: (sessionId: string) => requests.post<Session>(`/session/refereshLinkToken/${sessionId}`, {}),
};

const agent = {
    Attendance,
    Account,
    Session,
}

export default agent;