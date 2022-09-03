import styles from './TextInput.module.css'

export const TextInput = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  ...props
}) => {
  return (
    <div {...props} className={`${styles.container} ${props.className}`}>
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
