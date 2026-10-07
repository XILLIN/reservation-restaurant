import { z } from "zod";
import { timeSlots } from "@/data/restaurant";

export const profileSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(25).regex(/^\+?[0-9 ()-]+$/),
}).strict();

export const passwordSchema = z.string().min(12).max(128);
export const zones = ["dining-room", "terrace", "chefs-counter"] as const;
export const reservationStatuses = ["pending", "confirmed", "arrived", "seated", "completed", "cancelled", "no-show"] as const;
export const tableStatuses = ["available", "reserved", "occupied", "cleaning", "blocked"] as const;

export function todayInBangkok() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Bangkok", year: "numeric", month: "2-digit", day: "2-digit",
  }).format(new Date());
}

const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value && value >= todayInBangkok();
});

export const reservationSchema = z.object({
  name: profileSchema.shape.name,
  email: z.string().trim().toLowerCase().max(254).pipe(z.email()),
  phone: profileSchema.shape.phone,
  date: dateSchema,
  time: z.enum(timeSlots),
  guests: z.number().int().min(1).max(8),
  seatingOption: z.enum(zones),
  specialRequests: z.string().trim().max(1000).optional(),
}).strict();

export const tableSchema = z.object({
  tableNumber: z.string().trim().min(1).max(30),
  zone: z.enum(zones),
  capacity: z.number().int().min(1).max(30),
  status: z.enum(tableStatuses).default("available"),
}).strict();

export const tablePatchSchema = tableSchema.partial().refine((data) => Object.keys(data).length > 0);
export const reservationStatusSchema = z.object({ status: z.enum(reservationStatuses) }).strict();
export const objectIdSchema = z.string().regex(/^[a-f\d]{24}$/i);
