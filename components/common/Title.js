import title from '@/styles/scss/common/title.module.scss'
export default function Title({ name }) {
  return (
    <div className={title.title_wrap}>
      <h1>{name}</h1>
    </div>
  )
}