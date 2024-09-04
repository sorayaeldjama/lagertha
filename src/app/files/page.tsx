import Image from 'next/image'
import Files from '@/page/Files'
import { FilesState } from '@/reducers/FilesReducer'

export default function FilePage() {
  return (
    <main>
      <Files />
    </main>
  )
}