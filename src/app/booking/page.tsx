import BookingForm from "./BookingForm";

export default function BookingPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Booking Layanan</h1>
          <p className="text-muted-foreground mt-4">
            Jadwalkan kunjungan Anda dengan mudah melalui formulir booking online kami.
          </p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
}
