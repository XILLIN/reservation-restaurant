import mongoose from 'mongoose';

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("No MONGODB_URI found");
    process.exit(1);
  }

  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB!");

    const ReservationSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      date: { type: String, required: true },
      time: { type: String, required: true },
      guests: { type: Number, required: true },
      seatingOption: { type: String, required: true },
    }, { timestamps: true });

    const Reservation = mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema);

    const testDoc = new Reservation({
      name: "Test User",
      email: "test@example.com",
      phone: "0123456789",
      date: "2026-10-10",
      time: "19:00",
      guests: 2,
      seatingOption: "dining-room"
    });

    console.log("Saving test reservation...");
    await testDoc.save();
    console.log("Saved successfully! ID:", testDoc._id);

    console.log("Fetching test reservation...");
    const docs = await Reservation.find({ email: "test@example.com" });
    console.log("Found:", docs.length, "documents");

    // Clean up
    await Reservation.deleteOne({ _id: testDoc._id });
    console.log("Cleaned up test document.");

    await mongoose.disconnect();
    console.log("Test completed successfully!");
  } catch (err) {
    console.error("Error during test:", err);
  }
}
run();
