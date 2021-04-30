import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Date from "../../components/Date";
import { Head } from "../../components/Head";
import { View } from "../../components/View";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <View>
      <Head title={postData.title}>
        {/* <HeadTitle>First post ...</HeadTitle> */}
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </View>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
}
