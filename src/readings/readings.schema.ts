import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReadingDocument = Reading & Document;

@Schema({ timestamps: true })
export class Reading {
  @Prop({ type: Number, required: true })
  value: number;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Date, default: new Date() })
  measuredAt: Date;
}

export const ReadingSchema = SchemaFactory.createForClass(Reading);
