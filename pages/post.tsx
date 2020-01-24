import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/Hello').then(mod => mod.Hello),
  { loading: () => <p>Loading...</p>, ssr: true }
)

const Page = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <DynamicComponentWithCustomLoading />
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export default Page;