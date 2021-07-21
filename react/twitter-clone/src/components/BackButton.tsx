import {IconButton} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {useHistory} from "react-router-dom"

export const BackButton:React.FC = ():React.ReactElement => {
  const history = useHistory()

  const handleClickButton = () => {
    history.goBack()
  }

  return (
    <IconButton onClick={handleClickButton} color="primary" style={{marginRight: 20}}>
      <ArrowBackIcon />
    </IconButton>
  )
}