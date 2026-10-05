import mongoose, { Document, Model, Schema } from "mongoose";

export type TableZone = "dining-room" | "terrace" | "chefs-counter";
export type TableStatus = "available" | "reserved" | "occupied" | "cleaning" | "blocked";

export interface ITable extends Document {
  tableNumber: string;
  zone: TableZone;
  capacity: number;
  status: TableStatus;
  createdAt: Date;
  updatedAt: Date;
}

const TableSchema = new Schema<ITable>({
  tableNumber: { type: String, required: true, unique: true },
  zone: { 
    type: String, 
    enum: ["dining-room", "terrace", "chefs-counter"],
    required: true 
  },
  capacity: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ["available", "reserved", "occupied", "cleaning", "blocked"],
    default: "available" 
  },
}, { timestamps: true });

export const Table: Model<ITable> =
  mongoose.models.Table || mongoose.model<ITable>("Table", TableSchema);
