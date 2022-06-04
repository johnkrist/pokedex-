import { LiCard, SpanType } from "../../style/globals"
import useState from "react"
import "./style.css"
const CardInfo = ({name, id, img, type}) => {


    return (
        <LiCard tipo={type}>
            <div className="div__container__name">
            <h3 className="poke__name">{name}</h3>
            <SpanType >{type}</SpanType>
          </div>
          <div className="div__container__img">
            <span className="poke__id">#{id}</span>
            <img src={img} alt="" />
          </div>
        </LiCard>
    )

}
export default CardInfo