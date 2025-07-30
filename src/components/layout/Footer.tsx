export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex items-center justify-center py-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} WahyuCare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
