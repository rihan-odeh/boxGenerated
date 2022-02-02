import React, { useState } from "react";
import StyledBox from "./StyledBox";
import StyledInput from "./StyledInput";
import StyledButton from "./StyledButton";

const BoxGenerator = props => {
  const colorField = React.createRef();

  const [state, setState] = useState({
    boxes: [],
    newColor: "",
    newWidth:100
    
  });

  const onClickHandler = e => {
    try {
      e.preventDefault();
      setState({
        boxes: [...state.boxes, {
          color: state.newColor,
          width: 100
         
        }],
        newColor: "",
        newWidth:100
      
      });
      colorField.current.value = "";
      
    }
    catch{
      console.error();
    }
  };
  const onChangeColorHandler = e => {
    e.preventDefault();
    setState({
      ...state,
      newColor: e.target.value
    });
  };
  
  return (
    <div>
      <h1>Add a new box!</h1>
      <StyledInput
        ref={colorField}
        onChange={onChangeColorHandler}
        placeholder="Color"
      />
     
      <StyledButton onClick={onClickHandler}>Submit</StyledButton>
      <div>
        {state.boxes.map((box, index) => (
          <StyledBox
            key={index}
            bgColor={box.color}
            width={state.width}
            height={state.width}
           
            
          ></StyledBox>
        ))}
      </div>
    </div>
  );
};


export default BoxGenerator;

