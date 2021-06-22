type ReviewProps = {
  rating?: number
}

export const Review = ({ rating }: ReviewProps) => (
  <div>{rating}</div>
)
