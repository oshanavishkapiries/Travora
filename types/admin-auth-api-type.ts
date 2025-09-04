export interface AdminLoginData {
    email: string;
    password: string;
  }
  
  export interface AdminLoginResponse {
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
      username: string;
    };
  }