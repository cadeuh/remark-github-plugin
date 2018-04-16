import nodeFetch from 'node-fetch';
import {
  Options,
  transform,
} from './transform';

export interface ITestOptions {
  _fetch: typeof nodeFetch;
}

export const getAttacher = (testOptions?: ITestOptions) => {
  const attacher = (options: Options) => {
    return transform(options, testOptions);
  };
  return attacher;
};

export default getAttacher();
