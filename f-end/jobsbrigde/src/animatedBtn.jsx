import './animatedBtn.css';

export default function AnimeBtn(props) {
  return (
    <button className="animeBtn" style={{width:props.width}} onClick={props.onClick} >
      <span>{props.text}</span>
    </button>
  );
}
