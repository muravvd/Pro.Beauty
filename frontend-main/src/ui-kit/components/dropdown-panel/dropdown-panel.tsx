import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { DropdownWrapper } from "./styled";
import { UpperControlPanel } from "../upper-panel/upper-panel";
import { sections } from "../../../app/pages/header/header";

const BasicDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  function drop() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div>
      <HiBars3 onClick={drop} cursor={"pointer"}></HiBars3>
      {showDropdown && (
        <DropdownWrapper>
          <UpperControlPanel sections={sections} />
        </DropdownWrapper>
      )}
    </div>
  );
};

export const DropdownPanel = () => {
  return <BasicDropdown />;
};
