import axios from 'axios';
import { DOMAIN, TOKEN } from '../ultils/settings/config';

export class baseServices {
  // PUT With Token
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: `PUT`,
      data: model,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem(TOKEN),
      },
    });
  };
  // POST With Token
  post = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: `POST`,
      data: model,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem(TOKEN),
      },
    });
  };
  // Get With Token
  get = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: 'GET',
      headers: { Authorization: 'Bearer ' + localStorage.getItem(TOKEN) },
    });
  };
  // Delete With Token
  delete = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + localStorage.getItem(TOKEN) },
    });
  };
}
