import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiAlert: {
      defaultProps: {
        elevation: 6,
        variant: 'filled',
      },
      styleOverrides: {
        action: {
          alignItems: 'center',
          height: 'inherit',
          paddingLeft: '12px',
          paddingTop: '0px',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
    },
    MuiBreadcrumbs: {
      defaultProps: {
        color: 'inherit',
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          padding: '4px',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
        maxWidth: 'md',
      },
    },
    MuiDialogContent: {
      defaultProps: {
        style: {
          paddingTop: '8px',
        }
      }
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: '0px',
          paddingRight: '4px',
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: 'inherit',
        size: 'small',
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiList: {
      defaultProps: {
        dense: true,
        disablePadding: true,
      },
    },
    MuiListItem: {
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiListItemIcon: {
      defaultProps: {
        style: {
          marginRight: '6px',
          minWidth: 'fit-content',
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        keepMounted: true,
        MenuListProps: { dense: true },
      },
    },
    MuiModal: {
      defaultProps: {
        keepMounted: true,
      },
    },
    MuiPopover: {
      defaultProps: {
        elevation: 4,
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          padding: '4px',
        },
      },
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: 'small',
      },
    },
    MuiToolbar: {
      defaultProps: {
        style: {
          paddingLeft: '6px',
          paddingRight: '6px',
        },
        variant: 'dense',
      },
    }
  },
  palette: {
    common: {
      black: '#0A4551'
    },
    primary: {
      main: "#98C0C8"
    },
    text: {
      primary: "rgba(17, 24, 39, 1)+"
    }
  }
});

export default theme;
