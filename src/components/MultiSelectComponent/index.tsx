import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Chip from '@mui/material/Chip';

import { highlightString } from '../../utils';

import { 
  CustomTextField, 
  CustomClearIcon, 
  CustomPaper,
  OptionItem,
  OptionImage,
  OptionText,
  OptionEpisodes, 
  autocompleteStyles, 
  chipStyles, 
} from './styles';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface OptionType {
  id: number,
  name: string,
  image?: string
  episode?: number
}

interface MultiSelectComponentProps {
  onChange?: (event: React.SyntheticEvent<Element, Event>, value: OptionType[], reason: any) => void;
  onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: OptionType[];
  loading: boolean;
  noOptionsText?: string;
  loadingText?: string;
}

export default function MultiSelectComponent({ 
  onChange,
  onSearch,
  options,
  loading,
  noOptionsText = "No options found",
  loadingText = "Loading...", 
}: MultiSelectComponentProps
) {

  return (
    <Autocomplete
      multiple
      loading = {loading}
      noOptionsText = {noOptionsText}
      loadingText = {loadingText}
      sx={autocompleteStyles}
      options={options}
      onChange={onChange}
      disableCloseOnSelect
      ListboxProps={{
        className: 'custom-dropdown',
      }}
      PaperComponent={(props) => <CustomPaper {...props} />}
      getOptionLabel={(option) =>  option.name}
      filterOptions={(options, state) => {
        return options.filter((option) => {
          return option.name.toLowerCase().includes(state.inputValue.toLowerCase());
        });
      }}
      renderOption={(props, option, state) => (
        <OptionItem {...props} key={option.id}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={state.selected}
          />
          <OptionImage src={option.image} alt={option.name} />
          <OptionText>
            <div dangerouslySetInnerHTML={{ __html: highlightString(option.name, state.inputValue) }} />
            <OptionEpisodes>{option.episode} Episodes</OptionEpisodes>
          </OptionText>
        </OptionItem>
      )}
      renderInput={(params) => (
      <CustomTextField {...params} onChange={onSearch} />)}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            sx={chipStyles}
            deleteIcon={<CustomClearIcon />}
            label={option.name}
            {...getTagProps({index})}
          />
        ))
      }
    />
  );
}
