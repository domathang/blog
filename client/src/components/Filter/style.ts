import styled from "styled-components";

export const FilterBtn = styled.div`
  height: 3px;
  background-color: black;
  margin: 5px 0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s linear;
  :hover {
    transform: scale(1.05, 2);
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  overflow: hidden;
`;

export const FilterDiv = styled.div`
  text-align: center;

  @keyframes slide-fade-in-dropdown {
    from {
      transform: translateY(-225px);
      height: 0px;
    }
    to {
      transform: translateY(0%);
      height: 225px;
    }
  }

  @keyframes slide-fade-out-dropdown {
    from {
      transform: translateY(0%);
      height: 225px;
    }

    to {
      transform: translateY(-225px);
      height: 0;
    }
  }

  &.slide-fade-in-dropdown {
    animation: slide-fade-in-dropdown 0.5s linear;
  }

  &.slide-fade-out-dropdown {
    animation: slide-fade-out-dropdown 0.5s linear;
    animation-fill-mode: forwards;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
`;

export const FilterTitle = styled.span`
  width: 150px;
  font-family: "MusinsaMedium";
`;

export const FilterOptionItem = styled.button<{ $selected?: boolean }>`
  margin: 0 10px;
  border: none;
  white-space: nowrap;
  background-color: ${(props) => (props.$selected ? "lightgray" : "white")};
  transition: background-color 0.5s linear;

  :hover {
    background-color: lightgray;
  }
`;

export const OptionAll = styled(FilterOptionItem)`
  margin: 0 10px;
  width: 150px;
`;

export const ColorOption = styled.button<{ $color?: string }>`
  background-color: ${(props) => (props.$color ? props.$color : "black")};
  width: 16px;
  height: 16px;
  border: 2px outset buttonborder;
  padding: 0;
  margin: 0 2px;
`;

export const ColorOptionBox = styled.div<{ $selected?: boolean }>`
  width: 24px;
  height: 24px;
  margin: 0 10px;
  transition: border-color 0.1s linear;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => (props.$selected ? "black" : "white")};

  :hover {
    border-color: black;
  }
`;

export const FilterOptionItems = styled.div`
  display: flex;
  align-items: center;
`;