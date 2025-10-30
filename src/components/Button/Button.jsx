import styles from './Button.module.css'

const Button = ({children, variant, icon }) => {
  return (
    <button className={`${styles.btn} ${styles[variant]}`}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  )
}

export default Button
