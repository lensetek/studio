'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generatePregnancyTip, PregnancyTipInput } from '@/ai/flows/pregnancy-tip-generator';
import { Loader2, Lightbulb } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const FormSchema = z.object({
  pregnancyStage: z.string({
    required_error: 'Silakan pilih tahap kehamilan Anda.',
  }),
});

export default function PregnancyTipGenerator() {
  const [tip, setTip] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setError(null);
    setTip(null);
    try {
      const input: PregnancyTipInput = { pregnancyStage: data.pregnancyStage };
      const result = await generatePregnancyTip(input);
      setTip(result.tip);
    } catch (e) {
      setError('Gagal menghasilkan tip. Silakan coba lagi.');
      console.error(e);
    }
    setIsLoading(false);
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-2xl">Tips Kehamilan Spesial Untuk Anda</CardTitle>
        <CardDescription>Dapatkan tips yang disesuaikan dengan tahap kehamilan Anda saat ini.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="pregnancyStage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tahap Kehamilan</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih tahap kehamilan..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="first trimester">Trimester Pertama</SelectItem>
                      <SelectItem value="second trimester">Trimester Kedua</SelectItem>
                      <SelectItem value="third trimester">Trimester Ketiga</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Menghasilkan...
                </>
              ) : (
                'Dapatkan Tips'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        {tip && (
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle className="font-headline">Tips Untuk Anda!</AlertTitle>
            <AlertDescription>{tip}</AlertDescription>
          </Alert>
        )}
        {error && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
      </CardFooter>
    </Card>
  );
}
