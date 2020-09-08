// const umApiBaseUrl = 'https://api2.upmentoring.com';
const umApiBaseUrl = 'http://localhost:3334';

const defaultOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

interface RequireSignupResponse {
  signup: boolean;
}

// export const requireSignup = (email) =>
//   fetch(`${umApiBaseUrl}/auth/require-signup`, {
//     ...defaultOptions,
//     body: JSON.stringify({
//       email,
//     }),
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json() as Promise<RequireSignupResponse>;
//   });

export const login = (token) =>
  fetch(`${umApiBaseUrl}/auth`, {
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json() as Promise<RequireSignupResponse>;
//   });
