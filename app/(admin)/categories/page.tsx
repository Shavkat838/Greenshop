
import CatForm from './_components/cat-form'
import CatData from './_components/cat-data'
import prisma from '@/lib/db'

export default async function CategoriesPage() {

  const categories=await prisma.category.findMany()
  return (
    <div>
      <CatForm   />
      <CatData data={categories} />
    </div>
  )
}
