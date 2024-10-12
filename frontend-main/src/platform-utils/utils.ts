import { $tokenStore } from "../store/store";
import { useStore } from "effector-react";
import { useMemo } from "react";

type RequestPostT = "POST";
type RequestGetT = "GET";

type RequestMethodT = RequestPostT | RequestGetT;

type HttpRequestPostT<BodyT = unknown, ResT = unknown> = {
  url: string;
  body: BodyT;
};

type HttpRequestGetT<OptionsT = unknown> = {
  url: string;
};

//todo подумай нужно ли матпить так или оставить
interface HttpClientResolverT<BodyT = unknown, OptionsT = unknown> {
  <Mode extends "POST", BodyT, OptionsT>({
    url,
    body,
  }: HttpRequestPostT<BodyT, OptionsT>): void;

  <Mode extends "GET", OptionsT>({ url }: HttpRequestGetT<OptionsT>): void;
}

export class HttpClient {
  private readonly token: string;

  constructor(token?: string) {
    this.token = token ?? "";
  }

  private async post<BodyT, ResT>({
    url,
    body,
  }: HttpRequestPostT<BodyT, ResT>): Promise<ResT> {
    console.log(JSON.stringify(body));
    const res = await fetch(url, {
      method: "POST",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const responseBody: ResT = await res.json();
    return res.status === 200 ? responseBody : Promise.reject(responseBody);
  }

  public createPost<BodyT, ResT>(url: string) {
    return (body: BodyT) => this.post<BodyT, ResT>({ url, body });
  }

  public createGet<ResT>(url: string) {
    return () => this.get<ResT>({ url });
  }

  private async get<ResT extends unknown = unknown>({
    url,
  }: HttpRequestGetT<ResT>): Promise<ResT> {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
    });
    const responseBody = await res.json();
    return res.status === 200 ? responseBody : Promise.reject(responseBody);
  }
}

export const useHttpClient = () => {
  const token = useStore($tokenStore);
  const httpClient = useMemo(() => {
    return new HttpClient(token);
  }, [$tokenStore]);
  return { httpClient };
};
