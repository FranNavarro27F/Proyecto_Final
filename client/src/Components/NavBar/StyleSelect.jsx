export const customStyles = {
  control: (base, state) => ({
    ...base,
    // color: state.isFocused ? "white" : "white",
    background: "#85858566",
    // match with the menu
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#ca04f1" : "#c961de",

    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,

    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#cd03f5" : "blue",
    },
  }),
  menu: (base) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
  }),
};
