import { Navbar } from "./_components/navbar";

export default function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className=" h-full">
      <Navbar className="w-screen max-w-full" />
      <main className="pt-40 pb-20">{children}</main>
    </div>

  )
}