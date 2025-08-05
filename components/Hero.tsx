import { Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import Image from '@/components/Image'

export default function Hero() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <div className="my-6 flex flex-col justify-center gap-x-12 xl:mb-12 xl:flex-row">
      <div className="max-w-2xl pt-6">
        <h1 className="pb-6 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Hi, I’m shleecloud
        </h1>
        <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
          {`여기서만 볼 수 있는 글을 쓰고 싶습니다`}
        </h2>
      </div>
      <div className="flex flex-col items-center space-x-2 pt-8">
        {mainContent.avatar && (
          <Image
            src={mainContent.avatar}
            alt="avatar"
            width={192}
            height={192}
            className="h-48 w-48 rounded-full"
          />
        )}
      </div>
    </div>
  )
}
