import styles from './TextInput.module.css'

export const TextInput = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  hasErrors,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${styles.container} ${props.className} ${
        hasErrors ? styles.error : ''
      }`}
    >
      <input
        type={type}
        id={id}
        className={styles.input}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  )
}
