import { format } from 'date-fns'
import cardBackground from '../assets/card1-background.png'
export const PostWeddingEventCard = (props) => {
  return (
    <>
      <div className="relative text-center" >
        <img className='w-full hue-rotate-[301deg]' src={cardBackground} />
        <div className='absolute text-[#575353] top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center pl-[140px] pr-[140px] border border-groove shadow-xl gap-[26px]'>
          {props.information.postweddingEventType && <div className='font-applyFont text-[18px]'>PLEASE JOIN US TO CELEBRATE</div>}
          <div className='font-applyOnCard font-semibold text-[34px] text-[#e82f63f2]'>{props.information.postweddingEventType}</div>

          {props.information.postweddingEventDate &&
            <div className='text-[18px] font-applyFont flex'>
              <div className='flex flex-col font-semibold pr-[10px] items-end border-r-2 border-slate-500'>
                <div>{format(props.information.postweddingEventDate, 'EEEE')}</div>
                <div>{format(props.information.postweddingEventDate, 'h:mm aaa')}</div>
              </div>
              <div className='flex items-center pl-[10px] pr-[10px] font-semibold text-[32px] border-r-2 border-slate-500'>{props.information.postweddingEventDate && format(props.information.postweddingEventDate, 'dd')}</div>
              <div className='flex flex-col font-semibold pl-[10px] items-start' >
                <div>{format(props.information.postweddingEventDate, 'MMMM')}</div>
                <div>{format(props.information.postweddingEventDate, 'yyyy')}</div>
              </div>
            </div>
          }

          {props.information.postweddingEventVenue && <div className='font-applyFont text-[18px]'>{props.information.postweddingEventVenue}</div>}

          {(props.information.postweddingEventVenue) && <div className='text-[16px] font-applyFont'>
            <div>RSVP</div>
            <div>{`Groom Side: ${props.information.groomRSVP}`}</div>
            <div>{`Bride Side: ${props.information.brideRSVP}`}</div>
          </div>
          }
        </div>
      </div>
    </>
  )
}
