import Sidebar from '@/components/Sidebar'
import Link from '@/page/Link'

export default function LinkPage({ params }: { params: { uuid: string } }) {
  return (
    <main style={{height: "100%"}}>
      <Link uuid={params.uuid}/>
    </main>
  )
}
