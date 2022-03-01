//! --- IMPORTS ---
//     * NEXT-JS-MODULES

//     * REACT-JS-MODULES

//     * PAGES

//     * COMPONENTS

//     * STATE-MANAGEMENT (REDUX)

//     * APOLLO

//     * CUSTOM-HOOKS

//     * UTILS/HELPERS

//     * ASSETS

//     * LIBRARIES
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

//     * STATIC-CONFIG

//! --- COMPONENT ---
const AutocompleteInput = ({ entries, placeholder, handleChangeFilter }) => {
  //     * INIT
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  //     * STATES

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={entries}
      onChange={(event, value) => handleChangeFilter(placeholder, value)}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder={placeholder} />
      )}
    />
  );
};

export default AutocompleteInput;
