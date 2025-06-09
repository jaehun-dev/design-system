import styles from './index.module.css'

interface BadgeProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  color?: 'neutral' | 'danger' | 'warning' | 'success' | 'brand'
}

export function Badge({ children, size = 'md', color = 'neutral' }: BadgeProps) {
  return (
    <div
      className={[
        styles.badge,
        // size
        styles[`badge--size-${size}`],
        // color
        styles[`badge--color-${color}`],
      ].join(' ')}
    >
      {children}
    </div>
  )
}
