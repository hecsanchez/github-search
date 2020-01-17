import axios from 'axios';

const baseUrl = 'https://api.github.com'

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})