import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

function DemoList(props) {
	return (
		<ul>
			<Context.Consumer>
				{
          (flux) => {
            console.log(flux);
					}
				  }
        }
			</Context.Consumer>
		</ul>
	);
}

DemoList.propTypes = {
	items: PropTypes.array
};

export default DemoList;
