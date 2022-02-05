export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  birthday: Date;
  picture?: string;
  condition?: string;
  height?: number;
  weight?: number;
}
