import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import { Paper, TextField } from '@mui/material';


const COLORS = {
    clearIconBackground: '#94A3B8',
    clearIconHoverBackground: '#6B7280',
    clearIconBorderColor: 'red',
    clearIconFill: 'white',
    svgIconColor: '#475569',
    textFieldBorderColor: '#9AA8BC',
    textFieldHoverBorderColor: '#475569',
    chipBackgroundColor: '#E2E8F0',
    optionEpisodesColor: 'gray',
};

const autocompleteStyles = {
    '& .MuiInputBase-root': {
        padding: "2px",
    },
    '& .MuiSvgIcon-root': {
        fontSize: "27px",
        color: COLORS.svgIconColor,
    },
    width: "500px",
};

const CustomClearIcon = styled(ClearIcon)(({ theme }) => ({
  backgroundColor: COLORS.clearIconBackground,
  borderColor: COLORS.clearIconBorderColor,
  borderRadius: '4.5px',
  width: '14px',
  height: '14px',
  display: 'flex',
  alignItems: 'center',
  padding: "2px",
  justifyContent: 'center',
  '& path': {
      fill: COLORS.clearIconFill,
  },
  '&:hover': {
      backgroundColor: COLORS.clearIconHoverBackground,
  },
}));

const chipStyles = {
    '& .MuiChip-label': {
        paddingRight: "10px",
    },
    borderRadius: '8px',
    backgroundColor: COLORS.chipBackgroundColor,
};

const CustomPaper = styled(Paper)(({ theme }) => ({
    marginTop: '16px',
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: "12px",
        '& fieldset': {
            borderWidth: "1.2px",
            borderColor: COLORS.textFieldBorderColor,
        },
        '&:hover fieldset': {
            borderColor: COLORS.textFieldHoverBorderColor,
        },
        '&.Mui-focused fieldset': {
            borderColor: COLORS.textFieldBorderColor,
        },
    },
}));

const OptionItem = styled('li')({
    display: 'flex',
    alignItems: 'center',
});

const OptionImage = styled('img')({
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: '15%',
});

const OptionText = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

const OptionEpisodes = styled('div')({
    fontSize: '0.8em',
    color: COLORS.optionEpisodesColor,
});

export { 
    CustomClearIcon, 
    CustomTextField, 
    CustomPaper,
    OptionItem,
    OptionImage,
    OptionText,
    OptionEpisodes, 
    autocompleteStyles, 
    chipStyles 
};
