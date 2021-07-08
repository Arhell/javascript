import React, {useState} from "react";
import {Avatar, Button, CircularProgress, IconButton, TextareaAutosize} from "@material-ui/core";
import UserAvatar from "../assets/img/logo192.png";
import classNames from "classnames";
import {useHomeStyles} from "../pages/Home/theme";
import MoodIcon from '@material-ui/icons/Mood';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>
  maxRows?: number
}

const MAX_LENGTH = 280

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes, maxRows}: AddTweetFormProps):React.ReactElement => {
  const [text, setText] = useState<string>('')
  const textLimitPercent = Math.round((text.length / MAX_LENGTH) * 100)
  const textCount = MAX_LENGTH - text.length

  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value)
    }
  }

  const handleClickAddTweet = (): void => {
    setText('')
  }


  return (
    <div>
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
          rowsMax={maxRows}
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
                <span>{textCount}</span>
                <div className={classes.addFormCircleProgress}>
                  <CircularProgress
                    variant="determinate"
                    size={20}
                    thickness={5}
                    value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                    style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
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
          <Button
            onClick={handleClickAddTweet}
            disabled={text.length >= MAX_LENGTH}
            color="primary"
            variant="contained"
          >
            Tweet
          </Button>
        </div>
      </div>
    </div>
  )
}