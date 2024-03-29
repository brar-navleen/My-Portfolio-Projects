import { format, parseISO } from 'date-fns'

export const DateInput = (props) => {
  return (
    <>
      <input type='datetime-local' required
        value={props.date && format(props.date, 'yyyy-MM-dd HH:mm')}
        onChange={e => props.onDateChange(parseISO(e.target.value))}
        className='bg-slate-100 pl-0.5 py-0.5' />
    </>
  )
}
