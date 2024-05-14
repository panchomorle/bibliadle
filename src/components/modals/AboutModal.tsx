import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="sobre este juego"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Este es un juego bíblico basado en el código open-source de Wordle y Boludle -{' '}
        <a
          href="https://github.com/panchomorle/bibliadle"
          className="underline font-bold"
        >
          Click aquí para ver el código de Bibliadle
        </a>{' '}
        -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          Click aquí para ver el código original
        </a>{' '}
      </p>
    </BaseModal>
  )
}
