export const customStyles = {
  control: (base, state) => ({
    ...base,

    background: "#dddddd61",

    // match with the menu
    borderRadius: state.isFocused ? "5px 5px 0 0" : 3,
    // Overwrittes the different states of border
    border: "2px #ca04f1 solid",
    // Overwrittes the different states of border

    color: state.isFocused ? "#ca04f1" : "#c961de",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    menuList: (styles) => ({
      ...styles,
      background: "papayawhip",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused
        ? "hsla(291, 64%, 42%, 0.5)"
        : isSelected
        ? "hsla(291, 64%, 42%, 1)"
        : undefined,
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
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
