type RegistrationRangeElementProps = {isActive : boolean , isCompleted : boolean }

export default function RegistrationRangeElement( {isActive , isCompleted } : RegistrationRangeElementProps) {
  return (
    <div className={'p-2 rounded-full ' + (isCompleted? " bg-main_green " :" bg-main_l_grey ") }>
      <div className={"bg-main_WHITE p-1 rounded-full " + (isActive?" ":" hidden")}></div>
    </div>
  )
}