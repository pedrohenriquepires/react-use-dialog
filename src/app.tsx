import { useDialog } from 'react-vite-library'
import { Button } from 'src/components/button'

export const App = () => {
  const { showAlert, showConfirm } = useDialog()

  const handleAlert = async () => {
    await showAlert(
      'Ipsum commodo exercitation ut velit in consectetur ex quis. Culpa ex officia nulla sunt cupidatat pariatur in ullamco tempor ex cillum aliqua anim ipsum. Id incididunt enim veniam Lorem duis aliqua consectetur in sit proident est commodo sunt aute. Cupidatat exercitation officia enim fugiat nostrud magna adipisicing.',
    )

    console.log('Alert Closed')
  }

  const handleConfirm = async () => {
    if (
      await showConfirm(
        'Ipsum commodo exercitation ut velit in consectetur ex quis. Culpa ex officia nulla sunt cupidatat pariatur in ullamco tempor ex cillum aliqua anim ipsum. Id incididunt enim veniam Lorem duis aliqua consectetur in sit proident est commodo sunt aute. Cupidatat exercitation officia enim fugiat nostrud magna adipisicing.',
      )
    ) {
      console.log('Confirmed')
    } else {
      console.log('Canceled')
    }
  }

  return (
    <div>
      <Button onClick={handleAlert}>Alert</Button>
      <Button onClick={handleConfirm}>Confirm</Button>
    </div>
  )
}