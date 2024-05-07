'use client'
import React, { useRef } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { questionSchema } from '@/lib/validations'
import { Editor } from '@tinymce/tinymce-react'
import { useTheme } from '@/context/ThemeProvider'
import { CircleX } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import RenderTag from '../navbar/RenderTag'
import { createQuestion } from '@/lib/actions/question.actions'

export const Question = ({ mongoUserId }: { mongoUserId: string }) => {
  const editorRef = useRef(null)
  const { mode } = useTheme()
  const router = useRouter()
  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    reValidateMode: 'onSubmit',
    defaultValues: {
      title: '',
      explanation: '',
      tags: []
    }
  })

  async function onSubmit (values: z.infer<typeof questionSchema>) {
    await createQuestion({
      title: values.title,
      content: values.explanation,
      tags: values.tags,
      author: JSON.parse(mongoUserId),
      path: '/'
    })
    router.push('/')
  }

  const addTagHandler = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === 'Enter' && field.name === 'tags') {
      e.preventDefault()
      const inputTag = e.target as HTMLInputElement
      const inputValue = inputTag.value.trim()
      if (inputValue !== '') {
        const tags = field.value
        if (tags.length < 5 && !tags.includes(inputValue as never)) {
          form.setValue('tags', [...tags, inputValue])
        } else if (tags.length >= 5) {
          form.setError('tags', {
            type: 'required',
            message: 'You can only add up to 5 tags'
          })
        }
        inputTag.value = ''
      }
    }
  }
  return (
    <>
      <h1 className="text-dark200_light900 h1-bold">Ask a question</h1>
      <div className="mt-9">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-dark200_light800">
                    Title <span className="text-primary-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={"What's your question?"}
                      {...field}
                      className="no-focus background-light800_dark300 text-dark200_light800 light-border-2 min-h-[56px] rounded-none"
                    />
                  </FormControl>
                  <FormMessage className="subtle-large text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="explanation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-dark200_light800">
                    Explanation <span className="text-primary-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Editor
                      apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                      onInit={(evt, editor) => {
                        // @ts-ignore
                        editorRef.current = editor
                      }}
                      onBlur={field.onBlur}
                      onEditorChange={(content) => field.onChange(content)}
                      initialValue={''}
                      init={{
                        height: 350,
                        menubar: false,
                        plugins: [
                          'advlist',
                          'autolink',
                          'lists',
                          'link',
                          'image',
                          'charmap',
                          'preview',
                          'anchor',
                          'searchreplace',
                          'visualblocks',
                          'codesample',
                          'fullscreen',
                          'insertdatetime',
                          'media',
                          'table'
                        ],
                        toolbar:
                          'undo redo | ' +
                          'codesample | bold italic forecolor | alignleft aligncenter |' +
                          'alignright alignjustify | bullist numlist',
                        content_style:
                          'body { font-family:Inter; font-size:16px }',
                        skin: mode === 'dark' ? 'oxide-dark' : 'oxide',
                        content_css: mode === 'dark' ? 'dark' : 'light'
                      }}
                    />
                  </FormControl>

                  <FormMessage className="subtle-large text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel className="text-dark200_light800">
                      Tags <span className="text-primary-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={
                          "Add tags to your question. What's it about"
                        }
                        className="no-focus background-light800_dark300 text-dark200_light800 light-border-2 min-h-[56px] rounded-none"
                        onKeyDown={(e) => addTagHandler(e, field)}
                      />
                    </FormControl>
                    <FormMessage className="subtle-large text-red-500" />
                  </FormItem>
                  <div className="mt-5 flex gap-5">
                    {field.value.map((tag, index) => (
                      <div className="flex items-center gap-1" key={index}>
                        <RenderTag
                          name={tag}
                          showCount={false}
                          additionalContent={
                            <CircleX
                              size={18}
                              className="flex cursor-pointer items-center justify-center rounded-full text-red-500"
                              onClick={(e) => {
                                e.preventDefault()
                                const updatedTags = field.value.filter(
                                  (_, i) => i !== index
                                )
                                form.setValue('tags', updatedTags)
                              }}
                            >
                              x
                            </CircleX>
                          }
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            />

            <Button
              type="submit"
              variant={'outline'}
              className="primary-gradient rounded-none p-4 text-light-900 "
            >
              Ask the Question
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}
