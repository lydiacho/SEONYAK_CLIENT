import { axios } from '@utils/apis';

export const loginAxios = (authorizationCode: string | undefined) => {
  return axios.post(
    '/v1/auth/login',
    {
      redirectUri: 'https://www.seonyak.com',
      socialType: 'GOOGLE',
    },
    {
      params: {
        authorizationCode,
      },
    },
  );
};
