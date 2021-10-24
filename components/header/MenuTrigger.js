import styles from './MenuTrigger.module.css'

export default function MenuTrigger({ isActive, onClick = () => {} }) {
  return (
    <>
      <button
        className={`select-none ${styles['menu']} ${isActive ? styles['menu-active'] : ''}`}
        onClick={onClick}
      ></button>
    </>
  )
}
