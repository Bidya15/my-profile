export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-body text-sm">
          &copy; {currentYear} Bidya S. Rongpi. All rights reserved.
        </p>
        <p className="font-body text-xs mt-1">
          Built with Next.js & Tailwind CSS. Hosted on Firebase.
        </p>
      </div>
    </footer>
  );
}
