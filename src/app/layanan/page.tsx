import { Stethoscope, Baby, HeartHandshake, Syringe, MessageCircle, Waves } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ReactNode } from 'react';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

const servicesList: Service[] = [
  {
    icon: <Stethoscope className="w-12 h-12 text-primary" />,
    title: 'Pemeriksaan Kehamilan',
    description: 'Pemeriksaan antenatal (ANC) rutin untuk memantau kesehatan ibu dan perkembangan janin.',
  },
  {
    icon: <HeartHandshake className="w-12 h-12 text-primary" />,
    title: 'Keluarga Berencana (KB)',
    description: 'Konsultasi dan layanan pemasangan berbagai jenis alat kontrasepsi (IUD, implan, suntik, pil).',
  },
  {
    icon: <Syringe className="w-12 h-12 text-primary" />,
    title: 'Persalinan Normal',
    description: 'Pendampingan persalinan yang aman, nyaman, dan memberdayakan di klinik kami.',
  },
  {
    icon: <Baby className="w-12 h-12 text-primary" />,
    title: 'Perawatan Bayi Baru Lahir',
    description: 'Pemeriksaan kesehatan, imunisasi dasar, dan edukasi perawatan bayi untuk orang tua baru.',
  },
  {
    icon: <Waves className="w-12 h-12 text-primary" />,
    title: 'Baby Spa & Pijat Bayi',
    description: 'Perawatan relaksasi untuk menstimulasi motorik dan sensorik serta meningkatkan kualitas tidur bayi.',
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-primary" />,
    title: 'Konsultasi Laktasi',
    description: 'Dukungan dan solusi untuk ibu menyusui agar proses mengASIhi berjalan lancar dan menyenangkan.',
  },
];

const ServiceCard = ({ icon, title, description }: Service) => (
  <Card className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300 h-full">
    <CardHeader className="p-0 mb-4">
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-accent mb-4">
        {icon}
      </div>
      <CardTitle className="font-headline text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default function LayananPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Layanan Kami</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Kami berkomitmen untuk memberikan pelayanan kesehatan terbaik bagi ibu dan anak dengan standar profesional tertinggi.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
