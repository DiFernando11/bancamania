import classNames from 'classnames'
import { SpinnerProps } from './types'

const Spinner = ({ style, sizeSpinner, className }: SpinnerProps) => {
  return (
    <div className={classNames(className, 'flex justify-center items-center')}>
      <span
        className={classNames(
          sizeSpinner,
          'border-4 border-gray-300 border-t-primary-100',
          'rounded-full animate-spin'
        )}
        style={style}
      />
    </div>
  )
}
export default Spinner
