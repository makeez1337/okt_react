import axios from "axios";

import {baseCarURL, baseJsonURL} from "../configs";

export const axiosCarService = axios.create({baseURL:baseCarURL});
export const axiosUserService = axios.create({baseURL: baseJsonURL});
export const axiosCommentService = axios.create({baseURL: baseJsonURL});
export const axiosPostService = axios.create({baseURL: baseJsonURL});

