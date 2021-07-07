import {TextField, Theme, withStyles} from "@material-ui/core";

export const SearchTextField = withStyles((theme: Theme) => ({
  root: {
    '& .MuiOutlineInput-root': {
      borderRadius: 30,
      backgroundColor: '#e6ecf0',
      padding: 0,
      paddingLeft: 15,
      '& .Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': {
          borderWidth: 1,
          backgroundColor: theme.palette.primary.main
        },
        '& svg path': {
          fill: theme.palette.primary.main
        },
      },
      '&:hover': {
        '& fieldset': {
          backgroundColor: 'transparent'
        }
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1
      },
    },
    '& .MuiOutlineInput-input': {
      padding: '12px 14px 14px 5px'
    },
  }
}))(TextField)
