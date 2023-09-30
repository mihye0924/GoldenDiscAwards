import title from '@/styles/scss/common/title.module.scss'
export default function Title({ name }) {
  return (
    <div className={title.title_wrap}>
      <h2>{name}</h2>
    </div>
  )
}