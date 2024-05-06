import SkeletonCard from '@/components/SkeletonCard'

export default function loading() {
   return (
      <div className='grid grid-cols-2 gap-8 m-10'>
         {'123456789'.split('').map((i) => (
            <SkeletonCard key={i} />
         ))}
      </div>
   )
}
