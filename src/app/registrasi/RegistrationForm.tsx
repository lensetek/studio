'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Auth functions
import { app } from '@/lib/firebaseConfig'; // Assuming you export your initialized app from firebaseConfig.js


// Update the Zod schema
const formSchema = z.object({
  nama_lengkap: z.string().min(2, {
    message: 'Nama lengkap harus diisi.',
  }),
  tanggal_lahir: z.string().min(1, {
    message: 'Tanggal lahir harus diisi.',
  }),
  alamat: z.string().min(1, {
    message: 'Alamat harus diisi.',
  }),
  nomor_telepon: z.string().min(10, {
    message: 'Nomor telepon harus valid.',
  }),
  email: z.string().email({
    message: 'Alamat email tidak valid.',
  }),
  password: z.string().min(6, { // Add password field
    message: 'Password harus minimal 6 karakter.',
  }),
  confirmPassword: z.string().min(6, { // Add confirm password field
    message: 'Konfirmasi password harus minimal 6 karakter.',
  }),
}).refine((data) => data.password === data.confirmPassword, { // Add refinement for password match
  message: 'Password dan konfirmasi password tidak cocok.',
  path: ['confirmPassword'], // Associate the error with the confirmPassword field
});

export default function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama_lengkap: '',
      tanggal_lahir: '',
      alamat: '',
      nomor_telepon: '',
      email: '',
      password: '', // Add default value for password
      confirmPassword: '', // Add default value for confirm password
    },
  });

  // Get Firebase Auth instance
  const auth = getAuth(app);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      // Create user with email and password using Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

      console.log('Registered user:', user);

      // TODO: Save other user data (nama_lengkap, tanggal_lahir, alamat, nomor_telepon) to your database (e.g., Firestore or Realtime Database)

      toast({
        title: 'Registrasi Berhasil!',
        description: 'Akun Anda telah berhasil dibuat.',
      });

      // TODO: Redirect the user to a success page or login page
      // router.push('/registrasi/success');

    } catch (error: any) {
      console.error('Registration error:', error);

      toast({
        title: 'Registrasi Gagal.',
        description: error.message || 'Terjadi kesalahan saat registrasi.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="nama_lengkap"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="cth. Budi Santoso" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tanggal_lahir"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal Lahir</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="alamat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="cth. Jl. Merdeka No. 123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nomor_telepon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Telepon</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="cth. 081234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="cth. budi@example.com" {...field} />
                  </FormControl>
                  <FormDescription>Kami akan mengirimkan notifikasi ke email ini.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Add Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Add Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konfirmasi Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Mendaftar...
                </>
              ) : (
                'Daftar Sekarang'
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
