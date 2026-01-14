export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto py-6 px-4 md:px-6 lg:px-8 max-w-7xl">
      {children}
    </div>
  )
}