/**
 * axios初期設定
 * @package config
 */
import axios from 'axios';

const API_KEY: string = process.env.X_MICROCMS_API_KEY || '';

const globalAxios = axios.create({
  headers: {
    'Content-type': 'application/json',
    'X-MICROCMS-API-KEY': API_KEY,
  },
});

export default globalAxios;
