import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";
import { useRef } from "react";

export default function Checkbox ( { checked, className = "", disabled = false, fullWidth, label, onChange, value } ) {
  const checkRef = useRef( null );

  function handleChange ( ev ) {
    ev.stopPropagation();
    onChange( ev );
  }

  function handleToggle () {
    const ev = new Event( "change" );
    checkRef.current.dispatchEvent( ev );
  }

  return (
    <FormControlLabel
      className={ `${ fullWidth ? "w-full" : "" } ${ className } hover:bg-gray-50` }
      control={
        <MuiCheckbox
          checked={ checked }
          disabled={ disabled }
          ref={ checkRef }
          onChange={ handleChange }
          size="small"
          value={ value } />
      }
      label={ label }
      onClick={ handleToggle }
    />
  );
}
