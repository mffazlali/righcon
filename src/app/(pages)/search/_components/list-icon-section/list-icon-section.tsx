import FilterTypeAside from './filter-type-aside/filter-type-aside'
import ListIconArticle from './list-icon-article/list-icon-article'
import styles from './list-icon-section.module.css'

export interface ListIconSectionProps {}

const ListIconSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionWrapper}>
        <FilterTypeAside />
        <ListIconArticle />
      </div>
    </section>
  )
}

export default ListIconSection
