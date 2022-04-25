import * as env from 'env-var';

export const BACKEND_URL = env.get('REACT_APP_BACKEND_URL').asString();
