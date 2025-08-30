interface ButtonProps {
  text: string
  type: 'submit' | 'button' | 'reset'
  className?: string
  disabled?: boolean
  onClick?: () => void
}

const Button = ({ text, type, className, disabled, onClick }: ButtonProps) => {

  return (
    <button
      type={type}
      className={`${className || ''}
       bg-red-500 
       text-white 
       px-4 py-2 
       hover:bg-red-700 
       focus:outline-none
       rounded-md
       focus:ring-2 
       focus:ring-red-500
       focus:ring-offset-2
       `}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button