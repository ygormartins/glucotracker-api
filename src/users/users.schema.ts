import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, required: true, index: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: Date, required: true })
  birthday: Date;

  @Prop({ type: String })
  picture: string;

  @Prop({ type: String, default: 'none' })
  condition: string;

  @Prop({ type: Number })
  height: number;

  @Prop({ type: Number })
  weight: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
