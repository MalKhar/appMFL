export interface ApiResponse<T> {
  data: T;
  failure: boolean;
  messages: [];
  sucess: boolean;
}
