import {
  type ErrorComponentProps,
  Link,
  useRouter,
} from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Title, Text } from '@/components/ui/typography'

const GlobalErrorBoundary = ({ error, reset }: ErrorComponentProps) => {
  const router = useRouter()

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4 p-4'>
      <div className='space-y-4 text-center'>
        <Title as='h1' color='error' align='center'>
          Oops! 出错了
        </Title>
        <Text variant='subTitle1' color='secondary' align='center'>
          应用程序遇到了一个错误
        </Text>

        <div className='bg-muted max-w-2xl rounded-lg p-4 text-left'>
          <Text variant='subTitle1' className='mb-2'>
            错误信息：
          </Text>
          <Text variant='code' className='block break-all whitespace-pre-wrap'>
            {error.message}
          </Text>

          {error.stack && (
            <details className='mt-4'>
              <summary className='mb-2 cursor-pointer'>
                <Text variant='subTitle1'>错误堆栈</Text>
              </summary>
              <Text
                variant='caption'
                className='block font-mono break-all whitespace-pre-wrap'
              >
                {error.stack}
              </Text>
            </details>
          )}
        </div>

        <div className='flex justify-center gap-4'>
          <Button
            variant='outline'
            onClick={() => {
              // 重置错误状态
              reset()
            }}
          >
            重试
          </Button>
          <Button
            onClick={() => {
              router.history.back()
            }}
          >
            返回上一页
          </Button>
          <Button asChild variant='secondary'>
            <Link to='/'>返回首页</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GlobalErrorBoundary
