import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SkeletonComp = () => {
  return (
    <div className='col-4'>
        <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" width={345} height={319.2} />
    </Stack>
    </div>
    
  )
}

export default SkeletonComp