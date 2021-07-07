import React, {useState} from "react";
import {Avatar, Button, CircularProgress, IconButton, TextareaAutosize} from "@material-ui/core";
import UserAvatar from "../assets/img/logo192.png";
import classNames from "classnames";
import {useHomeStyles} from "../pages/Home";
import MoodIcon from '@material-ui/icons/Mood';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes}: AddTweetFormProps):React.ReactElement => {
  const [text, setText] = useState<string>('')
  const textLimitPercent = (text.length / 280) * 100

  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget && textLimitPercent < 100) {
      setText(e.currentTarget.value)
    }
  }


  return (
    <div className={classes.addForm}>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt='alt'
          src={UserAvatar}
        />
        <TextareaAutosize
          onChange={handleChangeTextArea}
          className={classes.addFormTextarea}
          placeholder="Text"
          value={text}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
          <IconButton color="primary">
            {/* @ts-ignore */}
            <MoodIcon style={{fontSize: 26}} />
          </IconButton>
          <IconButton color="primary">
            <CropOriginalIcon style={{fontSize: 26}} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {
            text && (
              <>
                <span>280</span>
                <div className={classes.addFormCircleProgress}>
                  <CircularProgress
                    variant="determinate"
                    size={20}
                    thickness={5}
                    value={textLimitPercent}
                    style={textLimitPercent === 100 ? { color: 'red' } : undefined}
                  />
                  <CircularProgress
                    style={{color: 'rgba(0,0,0,.1)'}}
                    variant="determinate"
                    size={20}
                    thickness={5}
                    value={100}
                  />
                </div>
              </>
            )
          }
          <Button color="primary" variant="contained">
            Tweet
          </Button>
        </div>
      </div>
    </div>
  )
}