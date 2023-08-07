export interface Validator<T> {
  validate(data: T): ValidationErrors<T>;
}

export type ValidationErrors<T> = {
  [P in keyof T]?: string;
};
