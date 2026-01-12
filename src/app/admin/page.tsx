import { Suspense } from 'react';
import AdminPosts from '@/components/adminPosts/AdminPosts';
import AdminPostForm from '@/components/adminPosts/AdminPostForm';
import AdminUsers from '@/components/adminUsers/AdminUsers';
import AdminUserForm from '@/components/adminUsers/AdminUserForm';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth.config';
import Loading from '../loading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Page',
  description: 'Admin Description',
};

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-lg font-medium">
        You need to be authenticated to view this page.
      </div>
    );
  }

  return (
    <div className="my-12.5 flex flex-col gap-25">
      <div className="flex flex-col md:flex-row gap-25">
        <div className="flex-1">
          <Suspense fallback={<Loading />}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminPostForm userId={(session.user as any).id} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-25">
        <div className="flex-1">
          <Suspense fallback={<Loading />}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;