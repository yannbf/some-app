type BadgeProps = {
  text: string
  className?: string
}

export const Badge = ({ text }: BadgeProps) => (
  <div>{text}</div>
)
