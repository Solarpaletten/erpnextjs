
import CompanyHeader from './CompanyHeader'
import CompanySidebar from './CompanySidebar'

export default async function CompanyIdLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<any>
}) {
  const { companyId } = await params

  return (
    <div className="min-h-screen bg-base-200">
      <CompanyHeader />
      <div className="flex">
        <CompanySidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  )
}