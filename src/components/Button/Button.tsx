import classes from './Button.module.css'

export default function Button({ children, isActive, ...props } : {children: string; isActive: boolean; onClick: () => any;}) {
  return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      {children}
    </button>
  )
}
