import { useMemo, useState } from 'react'
import { TextInput } from '../common/text-input/TextInput'
import styles from './Home.module.css'

export const Home = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const errorMessages = useMemo(
    () => Object.entries(errors).filter(([id, message]) => message !== null),
    [errors]
  )

  const onUsernameChange = (e) => {
    const name = e.target.value.trim()
    setUsername(name)

    if (name.length === 0) return

    if (name.length < 3 || name.length > 10) {
      setErrors((prev) => ({
        ...prev,
        username: 'Username length should be between 3 and 10!',
      }))
    } else if (/\w+/.exec(name)[0].length !== name.length) {
      setErrors((prev) => ({
        ...prev,
        username:
          'Username should only contain numbers, letters and underscores!',
      }))
    } else {
      setErrors((prev) => ({ ...prev, username: null }))
    }
  }

  const onPasswordChange = (e) => {
    const password = e.target.value.trim()
    setPassword(password)

    if (password.length === 0) return

    if (password.length < 6 || password.length > 12) {
      setErrors((prev) => ({
        ...prev,
        password: 'Password length should be between 6 and 12!',
      }))
    } else if (/\w+/.exec(password)[0].length !== password.length) {
      setErrors((prev) => ({
        ...prev,
        password:
          'Password should only contain numbers, letters and underscores!',
      }))
    } else if (!(/\d/.test(password) && /[^\d]/.test(password))) {
      setErrors((prev) => ({
        ...prev,
        password: 'Password must contain both numbers and letters!',
      }))
    } else {
      setErrors((prev) => ({ ...prev, password: null }))
    }
  }
  console.log(errors)
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Log In</h2>

        {errorMessages.length !== 0 && (
          <ul className={styles.errors}>
            {errorMessages.map(([id, message]) => (
              <li key={id}>{message}</li>
            ))}
          </ul>
        )}

        <form>
          <TextInput
            className="my-container"
            label="Username"
            value={username}
            onChange={onUsernameChange}
            hasErrors={errors['username']}
          />
          <TextInput
            className="my-container"
            label="Password"
            type="password"
            value={password}
            onChange={onPasswordChange}
            hasErrors={errors['password']}
          />

          <input
            type="submit"
            value="Log In"
            disabled={errorMessages.length !== 0}
          />
        </form>
      </div>
    </div>
  )
}
