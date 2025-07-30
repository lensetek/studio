import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Baby, HeartHandshake, Syringe } from 'lucide-react';
import PregnancyTipGenerator from '@/components/ai/PregnancyTipGenerator';

const services = [
  {
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
    title: 'Pemeriksaan Kehamilan',
    description: 'Pemeriksaan rutin untuk memantau kesehatan ibu dan janin.',
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-primary" />,
    title: 'Keluarga Berencana (KB)',
    description: 'Konsultasi dan layanan pemasangan alat kontrasepsi.',
  },
  {
    icon: <Baby className="w-10 h-10 text-primary" />,
    title: 'Baby Spa',
    description: 'Perawatan relaksasi untuk menstimulasi perkembangan bayi.',
  },
  {
    icon: <Syringe className="w-10 h-10 text-primary" />,
    title: 'Persalinan',
    description: 'Pendampingan persalinan yang aman dan nyaman.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  Selamat Datang di WahyuCare
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Klinik Bidan Wahyu menyediakan pelayanan kebidanan profesional dengan sentuhan personal. Kami siap mendampingi setiap langkah perjalanan Anda menjadi seorang ibu.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/registrasi">Daftar Pasien Baru</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/layanan">Lihat Layanan Kami</Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Hero"
              data-ai-hint="mother baby"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Layanan Unggulan Kami</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Kami menyediakan berbagai layanan untuk kesehatan ibu dan anak.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 mt-12">
            {services.map((service, index) => (
              <div key={index} className="grid gap-4 text-center">
                <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-accent">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold font-headline">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <PregnancyTipGenerator />
          </div>
        </div>
      </section>
    </div>
  );
}
