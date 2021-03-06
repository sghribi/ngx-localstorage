/**
 * Created by bohoffi on 04.04.2017.
 */
import {ModuleConfig} from './interfaces';

export const getProperty = (path: string[], object: any) =>
  path.reduce((obj: any, p: any) => (!!obj) ? obj[p] : null, object);

export const setProperty = (path: string[] | string, value: any, object: any, falsyTransformer?: () => any) => {
  const lastKeyIndex = path.length - 1;
  for (let i = 0; i < lastKeyIndex; ++i) {
    const key = path[i];
    if (!(key in object)) {
      object[key] = {};
    }
    object = object[key];
  }
  object[path[lastKeyIndex]] = (!value || (typeof value === 'string' && value === 'false')) && !!falsyTransformer ? falsyTransformer() : value;
};

export const defaultConfig: ModuleConfig = {
  allowNull: true,
  prefix: 'ngx_local_storage'
};
