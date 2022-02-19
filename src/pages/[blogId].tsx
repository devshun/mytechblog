import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';

import { getBlogsApi, getBlogByIdApi } from '@/apis/BlogApi';

import { BlogItemPageTemplate } from '@/components/pages/BlogItemPageTemplate';
import { BlogItemType } from '@/types';

import Error404Page from '@/pages/404';

type BlogItemPageProps = {
  blogItem: BlogItemType;
  highlightedBody: string;
  // tableOfContent: TableOfContentsType[];
  // profile: ProfileType;
  draftKey: string;
};

const BlogItemPage: NextPage<BlogItemPageProps> = (props) => {
  const { blogItem, draftKey } = props;
  console.log(props);

  return (
    <>
      {!blogItem ? (
        <Error404Page />
      ) : (
        <BlogItemPageTemplate blogItem={blogItem} draftKey={draftKey} />
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = [];
  const { totalCount } = await getBlogsApi(0);

  //   const pageCountArray = createPage

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);
  const { params, previewData } = context;
  let blogId = '';
  let draftKey = '';

  if (!params.blogId) {
    throw new Error('Error: ID not found');
  }

  if (params?.blogId && typeof params.blogId === 'string') {
    blogId = params.blogId;
  }
  if (previewData?.draftKey && typeof previewData.draftKey === 'string') {
    draftKey = previewData.draftKey;
  }
  try {
    // ブログ記事詳細データ取得 ---------
    const blogDetailData = await getBlogByIdApi(blogId, draftKey);
    // // カテゴリーデータ取得 ---------
    // const categoryData = await getCategoriesApi();
    // // プロフィールデータ取得 ---------
    // const profile = await getProfileByApi();
    // // アーカイブデータ取得 ---------
    // const archiveList = await getArchiveListService();

    // シンタックハイライト文章作成
    // https://qiita.com/cawauchi/items/ff6489b17800c5676908
    // const $ = cheerio.load(blogDetailData.body);
    // $('pre code').each((_, elm) => {
    //   const result = hljs.highlightAuto($(elm).text());
    //   $(elm).html(result.value);
    //   $(elm).addClass('hljs');
    // });

    // 目次作成
    // https://blog.microcms.io/create-table-of-contents/
    // https://ru-blog.com/nextjs-microcms-create-table-of-contents/
    // const headings = $('h1, h2').toArray();
    // const tableOfContents: TableOfContentType[] = headings.map((data) => {
    //   return {
    //     //@ts-ignore
    //     text: String(data.children[0].data),
    //     id: data.attribs.id,
    //     name: data.name,
    //   };
    // });

    const props: BlogItemPageProps = {
      blogItem: blogDetailData,
      //   highlightedBody: $.html(),
      //   tableOfContents: tableOfContents,
      //   categories: categoryData,
      //   profile: profile,
      //   archiveList: archiveList,
      draftKey: draftKey,
    };
    
return { props };
  } catch (error) {
    //https://github.com/vercel/next.js/discussions/11862
    return { notFound: true };
  }
};

export default BlogItemPage;
