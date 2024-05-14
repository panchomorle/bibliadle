import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="cómo jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Tienes 6 intentos para adivinar la palabra del día. después de cada
        intento, el color de las teclas se modificará para mostrarte qué tan
        cerca estás de acertar.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="J" status="correct" />
        <Cell value="E" />
        <Cell value="S" />
        <Cell value="U" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        la palabra contiene la letra J y está en el lugar correcto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="I" />
        <Cell value="E" status="present" />
        <Cell value="L" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        la palabra contiene la letra E pero está en el lugar incorrecto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="E" />
        <Cell value="C" status="absent"/>
        <Cell value="E" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        la palabra no contiene la letra C.
      </p>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        En bibliadle, la palabra del día es extraída de la biblia Reina Valera 1960 y puede ser un sustantivo, un nombre propio, una acción, lo que sea!
      </p>
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
