import { useNavigate, useLocation} from "react-router-dom"
import { relativeSeconds, relativeTime } from "../../helpers/dataExtractors"

import { isLoaded } from "../../helpers/dataFormatters"

const Log = ({log, session}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const time = relativeTime(log, session)
  const content = log.data.payload.payload.join()
  const seconds = Math.floor(relativeSeconds(log, session))

  return (
    <tr className="log" onClick={() => navigate(`${location.pathname}?time=${seconds}`)}>
      <td className="log-time">{isLoaded(time, session) ? time : ''}</td>
      <td className="log-type">{log.type}</td>
      <td className="log-content">
        {content.length > 90 ? `${content.slice(0, 90)}...` : content }
      </td>
    </tr>
  )
}

export default Log