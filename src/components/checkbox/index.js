import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

const CheckBox = ({ label }) => {
  // Create a custom checkbox component
  return (
    <CheckboxCont>
      <label class="b-contain">
        <span>{label}</span>
        <input type="checkbox" />
        <div class="b-input"></div>
      </label>
    </CheckboxCont>
  );
};

const CheckboxCont = styled.div`
  position: relative;

  .b-contain *, .b-contain *::before, .b-contain *::after {
  	box-sizing: content-box !important;
  }

  .b-contain input {
  	position: absolute;
  	z-index: -1;
  	opacity: 0;
  }

  .b-contain span {
  	line-height: 1.54;
  	font-size:0.8rem;
  	font-family: inherit;
    color: #656f7d;
    display: inline-block;
    margin-top: -5px;
  }

  .b-contain {
  	display: table;
  	position: relative;
  	padding-left: 2rem;
  	cursor: pointer;
  	margin-bottom: .5rem;
  }

  .b-contain input[type="checkbox"] ~ .b-input {
  	position: absolute;
  	top: 0;
  	left: 0;
  	height: 1.25rem;
  	width: 1.25rem;
  	transition: background 250ms;
  	border: 1.5px solid #31475f;
  	border-radius: 0.3rem;
  }

  .b-contain input[type="checkbox"] ~ .b-input::after {
  	content: '';
  	position: absolute;
  	display: none;
  	left: .45rem;
  	top: .18rem;
  	width: .25rem;
  	height: .6rem;
  	border: solid rgba(255, 255, 255, 1);
  	border-width: 0 2px 2px 0;
  	transition: background 250ms;
  	transform: rotate(45deg);
  }

  .b-contain input:disabled ~ .b-input::after {
  	border-color: rgba(135, 149, 161, 1);
  }

  .b-contain input:checked ~ .b-input::after {
  	display: block;
  }

  .b-contain:hover input ~ .b-input,
  .b-contain input:focus ~ .b-input {
  	background: ${colors.primaryColor};
  }

  .b-contain input:focus ~ .b-input {
  	box-shadow: ${colors.primaryColor};
  }

  .b-contain input:checked ~ .b-input {
  	background: ${colors.primaryColor};
  	border-color: ${colors.primaryColor};
  }

  .b-contain input[type="checkbox"]:disabled ~ .b-input {
  	background: rgba(241, 245, 248, 1);
  	border-color: rgba(184, 194, 204, 1);
  	opacity: 0.6;
  	cursor: not-allowed;
  }

  .b-contain .b-input::before {
  	content: '';
  	display: block;
  	position: absolute;
  	left: 0;
  	top: 0;
  	width: 3rem;
  	height: 3rem;
  	margin-left: -0.85rem;
  	margin-top: -0.85rem;
  	background: ${colors.primaryColor};
  	border-radius: 2rem;
  	opacity: .6;
  	z-index: 99999;
  	transform: scale(0);
  }

  .b-contain input + .b-input::before {
  	animation: b-ripple 250ms ease-out;
  }

  .b-contain input:checked + .b-input::before {
  	animation-name: b-ripple-duplicate;
  }

  .b-contain .b-input::before {
  	visibility: hidden;
  }

  .b-contain input:focus + .b-input::before {
  	visibility: visible;
  }

  .b-contain:first-child .b-input::before {
  	visibility: hidden;
  }
}
`;

export default CheckBox;
