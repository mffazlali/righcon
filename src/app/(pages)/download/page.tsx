'use client'
import ReportUpdate from '@/app/components/report-update/report-update-icon'
import styles from './styles.module.css'
import VersionListIcon from '@/app/components/version-list-icon/version-list-icon'

export function Search() {
  return (
    <div className={styles.download}>
      <div className={styles.downloadContainer}>
        <div className={styles.reportUpdateWrapper}>
          <ReportUpdate />
        </div>
        {/*<div className={styles.versionListIconWrapper}>*/}
        {/*  <VersionListIcon />*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default Search
