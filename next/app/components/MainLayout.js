export function MainLayout ({children}) {
  return (
    <>
      <nav>
        <h1>Navigation</h1>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}