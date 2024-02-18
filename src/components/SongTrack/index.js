import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongTrack = props => {
  const {songDetails, deleteTrack} = props
  const {imageUrl, name, genre, duration, id} = songDetails
  const onDeleteTrack = () => {
    deleteTrack(id)
  }
  return (
    <li className="song-details-list-item">
      <div className="image-genre-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="name-genre-container">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          aria-label="delete"
          className="delete-button"
          data-testid="delete"
          onClick={onDeleteTrack}
        >
          <AiOutlineDelete className="delete" />
        </button>
      </div>
    </li>
  )
}

export default SongTrack
