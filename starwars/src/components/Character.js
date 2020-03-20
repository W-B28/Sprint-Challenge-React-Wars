import React, { useState} from "react";

import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';


const Character = (props) => {
  console.log(props)
  const [popoverOpen, setPopoverOpen] = useState(false);

	const toggle = () => setPopoverOpen(!popoverOpen);

  return (

		<div>
			<Button color="primary" className="my-2" id="Popover1"  type="button">
      {props.character.name}
			</Button>
			<Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
				<PopoverHeader>{props.character.name}</PopoverHeader>
				<PopoverBody>
                    Height:{props.character.height}
                    Weight:{props.character.mass}
        </PopoverBody>
			</Popover>
		</div>
	);
};

export default Character;
