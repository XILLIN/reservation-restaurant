import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICustomer extends Document {
  name: string;
  email: string;
  phone: string;
  totalReservations: number;
  completedReservations: number;
  cancelledReservations: number;
  noShowCount: number;
  specialNotes?: string;
  lastVisit?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const CustomerSchema = new Schema<ICustomer>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  totalReservations: { type: Number, default: 0 },
  completedReservations: { type: Number, default: 0 },
  cancelledReservations: { type: Number, default: 0 },
  noShowCount: { type: Number, default: 0 },
  specialNotes: { type: String },
  lastVisit: { type: Date },
}, { timestamps: true });

export const Customer: Model<ICustomer> =
  mongoose.models.Customer || mongoose.model<ICustomer>("Customer", CustomerSchema);
