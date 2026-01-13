export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto py-6 px-3">
      {children}
    </div>
  )
}