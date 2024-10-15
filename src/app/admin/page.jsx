import styles from './admin.module.css'
import { Suspense } from 'react'
import AdminPosts from '@/components/adminPosts/adminPosts'
import AdminPostForm from '@/components/adminPostForm/adminPostForm'
import AdminUsers from '@/components/adminUsers/adminUsers'
import AdminUserForm from '@/components/adminUserForm/adminUserForm'
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth.config';
import Loading from '../loading'

export const metadata = {
  title: 'Admin Page',
  description: 'Admin Description',
}

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  // If there's no session, redirect the user or show an error message
  if (!session) {
    return <div>You need to be authenticated to view this page.</div>;
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<Loading />}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId = {session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<Loading />}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  )
}

export default AdminPage