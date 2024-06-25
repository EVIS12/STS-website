import React from 'react';
import Image from 'next/image';
import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';
import { ArticleDetails } from 'PressCenter';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const article = await axiosInterceptorInstance.get<ArticleDetails>(
    `/blog/blog/${id}`
  );

  return {
    title: article.status !== 404 ? article.data.title : 'Article Not Found',
  };
}

export const dynamicParams = true;
export async function generateStaticParams() {
  return [{ id: '' }];
}

export const revalidate = 180;

export default async function BlogArticle({
  params: { id },
}: {
  params: { id: string };
}) {
  const article = await axiosInterceptorInstance.get<ArticleDetails>(
    `/blog/blog/${id}`
  );
  if (article?.status === 404) {
    return notFound();
  }
  const articleInfo = article.data;

  return (
    <main className="py-10 md:py-20">
      <div className="container">
        <div className="article px-5 md:px-10 lg:px-0">
          <div className="article-head">
            <h2 className="title !text-start text-xl md:!text-4xl ">
              {articleInfo.title}
            </h2>
            <p className="subtitle !text-start !mx-0 !w-full lg:!w-1/2">
              {articleInfo.subtitle}
            </p>
          </div>
          <div className="article-body mt-6 md:mt-16 row gap-2 md:gap-6 lg:gap-8 ">
            <div className="col-span-12 lg:col-span-4">
              <Image
                className=" aspect-square h-[300px] md:h-[400px] 4xl:h-[550px] object-cover rounded-lg"
                src={articleInfo.photo}
                alt={`${articleInfo.title} Image`}
                width={500}
                height={500}
              />
            </div>
            <div className="col-span-12 lg:col-span-8 mt-6 lg:mt-0">
              <div
                className=" !leading-relaxed first-part"
                dangerouslySetInnerHTML={{
                  __html: articleInfo.body.split(' ').slice(0, 250).join(' '),
                }}
              />
            </div>
            <div className="col-span-12">
              <div
                className=" !leading-relaxed second-part"
                dangerouslySetInnerHTML={{
                  __html: articleInfo.body.split(' ').slice(250).join(' '),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
