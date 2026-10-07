import mongoose, { Document, Model, Schema } from "mongoose";

export type ReservationStatus = "pending" | "confirmed" | "arrived" | "seated" | "completed" | "cancelled" | "no-show";

export interface IReservation extends Document {
  userId?: string;
  reservationCode: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingOption: string;
  tableId?: mongoose.Types.ObjectId;
  specialRequests?: string;
  status: ReservationStatus;
  createdAt: Date;
  updatedAt: Date;
}

const ReservationSchema = new Schema<IReservation>({
  userId: { type: String, index: true },
  reservationCode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  seatingOption: { type: String, required: true },
  tableId: { type: Schema.Types.ObjectId, ref: 'Table' },
  specialRequests: { type: String },
  status: { 
    type: String, 
    enum: ["pending", "confirmed", "arrived", "seated", "completed", "cancelled", "no-show"],
    default: "pending" 
  },
}, { timestamps: true });

export const Reservation: Model<IReservation> =
  mongoose.models.Reservation || mongoose.model<IReservation>("Reservation", ReservationSchema);
