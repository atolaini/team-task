import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

const revalidate = (req: NextRequest) => {
  const path = req.nextUrl.searchParams.get('path') || '/';

  return revalidatePath(path);
};

export default revalidate;
