export class TokenResponse {
  accessToken: string;

  static of(token: string): TokenResponse {
    return {
      accessToken: token,
    };
  }
}
