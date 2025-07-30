import RegistrationForm from "./RegistrationForm";

export default function RegistrasiPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Registrasi Pasien Baru</h1>
          <p className="text-muted-foreground mt-4">
            Silakan isi formulir di bawah ini untuk menjadi bagian dari keluarga besar WahyuCare.
          </p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}
